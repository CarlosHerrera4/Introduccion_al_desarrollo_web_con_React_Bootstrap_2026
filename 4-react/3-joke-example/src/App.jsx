import { useState } from 'react'
import './App.css'

function App() {
  {/* useState es un hook para manipular el estado de un componente */}
  const [chiste, estableceChiste] = useState({})

  const dameChiste = () => {
    fetch('https://v2.jokeapi.dev/joke/Any?lang=es')
    .then(response => response.json())
    .then(datos => estableceChiste(datos))
  }

  return (
    <>
      <button onClick={dameChiste}>Cuéntame un chiste</button>

      {/* Condicional para mostrar una interfaz u otra */}
      {chiste?.joke? (
        <>
          <p>{chiste.joke}</p>
        </>
        ):(
          <p>No hay atributo joke</p>
        )
      }
    </>
  )
}

export default App
