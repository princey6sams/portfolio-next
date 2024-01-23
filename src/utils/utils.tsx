const config = require("../../next.config.js");

const Base = config.basePath;

//A function that will take in a string as a parameter and return it with '{&Base}' replaced with the value of the variable Base
export function replaceBase(string: string) {
    return string.replace(/\$\{Base\}/gi, Base);
}

