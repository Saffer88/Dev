import { useEffect, useState } from "react"


//const RANDOM_IMAGE_ENPOINT = `https://cataas.com/cat/says/${word}`

export function useCatImage({fact}){
    const [imageUrl,setImageUrl] = useState()
    
    useEffect(()=>{
        if(!fact) return
        
        const word = fact.split(' ')[0]

        fetch(`https://cataas.com/cat/says/${word}`)
        .then(response => {
            const { url } = response
            setImageUrl(url)
        
        })  
    },[fact])

    return {imageUrl}
}