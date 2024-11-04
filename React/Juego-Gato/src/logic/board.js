import { WIN_COMBINATIONS } from "../constants"

export const checkWinner = (boardToCheck) => {
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


   export const checkTie= (newBoard) => {
    return newBoard.every((square) => square != null)
   }