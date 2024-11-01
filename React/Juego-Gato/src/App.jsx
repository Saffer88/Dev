import { useState } from 'react'
import './App.css'


const TURNS = {

  X : 'X',
  O : 'O'
}

 const WIN_COMBINATIONS = [
  [0, 1, 2], // Horizontal
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // Vertical
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // Diagonal
  [2, 4, 6]
]

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  
  const handleCick = () => {
    updateBoard(index)
  }

  return(
    <div  onClick={handleCick} className={className}>
      {children}
    </div>
  )
}

//////////////////////////////////////////////////////////////////////
function App() {
  // ESTADOS
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  
  const checkWinner = (boardToCheck) => {
    for (const combo of WIN_COMBINATIONS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] && 
        boardToCheck[a] === boardToCheck[b] && 
        boardToCheck[a] === boardToCheck[c]
       ) {
        return boardToCheck[a]
       }
    }
    // sin ganador
    return null
   }


  const updateBoard = (index) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X  
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard)
      if (newWinner) {
        setWinner(newWinner)
      }
  }

  



  return (
      
      <main className='board'>
        <h1>The CAT</h1>

        <section className='game'>
        {
          board.map((_, index) => {
            return (
            <Square 
            key={index}
            index={index}
            updateBoard={updateBoard}
            >
              {board[index]}
            </Square> 
            )
          }

        )}

        </section>
        <section className='turn'>
          <Square isSelected={turn == TURNS.X}>
            {TURNS.X}
          </Square>
          <Square isSelected={turn == TURNS.O}> 
            {TURNS.O}
          </Square>
        </section>
      </main>
    )
  }

export default App
