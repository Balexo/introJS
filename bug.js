
const calcularPromedio = (numeros) => {
let sumaTotal = 0;
    for (let i = 0; i < numeros.length; i++) { //Sobre el =. La longitud 4 ya que empieza a contar en 0 el array
    sumaTotal += numeros[i];
    }
const promedio = sumaTotal / numeros.length;
return promedio;
};
const listaNumeros = [1, 2, 3, 4, 5];
const promedioNumeros = calcularPromedio(listaNumeros);
console.log(promedioNumeros)