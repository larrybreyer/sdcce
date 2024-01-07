// helper function
const $ = (id) => document.getElementById(id)

function getRandomNumber(){

}

function changePlayer() {
    if ($('current').innerHTML === $('player1').value){
        $('current').innerHTML = $('player2').value
        
    }else{
        $('current').innerHTML = $('player1').value

    }
}

function newGame() {
    $('score1').value = 0;
    $('score2').value = 0;

    if($('player1').value !== '' && $('player1').value !== ''){
        $('turn').setAttribute('class','open')
        changePlayer()
    }else{
        $('turn').setAttribute('class','')
        alert('Please enter two player names to begin.')
    }



}

function rollDie() {

}

function holdTurn(){

}

$('new_game').addEventListener('click', newGame)
$('roll').addEventListener('click', rollDie)
$('hold').addEventListener('click', holdTurn)


