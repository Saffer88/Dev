import './App.css'
import responseMovies from './mocks/responseMovies.json'
import noResponseMovies from './mocks/noResponseMovies.json'
import { ReturningMapping } from './components/movies.jsx'
// const API_MOVIES_URL = `https://www.omdbapi.com/?apikey=34bda7af&S=Avengers`








function App() {
  const movies = responseMovies.Search


  const movieList =  movies?.map( movie => ({
    id : movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster : movie.Poster 
  }))

  return (
    <div className='page'>

      <header>
        <h1>Buscador de películas</h1>
        <form className='form'>
          <input placeholder='Jhon Wick, Wolverine, Hunger games...'/>
          <button className='submitButton' type='submit'> Buscar película </button>
        </form>
      </header>


      <main>
          
          <ReturningMapping movies= { movieList }/>

      </main>
    </div>
  )
}

export default App
