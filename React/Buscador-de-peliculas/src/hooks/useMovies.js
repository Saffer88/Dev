import responseMovies from '../mocks/responseMovies.json'
import noResponseMovies from '../mocks/noResponseMovies.json'


export function useMovies() {

    const movies = responseMovies.Search
  
  
    const movieList =  movies?.map( movie => ({
      id : movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster : movie.Poster 
    }))
  
    return { movies: movieList }
  }