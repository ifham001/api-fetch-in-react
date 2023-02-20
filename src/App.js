import React, { useState } from 'react'
import axios from 'axios'
import './App.css'

const FetchApiByAxios =()=>{
 
  const [loading,setIsLoading] = useState(false)  
  const [movies,setMovies]=useState([])
  const [error,setError]=useState()
 
  const onClickHandler = async()=>{
    setIsLoading(true)
    try{ 
      const fetch = await axios.get('https://swapi.dev/api/films')
      setMovies(fetch.data.results)
     
      
      setIsLoading(false)
      
    }
    catch(error){
      setError(error.message)
      console.log(error)
      setIsLoading(false)
    }
    
  }
  
 
  return(
    <div>
      <button onClick={onClickHandler}>FETCH-API</button>
      
      { !loading &&  movies.map(data=>{
        
        return <ul>
          <li> <h3>Movie</h3>{data.title}</li>
          <li> {data.episode_id}</li>
          <li> {data.director}</li>
          <li> {data.release_date}</li>
        </ul>
      }) }
      
      
      { loading && <p>Loading...</p>}
      {error}
    </div>
  )
}

function App() {
  
  
  return (
    <div className='div' >
      <h1> FETCH STAR WAR API WITH AXIOS</h1>
     <FetchApiByAxios/>
      
      
      

    </div>
  )
}

export default App