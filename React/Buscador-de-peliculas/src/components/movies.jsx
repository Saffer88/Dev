function MappedMovies ({ movies })  {
   return(
       <ul>
         {
           movies.map(movie => (
             <li key={movie.id}>
               <h3>{movie.title}</h3>
               <p>{movie.year}</p>
               <img src={movie.poster} alt={movie.title}/>
             </li>
           ))
         }
       </ul>
      ) 
    }


function NoMappedMovies() {
    return (
        <p>No se encontraron películas</p>
    )

}

export function ReturningMapping ({ movies })  {
    const hasMovies = movies?.length > 0

    return(
        hasMovies ? <MappedMovies movies={ movies }/> : <NoMappedMovies/>
    )
}