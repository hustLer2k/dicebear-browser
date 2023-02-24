import { promises as fs } from 'node:fs';
import { getMimeType } from '../utils/mime-type.js';
import { ensureSize } from '../utils/svg.js';
import * as tmp from 'tmp-promise';
import { ensurePackage } from '../utils/package-helper.js';
import { getEncoder } from '../utils/text.js';
export const toFormat = function (svg, format, exif) {
    return {
        toDataUri: () => toDataUri(svg, format, exif),
        toFile: (name) => toFile(name, svg, format, exif),
        toArrayBuffer: () => toArrayBuffer(svg, format, exif),
    };
};
async function toDataUri(svg, format, exif) {
    if (format === 'svg') {
        return `data:${getMimeType(format)};utf8,${encodeURIComponent(svg)}`;
    }
    const buffer = await toBuffer(svg, format, exif);
    return `data:${getMimeType(format)};base64,${buffer.toString('base64')}`;
}
async function toFile(name, svg, format, exif) {
    if (format === 'svg') {
        await fs.writeFile(name, svg);
        return;
    }
    await fs.writeFile(name, await toBuffer(svg, format, exif));
}
async function toArrayBuffer(rawSvg, format, exif) {
    if (format === 'svg') {
        return getEncoder().encode(rawSvg);
    }
    return (await toBuffer(rawSvg, format, exif)).buffer;
}
async function toBuffer(rawSvg, format, exif) {
    const isNode = typeof process !== "undefined" &&
        process.versions != null &&
        process.versions.node != null;

    
    await ensurePackage('@resvg/resvg-js', '~2.0 || ~2.1 || ~2.2 || ~2.3');
    const { renderAsync } = await import('@resvg/resvg-js');
    const interRegular = new URL('../../fonts/inter/inter-regular.otf', import.meta.url);
    const interBold = new URL('../../fonts/inter/inter-bold.otf', import.meta.url);
    let { svg } = ensureSize(rawSvg);
    let buffer = (await renderAsync(svg, {
        font: {
            loadSystemFonts: false,
            defaultFontFamily: 'Inter',
            fontFiles: [interRegular.pathname, interBold.pathname],
        },
    })).asPng();
    if ('jpeg' === format) {
        await ensurePackage('sharp', '0.30.0');
        const sharp = (await import('sharp')).default;
        buffer = await sharp(buffer)
            .flatten({ background: '#ffffff' })
            .toFormat(format)
            .toBuffer();
    }
    if (exif) {
        await ensurePackage('exiftool-vendored', '^16 || ^17 || ^18 || ^19 || ^20 || ^21');
        const exiftool = (await import('exiftool-vendored')).exiftool;
        await tmp.withFile(async ({ path }) => {
            await fs.writeFile(path, buffer);
            await exiftool.write(path, exif);
            buffer = await fs.readFile(path);
        });
    }
    return buffer;
}
