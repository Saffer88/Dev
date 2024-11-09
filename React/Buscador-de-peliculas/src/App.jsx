import './App.css'
import responseMovies from './mocks/responseMovies.json'
//import noResponseMovies from './mocks/noResponseMovies.json'

// const API_MOVIES_URL = `https://www.omdbapi.com/?apikey=34bda7af&S=Avengers`

const movies = responseMovies.Search
const hasMovies = movies?.length > 0


function App() {
  

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
          {
             hasMovies ? 
             (
              <ul>
                {
                  movies.map(movie => (
                    <li key={movie.imdbID}>
                      <h3>{movie.Title}</h3>
                      <p>{movie.Year}</p>
                      <img src={movie.Poster} alt={movie.Title}/>

                    </li>
                  ))
                }
              </ul>

             ) 
             :
             (
                <p>No se encontraron resultados para esta búsqueda</p>
             )
          }
          

      </main>
    </div>
  )
}

export default App
