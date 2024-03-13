import { uiFontSize, uiFontName, uiFontColor } from "./constants.js";

export type UI = {
    fontSize: number;
    fontFamily: string;
    color: string;
}

export function defaultUI(): UI {
    return {
        fontSize: uiFontSize,
        fontFamily: uiFontName,
        color: uiFontColor,
    }
}