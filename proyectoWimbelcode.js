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
    let roundResults=[[],[]]
   
    //let finishedCurrentRoundScore=false
    //let finishedGetRoundScore=false


    const pointWonBy=(value)=>{//La variable value===1 da un punto al jugador1 y la variable 2 al jugardor2
        value===1 ? player1.p1Points++ : player2.p2Points++
        return value
    }    
    
    const getCurrentRoundScore=()=>{//Devolvemos el resultado durante el punto. Sumamos un punto en una ronda al jugador que gane el punto
        let resultValues=""
            
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
        let roundFinished=false
        if((player1.p1Rounds===7 || player2.p2Rounds === 7) || ((player1.p1Rounds>=4 || player2.p2Rounds >=4) && Math.abs(player1.p1Rounds - player2.p2Rounds)>=2)){ 
            roundsValues= player1.p1Rounds>player2.p2Rounds ? `${p1} wins: ${player1.p1Rounds}` : `${p2} wins: ${player2.p2Rounds}`
            if(player1.p1Rounds>player2.p2Rounds){
                roundFinished=true
                player1.p1MatchScore++  
                roundResults.push(roundResults[0]) 
                player1.p1Rounds=0
                player2.p2Rounds=0  

            }else{
                roundFinished=true
                player2.p2MatchScore++  
                roundResults.push(roundResults[1]) 
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
        if(player1.p1MatchScore<2 && player2.p2MatchScore<2){
            matchValues=`Match score: ${p1} ${player1.p1MatchScore} - ${p2} ${player2.p2MatchScore}`
        }else{
        matchValues = player1.p1MatchScore===2 ? `Match score: ${p1} win the match` : `Match score: ${p2} win the match` 
        }

        return matchValues
    }
    return {
        pointWonBy: pointWonBy,
        getCurrentRoundScore: getCurrentRoundScore,
        getRoundScore: getRoundScore,
        getMatchScore: getMatchScore
    }
}

const game = createMatch('Alberto C', 'David J');
const game1 = createMatch('Javier M', 'Edu Aguilar');

//Revisar se funciona ben un partido
/*
while (game.getMatchScore()!==`Match score: Alberto C win the match` && game.getMatchScore()!==`Match score: David J win the match`){
    let randomPoint=Math.floor(Math.random() * 2) + 1
    game.pointWonBy(randomPoint),
    console.log(game.getCurrentRoundScore()),
    console.log(game.getRoundScore()),
    console.log(game.getMatchScore())
}

let winner1= game.getMatchScore()==="`Match score: Alberto C win the match`" ? "Alberto C" : "David J"
*/
while (game1.getMatchScore()!==`Match score: Javier M win the match` && game1.getMatchScore()!==`Match score: Edu Aguilar win the match`){
    let randomPoint=Math.floor(Math.random() * 2) + 1
    game1.pointWonBy(randomPoint),
    console.log(game1.getCurrentRoundScore())
    let RoundScoreFinished=game1.getRoundScore()
    if(RoundScoreFinished.roundFinished===true){
        console.log(RoundScoreFinished.roundsValues)
    }
   // console.log(game1.getRoundScore()),
    console.log(game1.getMatchScore())
}
/*
let winner2 = game.getMatchScore()==="`Match score: Javier M win the match`" ? "Javier M" : "Edu Aguilar"

const gameFinal = createMatch(winner1, winner2);
while (gameFinal.getMatchScore()!==`Match score: Javier M win the match` && gameFinal.getMatchScore()!==`Match score: Edu Aguilar win the match`){
    let randomPoint=Math.floor(Math.random() * 2) + 1
    gameFinal.pointWonBy(randomPoint),
    console.log(gameFinal.getCurrentRoundScore()),
    console.log(gameFinal.getRoundScore()),
    console.log(gameFinal.getMatchScore())
}


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
*/

