const text = 'Hola Mundo'
const fruits = ['manzana', 'melon', 'banana']
test('Debe contener un texto', () => {// la descripción de la prueba generál
  expect(text).toMatch(/Mundo/)
})

test('Tenemos una banana en el array', () => {
  expect(fruits).toContain('banana')
})

test('Mayor que', () => {
  expect(10).toBeGreaterThan(7)
})

test('Verdadero', () => {
  expect(true).toBeTruthy()
})

const reverseString = (str, callback) => {//Función que reciba un string e invierta sus valores
  callback(str.split("").reverse().join(""))
  //Para invertirlos debemos separar cada caracter, voltearlos, luego unirlos de nuevo en una sola frase
}

test('Probar un callback', () => {
  //Primero debemos ejecutar el callback, y cuando este se resuelva, ejecutamos el test
  reverseString('Hola', (str) => {//str sería 'Hola'
    expect(str).toBe('aloHa')
  })
})