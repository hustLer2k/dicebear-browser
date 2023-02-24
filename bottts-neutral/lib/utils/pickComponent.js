/**
 * Do not change this file manually! This file was generated with the "Dicebear Exporter"-Plugin for Figma.
 *
 * Plugin: https://www.figma.com/community/plugin/1005765655729342787
 * File: https://www.figma.com/file/4nf3pyoOuM1U9Pa8M0cL6u
 */
import * as components from '../components/index.js';
export function pickComponent({ prng, group, values = [] }) {
    const componentCollection = components;
    const key = prng.pick(values);
    if (key && componentCollection[group][key]) {
        return {
            name: key,
            value: componentCollection[group][key],
        };
    }
    else {
        return undefined;
    }
}