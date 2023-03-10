/**
 * Do not change this file manually! This file was generated with the "Dicebear Exporter"-Plugin for Figma.
 *
 * Plugin: https://www.figma.com/community/plugin/1005765655729342787
 * File: https://www.figma.com/file/WTcivb1XPf5ODtyv7ZNnU9
 */
import { convertColor } from './convertColor.js';
export function getColors({ prng, options }) {
    var _a, _b, _c, _d, _e, _f, _g;
    return {
        'accessories': convertColor(prng.pick((_a = options.accessoriesColor) !== null && _a !== void 0 ? _a : [], 'transparent')),
        'clothing': convertColor(prng.pick((_b = options.clothingColor) !== null && _b !== void 0 ? _b : [], 'transparent')),
        'eyes': convertColor(prng.pick((_c = options.eyesColor) !== null && _c !== void 0 ? _c : [], 'transparent')),
        'glasses': convertColor(prng.pick((_d = options.glassesColor) !== null && _d !== void 0 ? _d : [], 'transparent')),
        'hair': convertColor(prng.pick((_e = options.hairColor) !== null && _e !== void 0 ? _e : [], 'transparent')),
        'mouth': convertColor(prng.pick((_f = options.mouthColor) !== null && _f !== void 0 ? _f : [], 'transparent')),
        'skin': convertColor(prng.pick((_g = options.skinColor) !== null && _g !== void 0 ? _g : [], 'transparent')),
    };
}
;
