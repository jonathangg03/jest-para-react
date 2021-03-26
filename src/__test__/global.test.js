const text = 'Hola Mundo'

test('Debe contener un texto', () => {// la descripción de la prueba generál
  expect(text).toMatch(/Mundo/)
})