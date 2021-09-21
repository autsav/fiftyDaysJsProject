const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const winningMessage = document.getElementById('winning-message');
const restartButton = document.getElementById('restartbutton');
const winningMessageTextElement = document.querySelector('[data-winning-message]')

const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const WINNING_COMBINATIONS = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]

]
let circleTurn 

startGame()

restartButton.addEventListener('click', startGame)

function startGame(){ 
        cellElements.forEach(cell =>{
            cell.classList.remove(X_CLASS)
            cell.classList.remove(CIRCLE_CLASS)
            cell.removeEventListener('click', handleClick)
            // console.log(cell)
            cell.addEventListener('click',handleClick,{once:true} )
})
setBoardHoverClass()
winningMessage.classList.remove('show')

}

//handle click will fire the element once only
function handleClick(e){
    const cell = e.target
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS //If it is circle's turn then send circle_class else x_class
    //placeMark
    placeMark(cell, currentClass)    
    //Check For Win
    if(checkWin(currentClass)){
     endGame(false)
       
    } else if(isDraw()){
        endGame(true)
    }else{
          //Check For Draw
    //Switch Turns
    swapTurn()
    setBoardHoverClass()

    }

  
}
function isDraw(){
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    })
}
function endGame(draw){
    if(draw){
        winningMessageTextElement.innerText = `"It's a Draw !"`
    }else{
        winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
    }
    winningMessage.classList.add('show')
}

function placeMark(cell, currentClass){
    cell.classList.add(currentClass)
}
function swapTurn(){
    circleTurn = !circleTurn
    
}
function setBoardHoverClass(){
    board.classList.remove(X_CLASS)
    board.classList.remove(CIRCLE_CLASS)

    if(circleTurn){
        board.classList.add(CIRCLE_CLASS)
    }else{
        board.classList.add(X_CLASS)
    }

}
function checkWin(currentClass){
    return WINNING_COMBINATIONS.some(combination =>{
       
        return combination.every(index => {
            // console.log(combination)
            // console.log(index)

            // console.log(cellElements[index])
            return cellElements[index].classList.contains(currentClass)
        })
    })
}