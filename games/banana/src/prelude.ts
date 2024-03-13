export type Maybe<A> = Nothing | Just<A>

export class Nothing {}

export class Just<A> {
    constructor(private val : A){};

    fromJust():A {
        return this.val;
    }
}


// Use example:
// function randomNextBallColor(): BallColor {
//     return randomEnumValue(BallColor);
// }
export const randomEnumValue = (enumeration: any) => {

    const values = Object.keys(enumeration);
    const enumKey = values[Math.floor(Math.random() * values.length)];
    return enumeration[enumKey];
  }
