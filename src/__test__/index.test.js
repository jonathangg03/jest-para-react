const randomString = require('../index')

describe('Probar funcionalidades de randomStrings', () => {
  test('Probar la funcionalidad de la función randomString', () => {
    expect(typeof(randomString())).toBe('string')
  })
  test('Comprobar que no existe una ciudad', () => {
    expect(randomString()).not.toMatch(/Cordoba/)
  })
})