import { getMimeType } from './utils/mime-type.js';
import { ensureSize } from './utils/svg.js';
import { getEncoder } from './utils/text.js';
export const toFormat = function (svg, format, exif) {
    return {
        toDataUri: () => toDataUri(svg, format, exif),
        toFile: (name) => toFile(name, svg, format, exif),
        toArrayBuffer: () => toArrayBuffer(svg, format, exif),
    };
};
async function toDataUri(svg, format, exif) {
    if ('svg' === format) {
        return `data:${getMimeType(format)};utf8,${encodeURIComponent(svg)}`;
    }
    const canvas = await toCanvas(svg, format, exif);
    return canvas.toDataURL(getMimeType(format));
}
async function toArrayBuffer(rawSvg, format, exif) {
    if ('svg' === format) {
        return getEncoder().encode(rawSvg);
    }
    const canvas = await toCanvas(rawSvg, format, exif);
    return await new Promise((resolve, reject) => {
        canvas.toBlob((blob) => {
            blob
                ? resolve(blob.arrayBuffer())
                : reject(new Error('Could not create blob'));
        }, getMimeType(format));
    });
}
async function toFile(name, svg, format, exif) {
    const link = document.createElement('a');
    link.href = await toDataUri(svg, format, exif);
    link.download = name;
    link.click();
    link.remove();
}
async function toCanvas(rawSvg, format, exif) {
    if (exif) {
        console.warn('The `exif` option is not supported in the browser version of `dicebear-browser/converter`. \n' +
            'Please use the node version of `dicebear-browser/converter` to generate images with exif data.');
    }
    let { svg, size } = ensureSize(rawSvg);
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext('2d');
    if (null === context) {
        throw new Error('Could not get canvas context');
    }
    if (format === 'jpeg') {
        context.fillStyle = 'white';
        context.fillRect(0, 0, size, size);
    }
    var img = document.createElement('img');
    img.width = size;
    img.height = size;
    img.setAttribute('src', await toDataUri(svg, 'svg'));
    return new Promise((resolve, reject) => {
        img.onload = () => {
            context.drawImage(img, 0, 0, size, size);
            resolve(canvas);
        };
        img.onerror = (e) => reject(e);
    });
}
