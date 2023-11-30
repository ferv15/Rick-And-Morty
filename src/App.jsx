
import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import InfoLocation from './components/infoLocation'
import CardResident from './components/CardResident'

function App() {

  const [locationId, setLocationId] = useState(Math.floor(Math.random() * 126) + 1)
  
  const url = `https://rickandmortyapi.com/api/location/${locationId}`
  const [location, getLocation, isloading, hasError ]= useFetch(url)
  
  useEffect(() => {
    getLocation()
  }, [locationId])

  const inputLocation = useRef()

  const handleLocation = e => {
    e.preventDefault()
    setLocationId(inputLocation.current.value.trim())
  }

  return (
    <>
    <div className='app'>
      <h1 className='app_title'>Rick And Morty</h1>
      <form onSubmit={handleLocation} className='app_form'>
        <input ref={inputLocation} type="text" className='app_input'/>
        <button className='app_btn'>Search</button>
      </form>
      {
        isloading
        ? <article className='app_carga'>Loading...</article>
        :(
        hasError || locationId === '0'
        ? <h2> Hey! you mustproivide an ID from 1 to 126</h2>
        : (
          <>
            <InfoLocation location={location}/>
            <div className='app_card_container'>
              {
              location?.residents.map( url =>(
              <CardResident 
              key={ url }
              url={ url }
              />
              ))
              }
            </div>
            </>
          )
        )
      }
    </div>
    </>
  )
}

export default App
