import './app.css'
import { useCatImage } from './hooks/useCatImage.js'
import { useNewFact } from './hooks/useNewFactCat.js'

export function App() {

    const { fact, refreshFact } = useNewFact()
    const { imageUrl } = useCatImage({ fact })

    const handleClick =  async () => {
        refreshFact()
    }

    return(
        <main>
            <h1> Gatos cutes </h1>

            <button onClick={handleClick}> New Fact</button>
               
            {fact && <p>{fact}</p>}
            {imageUrl &&  <img src = {imageUrl} className='catImg' alt = {`imagine extracted for ${fact}`} />}
                
        </main>
)}