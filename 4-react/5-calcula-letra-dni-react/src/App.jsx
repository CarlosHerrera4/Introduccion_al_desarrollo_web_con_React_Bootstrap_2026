import { useState } from 'react'

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']

function App() {
  const [numeroDni, setNumeroDni] = useState('')
  const [letra, setLetra] = useState('')

  function calculaLetraDNI() {
    const resto = numeroDni % 23
    setLetra(letras[resto])
  }

  return (
    <>
      <h2>Calcula letra DNI</h2>

      <p>Ingresa el número de tu DNI para saber la letra</p>

      <input
        type="number"
        value={numeroDni}
        onChange={(e) => setNumeroDni(e.target.value)}
      />

      <button onClick={calculaLetraDNI}>Haz clic para calcular</button>

      {letra && <p>La letra es: {letra}</p>}
    </>
  )
}

export default App
