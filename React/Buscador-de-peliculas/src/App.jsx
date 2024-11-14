import './App.css'
import { useSearch } from './hooks/useSearch.js' 
import { useMovies } from './hooks/useMovies.js'
import { ReturningMapping } from './components/movies.jsx'
// const API_MOVIES_URL = `https://www.omdbapi.com/?apikey=34bda7af&S=Avengers`


function App() {
 
  const {inputSearch, err, setInputSearch } = useSearch()
  const { movies, getMovies } = useMovies({ inputSearch }) 

  
  // manejar el evento de submit con useRef 
  //(poner la ref en el componente, aqui en el botton ref={inputRef}

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   const inputEL = inputRef.current 
  //   const value = inputEL.value
  //   console.log(value)
  // }



  // manejar el evento con javascript vanilla, para no llenar de useRef en caso de
  // que sean demasiados inputs/campos, solo habria que tener un 
  // name={input1} para cada input, ejemplo: 
  // <input name='search' placeholder='Jhon Wick, Wolverine, Hunger games...'/>
  // <input name='query' placeholder='Jhon Wick, Wolverine, Hunger games...'/>

  const handleSubmit= (event) => {
    event.preventDefault()
    //const {search}  = Object.fromEntries(new FormData(event.target))
    //console.log( {inputSearch} )
    getMovies()


    // un campo del objeto en especifico usando su nombre

    // const data = new window.FormData(event.target)
    // const search = data.get('search')
    // console.log(search)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    if(newSearch.startsWith(' ') ) return
    setInputSearch(event.target.value)
  }


 
  return (
    <div className='page'>

      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} name='search' placeholder='Jhon Wick, Wolverine, Hunger games...'/>
          <button type='submit'> Buscar película </button>
        </form>
        {err && <p style={{ color : 'red'}}>{err}</p>}
      </header>


      <main>
          
          <ReturningMapping movies= { movies }/>

      </main>
    </div>
  )
}

export default App
