//Promesa:
const reverseString = str => {
  return new Promise((resolve, reject) => {
    if(!str){
      reject(Error('Error'))
    }
    resolve(str.split('').reverse().join(''))
  })
}

test('Probar una promesa', () => {
  return reverseString('Hola')
  .then(res => {
    expect(res).toBe('aloH')
  })
})

//Async y await

test('Probar async y await', async () => {
  const string = await reverseString('Hola');
  expect(string).toBe('aloH')
})

//Funciones antes o despues de las pruebas
afterEach(() => console.log('Despues de cada prueba'))
afterAll(() => console.log('Despues de todas las pruebas'))

beforeEach(() => console.log('Antes de cada prueba'))
beforeAll(() => console.log('Antes de todas las pruebas'))