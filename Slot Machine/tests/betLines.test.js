const betLines = require('./../js/betLines.js');

test('comparing different quantity of complete lines return zero', () => {
    expect(betLines(1, 2)).toEqual(0);
});

test('comparing same quantity of complete lines return same number', () => {
    expect(betLines(2, 2)).toEqual(2);
});