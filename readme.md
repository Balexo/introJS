Línea 159 texto comentado explica como funciona paso a paso un punto. 
Hecho algún cambio mínimo en el texto a imprimir para indicar situación del partido:
game.pointWonBy(2) -> No imprime nada para simplificar la impresión por pantalla
console.log(game.getCurrentRoundScore()) -> Imprime Point score: Alberto C 15 - David J 0 para saber la situación en la que estamos en el partido y ver que la lógica funciona correctamente
console.log(game.getRoundScore()) -> Imprime {roundsValues: 'Round score Alberto C 1-David J 0', roundFinished: false}
Si hubiera puesto console.log(game.getRoundScore().roundValues) imprimiría solo el valor del partido y no todo el objeto. Está hecho así para que cuando sea falso no imprima al mimso tiempo que console.log(game.getCurrentRoundScore()) y solo lo imprima cuando se acabe un punto y no saturar la pantalla. 
Console.log(game.getWinner()) imprime "Jugador" is the winner para simplificar la visualización del ganador.
