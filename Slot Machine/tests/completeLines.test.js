const completeLines = require('./../js/completeLines.js');

const slots1 = [
    ["A", "A", "A"],
    ["B", "C", "B"],
    ["C", "C", "B"]
]

test('there is only one complete line', () => {
    expect(completeLines(slots1)).toEqual(1);
});

const slots2 = [
    ["A", "A", "B"],
    ["B", "C", "B"],
    ["C", "C", "B"]
]

test('there is no complete lines', () => {
    expect(completeLines(slots2)).toEqual(0);
});

const slots3 = [
    ["A", "A", "A"],
    ["B", "C", "B"],
    ["C", "C", "C"]
]

test('there are two complete lines', () => {
    expect(completeLines(slots3)).toEqual(2);
});

