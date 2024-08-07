const finalMultiplier = require('./../js/finalMultiplier.js');
const { SYMBOLS_VALUE } = require("./../js/constants.js")

const slots1 = [
    ["A", "A", "A"],
    ["B", "C", "B"],
    ["C", "C", "B"]
]

test('there is one line with A symbol', () => {
    expect(finalMultiplier(slots1)).toEqual(SYMBOLS_VALUE["A"]);
});

const slots2 = [
    ["A", "A", "B"],
    ["B", "C", "B"],
    ["C", "C", "B"]
]

test('there is no complete line, gonna have no final multiplier', () => {
    expect(finalMultiplier(slots2)).toEqual(0);
});

const slots3 = [
    ["A", "A", "A"],
    ["B", "C", "B"],
    ["C", "C", "C"]
]

test('there are two complete lines, the value of A and C symbol are sum', () => {
    expect(finalMultiplier(slots3)).toEqual(SYMBOLS_VALUE["A"] + SYMBOLS_VALUE["C"]);
});

