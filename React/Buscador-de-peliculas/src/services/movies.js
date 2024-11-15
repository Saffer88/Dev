const api_key = '34bda7a'

export const searchMovies = async ({ inputSearch }) => {
    if (inputSearch === null) return


    try{
        const response =  await fetch(`https://www.omdbapi.com/?apikey=${api_key}f&S=${inputSearch}`)
        const json = await response.json()

        const movies = json.Search
  
  
        return movies?.map( movie => ({
            id : movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster : movie.Poster 
        }))
    } catch (e) {
        throw new Error(e.message) 
    }

}