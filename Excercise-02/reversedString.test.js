const reversedString = require('./reversedString')

test('First test', () => {
    expect(reversedString('first')).toBe('tsrif')
})

test('Second test', () => {
    expect(reversedString('This is an ugly phrase')).toBe('esarhp ylgu na si sihT')
})

test('Second test', () => {
    expect(reversedString('This is an ugly phrase..!&^$%$#')).toBe('#$%$^&!..esarhp ylgu na si sihT')
})