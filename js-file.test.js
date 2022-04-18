const capitalize = require('./js-file')

test('first test', () => {
    expect(capitalize('first')).toBe('First')
})

test('second test', () => {
    expect(capitalize('this is the second test')).toBe('This is the second test')
})

test('Third test', () => {
    expect(capitalize('a third test is always a good idea')).toBe('A third test is always a good idea')
})

test('Fourth test', () => {
    expect(capitalize('First')).toBe('First')
})