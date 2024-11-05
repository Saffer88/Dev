export const SaveGameStorage = ({ board, turn }) => {
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
}

export const ResetGameStorage = () => {

 window.localStorage.removeItem('board')   
 window.localStorage.removeItem('turn')   
}