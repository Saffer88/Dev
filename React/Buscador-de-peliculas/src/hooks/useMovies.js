//import withResults from '../mocks/responseMovies.json'
import withoutResults from '../mocks/noResponseMovies.json'
import { useState } from 'react'

//const API_MOVIES_URL = `https://www.omdbapi.com/?apikey=34bda7af&S=$(inputSearch)`
const api_key = '34bda7a'

export function useMovies({ inputSearch}) {
    const [responseMovies, setResponseMovies] = useState([])

    const movies = responseMovies.Search
  
  
    const movieList =  movies?.map( movie => ({
      id : movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster : movie.Poster 
    }))

    const getMovies = () => {
      if (inputSearch){
        //setResponseMovies(withResults)
        fetch(`https://www.omdbapi.com/?apikey=${api_key}f&S=${inputSearch}`)
        .then(res => res.json())
        .then(json => {
          setResponseMovies(json)
        })
      
      } else {
        setResponseMovies(withoutResults)
      }
    }
  
    return { movies: movieList, getMovies }
  }