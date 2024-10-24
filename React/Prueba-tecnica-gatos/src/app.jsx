import './app.css'
import { useState, useEffect } from 'react'
import { getRandomFact} from './services/facts.js'
import { useCatImage } from './hooks/useCatImage.js'
//const RANDOM_IMAGE_ENPOINT = `https://cataas.com/cat/says/${word}`


export function App() {
    const [fact, setFact] = useState()
    const { imageUrl } = useCatImage({ fact })
    
    useEffect(() => {
        getRandomFact().then(setFact)

    }, [])

    

    

    const handleClick =  async () => {
        const newFact = await getRandomFact()
        setFact(newFact)
    }

    return(
        <main>
            <h1> Gatos cutes </h1>
            <button onClick={handleClick}> New Fact</button>
                <section>
                    {fact && <p>{fact}</p>}
                    {imageUrl &&  <img src = {imageUrl} className='catImg' alt = {`imagine extracted for ${fact}`} />}
                </section>
        </main>
)}