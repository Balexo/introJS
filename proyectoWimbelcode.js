//Leer readme por favor para aclarar el funcionamiento
function createMatch(p1, p2) {
    let player1={
        p1Points: 0,
        p1Rounds:0,
        p1MatchScore: 0
    } 
    let player2={
        p2Points: 0,
        p2Rounds:0,
        p2MatchScore: 0
    } 
    let points= [0, 15, 30, 40] // Puntos de set

    const pointWonBy=(value)=>{//La variable value===1 da un punto al jugador1 y la variable 2 al jugardor2
        value===1 ? player1.p1Points++ : player2.p2Points++
        return value
    }    
    
    const getCurrentRoundScore=()=>{//Devolvemos el resultado durante el punto. Sumamos un punto en una ronda al jugador que gane el punto
        let resultValues="" //Por si queremos comprobar punto a punto la evolución del partido podemos imprirmir esta variable
            
        if(player1.p1Points===3 && player2.p2Points===3){
            resultValues= "Deuce"
        }else{
            if(player1.p1Points<=3 && player2.p2Points<=3){
                resultValues=`Point score: ${p1} ${points[player1.p1Points]} - ${p2} ${points[player2.p2Points]}`
            }
            else if(Math.abs(player1.p1Points - player2.p2Points)<2){
                player1.p1Points > player2.p2Points ? resultValues=`Point score: Advantage ${p1} ` : resultValues=`Point score: Advantage ${p2}`
            }else{
                if(player1.p1Points > player2.p2Points){
                    resultValues=`Point score: ${p1} wins `
                    player1.p1Rounds++
                    
                } else {
                    resultValues=`Point score: ${p2} wins`
                    player2.p2Rounds++
                }
                player1.p1Points=0
                player2.p2Points=0
            } 
        }
    
        return resultValues
    }
    

    const getRoundScore=() =>{//Debe ganar 4 rondas por diferencia de 2
        let roundsValues=""
        let roundFinished=false //Condición para imprimir el resultado
        if((player1.p1Rounds===7 || player2.p2Rounds === 7) || ((player1.p1Rounds>=4 || player2.p2Rounds >=4) && Math.abs(player1.p1Rounds - player2.p2Rounds)>=2)){ //Condiciones para ganar
            roundsValues= player1.p1Rounds>player2.p2Rounds ? `${p1} wins: ${player1.p1Rounds} ${p2} ${player2.p2Rounds}` : `${p2} wins: ${player2.p2Rounds} - ${p1} ${player1.p1Rounds}`
            if(player1.p1Rounds>player2.p2Rounds){
                roundFinished=true 
                player1.p1MatchScore++  
                player1.p1Rounds=0
                player2.p2Rounds=0  

            }else{
                roundFinished=true
                player2.p2MatchScore++  
                player1.p1Rounds=0
                player2.p2Rounds=0
                
            }
        }else{
            roundsValues=`Round score ${p1} ${player1.p1Rounds}-${p2} ${player2.p2Rounds}`
        }
        return {roundsValues, roundFinished}
    }    
    
    const getMatchScore=() =>{//Debe de ganar 2 rondas
        let matchValues=""
        let matchFinished=false //Condición para imprimir el resultado

        if(player1.p1MatchScore<2 && player2.p2MatchScore<2){
            matchValues=`Match score: ${p1} ${player1.p1MatchScore} - ${p2} ${player2.p2MatchScore}`
        }else{
            matchFinished=true
            matchValues = player1.p1MatchScore===2 ? `Match score: ${p1} win the match` : `Match score: ${p2} win the match` 
        }

        return {matchValues, matchFinished}
    }

    const getWinner=() =>{
        let winner=""
        winner = player1.p1MatchScore===2 ? `${p1} is the winner` : `${p2} is the winner`

        return winner
    }
    return {
        pointWonBy: pointWonBy,
        getCurrentRoundScore: getCurrentRoundScore,
        getRoundScore: getRoundScore,
        getMatchScore: getMatchScore,
        getWinner: getWinner
    }
}

const game = createMatch('Alberto C', 'David J');
const game1 = createMatch('Javier M', 'Edu Aguilar');

console.log("----------------------------------FIRST MATCH ----------------------------------")
let matchScore = game.getMatchScore() //Primer partido

while (matchScore.matchValues!==`Match score: Alberto C win the match` && matchScore.matchValues!==`Match score: David J win the match`){
    let randomPoint=Math.floor(Math.random() * 2) + 1
    game.pointWonBy(randomPoint)
    game.getCurrentRoundScore() //Añadir console.log para ver quien gana cada punto en getCurrentRoundScore
    let roundScoreFinished=game.getRoundScore()
    if(roundScoreFinished.roundFinished===true){
        console.log(roundScoreFinished.roundsValues)
    }
   matchScore = game.getMatchScore()
   if(matchScore.matchFinished===true){
        console.log(matchScore.matchValues)
   } 
   console.log(game.getWinner())
}

let winner1= game.getMatchScore().matchValues==="Match score: Alberto C win the match" ? "Alberto C" : "David J"


console.log("----------------------------------SECOND MATCH ----------------------------------")

let matchScore1 = game1.getMatchScore() //Segundo partido

while (matchScore1.matchValues!==`Match score: Javier M win the match` && matchScore1.matchValues!==`Match score: Edu Aguilar win the match`){
    let randomPoint=Math.floor(Math.random() * 2) + 1
    game1.pointWonBy(randomPoint)
    game1.getCurrentRoundScore() //Añadir console.log para ver quien gana cada punto en getCurrentRoundScore
    let roundScoreFinished=game1.getRoundScore()
    if(roundScoreFinished.roundFinished===true){
        console.log(roundScoreFinished.roundsValues)
    }
   matchScore1 = game1.getMatchScore()
   if(matchScore1.matchFinished===true){
        console.log(matchScore1.matchValues)
   } 
   console.log(game1.getWinner())
}

let winner2 = game1.getMatchScore().matchValues==="Match score: Javier M win the match" ? "Javier M" : "Edu Aguilar"
console.log(winner2)

console.log("----------------------------------FINAL MATCH ----------------------------------")
const gameFinal = createMatch(winner1, winner2) //Final

let matchScore2 = gameFinal.getMatchScore()

while (matchScore2.matchValues!==`Match score: ${winner1} win the match` && matchScore2.matchValues!==`Match score: ${winner2} win the match`){
    let randomPoint=Math.floor(Math.random() * 2) + 1
    gameFinal.pointWonBy(randomPoint)
    gameFinal.getCurrentRoundScore() //Añadir console.log para ver quien gana cada punto en getCurrentRoundScore
    let roundScoreFinished=gameFinal.getRoundScore()
    if(roundScoreFinished.roundFinished===true){
        console.log(roundScoreFinished.roundsValues)
    }
   matchScore2 = gameFinal.getMatchScore()
   if(matchScore2.matchFinished===true){
        console.log(matchScore2.matchValues)
   } 
   console.log(gameFinal.getWinner())
}

//Código manual para comprobar que funciona correctamente el código antes de utilizar los bucles.
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); // Alberto C 15-0 David J
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); // Alberto C 30-0 David J
game.pointWonBy(2);
console.log(game.getCurrentRoundScore()); // Alberto C 30-15 David J
game.pointWonBy(2);
console.log(game.getCurrentRoundScore()); // Alberto C 30-30 David J
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); // Alberto C 40-30 David J
game.pointWonBy(2);
console.log(game.getCurrentRoundScore()); // Alberto C 40-40 David J
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); // Alberto C Advantage
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); // Alberto C 1-0 David J
console.log(game.getRoundScore()) //Alberto C 1 - David J 0
game.pointWonBy(2);
console.log(game.getCurrentRoundScore()); // Alberto C 15-0 David J
game.pointWonBy(2);
console.log(game.getCurrentRoundScore()); // Alberto C 30-0 David J
game.pointWonBy(2);
console.log(game.getCurrentRoundScore()); // Alberto C 40-0 David J
game.pointWonBy(2);
console.log(game.getCurrentRoundScore()); // Alberto C 1-0 David J
console.log(game.getRoundScore().roundsValues) //Alberto C 2 - David J 0
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); // Alberto C 15-0 David J
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); // Alberto C 30-0 David J
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); // Alberto C 40-0 David J
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); // Alberto C 3-0 David J
console.log(game.getRoundScore()) //Alberto C 3 - David J 0
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); // Alberto C 15-0 David J
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); // Alberto C 30-0 David J
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); // Alberto C 40-0 David J
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); // Alberto C 1-0 David J
console.log(game.getRoundScore()) //Alberto C 4 - David J 0
console.log(game.getMatchScore()) //MATCH SCORE Alberto C 1 - David J 0
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); // Alberto C 15-0 David J
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); // Alberto C 30-0 David J
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); // Alberto C 40-0 David J
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); // Alberto C 1-0 David J
console.log(game.getRoundScore()) //Alberto C 1 - David J 0
console.log(game.getMatchScore())
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); // Alberto C 15-0 David J
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); // Alberto C 30-0 David J
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); // Alberto C 40-0 David J
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); // Alberto C 1-0 David J
console.log(game.getRoundScore()) //Alberto C 2 - David J 0
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); // Alberto C 15-0 David J
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); // Alberto C 30-0 David J
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); // Alberto C 40-0 David J
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); // Alberto C 3-0 David J
console.log(game.getRoundScore()) //Alberto C 3 - David J 0
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); // Alberto C 15-0 David J
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); // Alberto C 30-0 David J
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); // Alberto C 40-0 David J
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); // Alberto C 1-0 David J
console.log(game.getRoundScore()) //Alberto C 4 - David J 0
console.log(game.getCurrentRoundScore()); // Alberto C 15-0 David J
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); // Alberto C 30-0 David J
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); // Alberto C 40-0 David J
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); // Alberto C 40-0 David J
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); // Alberto C 1-0 David J
console.log(game.getRoundScore()) //Alberto C 4 - David J 0
console.log(game.getMatchScore()) //MATCH SCORE Alberto C 1 - David J 0


