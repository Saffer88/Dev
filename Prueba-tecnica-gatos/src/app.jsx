import './app.css'
import { useState, useEffect } from 'react'

const RANDOM_FACT_ENDPOINT = `https://catfact.ninja/fact` 
//const RANDOM_IMAGE_ENPOINT = `https://cataas.com/cat/says/${word}`

export function App() {
    const [fact, setFact] = useState()
    const [imageUrl,setImageUrl] = useState()
    
    useEffect(() => {
        
        fetch(RANDOM_FACT_ENDPOINT)
        .then(res => res.json())
        .then(data => {  
            const { fact } = data
            setFact(fact)    
        })
    },[])

    useEffect(()=>{
        if(!fact) return
        
        const word = fact.split(' ')[0]
        fetch(`https://cataas.com/cat/says/${word}`)
        .then(response => {
            const { url } = response
            setImageUrl(url)
        
        })  
    },[fact])

    return(
        <main>
            <h1> Gatos cutes </h1>
                <section>
                    {fact && <p>{fact}</p>}
                    {imageUrl &&  <img src = {imageUrl} alt = {`imagine extracted for ${fact}`} />}
                </section>
        </main>
)}