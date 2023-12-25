const { log } = console;

let game = document.querySelector('.game')
let reset = document.querySelector('.reset')

let positions = [1,2,3,4,5,6,7,8,9];

let wins = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]

let player1 = [];
let player2 = [];


let turn = true;
let playGame = true;

function render(){
    positions.forEach(el =>  {
        game.innerHTML += //html
        `
        <div class="pos" data-pos="${el}"></div>
        `
    })
}
render()

game.addEventListener('click', (e) => {
    if(playGame){
        if(e.target.classList.contains('pos')){
            if(turn){
                e.target.innerText = 'x';
                turn = false;
                player1.push(Number(e.target.getAttribute('data-pos')))
                if(wins.some(w => w.every(v => player1.includes(v)))){
                    playGame = false;
                }
                if(!playGame){
                    alert('WINNER WINNER CHICKEN DINNER 👩👩👩👩  Player 1 winner')
                }
            } else{
                e.target.innerText = 'o';
                turn = true;
                player2.push(Number(e.target.getAttribute('data-pos'))  )
                if(wins.some(w => w.every(v => player2.includes(v)))){
                    playGame = false;
                }
                if(!playGame){
                    alert('WINNER WINNER CHICKEN DINNER 👳🏾‍♀️👳🏾‍♀️👳🏾‍♀️👳🏾‍♀️   Player 2 winner')
                }
                console.log(`player1: ${player1},  player2: ${player2}`)
            }
        }
    }

})

function checkWin(arr1, arr2){
    let count = 0;

    arr1.forEach(el => {
        if(arr2.includes(el))
        count++;
    })
    return count; 
}

console.log(positions.every(num => num > 5));

reset.addEventListener('click', () => {
    player1 = [];
    player2 = [];
    playGame = true;
    document.querySelectorAll('.pos').forEach( pos => {
        pos.innerText = ''
    })
})