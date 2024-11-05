export const Square = ({ children, isSelected, updateBoard, index }) => {
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