/**
 * Do not change this file manually! This file was generated with the "Dicebear Exporter"-Plugin for Figma.
 *
 * Plugin: https://www.figma.com/community/plugin/1005765655729342787
 * File: https://www.figma.com/file/HBLdITkkTnLs4M09BmCe4h
 */
export function onPostCreate({ prng, options, components, colors }) {
    var _a, _b;
    if (((_a = components.style) === null || _a === void 0 ? void 0 : _a.name) === 'circle') {
        options.backgroundColor = [];
    }
    if (((_b = components.style) === null || _b === void 0 ? void 0 : _b.name) !== 'circle'
        && options.backgroundColor
        && options.backgroundColor.length === 1
        && options.backgroundColor[0] === '65c9ff') {
        options.backgroundColor = [];
    }
}
