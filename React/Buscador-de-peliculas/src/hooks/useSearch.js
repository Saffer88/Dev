import { useEffect, useState, useRef} from 'react'


export function useSearch(){
    const [ inputSearch, setInputSearch ] = useState('')
    const [err, setErr] = useState(null)
    const isFirst = useRef(true)
  
    useEffect(()=>{
      if(isFirst.current){
        isFirst.current = inputSearch === ''
        return
      }
  
      if (inputSearch === ''){
        setErr('No se puede buscar una película vacía')
        return
      }
  
      if (inputSearch === ''){
          setErr('No se puede hacer una búsqueda vacía')
          return
        }
  
      if (inputSearch.match(/^\d+$/)){
        setErr('No se puede buscar una película con un número')
        return
      } 
  
      setErr(null)
    }, [ inputSearch ])
  
    return  {inputSearch, err, setInputSearch}
  }