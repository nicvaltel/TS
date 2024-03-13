export class Nothing {
}
export class Just {
    constructor(val) {
        this.val = val;
    }
    ;
    fromJust() {
        return this.val;
    }
}
// Use example:
// function randomNextBallColor(): BallColor {
//     return randomEnumValue(BallColor);
// }
export const randomEnumValue = (enumeration) => {
    const values = Object.keys(enumeration);
    const enumKey = values[Math.floor(Math.random() * values.length)];
    return enumeration[enumKey];
};
