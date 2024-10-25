import { useEffect, useState } from "react"
import {getRandomFact} from '../services/facts.js'

export const useNewFact = () => {
    const [fact, setFact] = useState()

   
    const refreshFact = () => {
        getRandomFact().then(newFact => setFact(newFact))
    }
    
    useEffect(refreshFact, [])

    return {fact, refreshFact}
}