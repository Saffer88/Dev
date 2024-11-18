import { useRef, useState } from 'react'
import { searchMovies } from '../services/movies.js'

//const API_MOVIES_URL = `https://www.omdbapi.com/?apikey=34bda7af&S=$(inputSearch)`


export function useMovies({ inputSearch}) {
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoanding] = useState(false)
    const previusSearch = useRef({ inputSearch })
    

    

    const getMovies = async () => {
      if(inputSearch === previusSearch.current) return

      try{
        setLoanding(true)
        setError(null)
        previusSearch.current = inputSearch   
        const newMovies = await searchMovies({ inputSearch })
        setMovies(newMovies)

      } catch (e) {
          setError(e.message)
      } finally {
          setLoanding(false)

      }
    }
    
      return { movies, getMovies, loading}
  }