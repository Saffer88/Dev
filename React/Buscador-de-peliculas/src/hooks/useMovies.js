import { useRef, useState, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies.js'

//const API_MOVIES_URL = `https://www.omdbapi.com/?apikey=34bda7af&S=$(inputSearch)`

export function useMovies({ inputSearch, sort}) {
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoanding] = useState(false)
    const previusSearch = useRef({ inputSearch })
    

    const getMovies = useCallback(
        async ({ inputSearch }) => {
      
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
    ,[])

    const sortedMovies = useMemo(()=>{ 
      
      return sort 
      ? [ ...movies].sort((a, b) => a.title.localeCompare(b.title)) 
      : movies
    }, [sort, movies])
      
    
    return { movies: sortedMovies, getMovies, loading}
  }