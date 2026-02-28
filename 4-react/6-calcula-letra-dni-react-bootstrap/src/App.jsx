import { useState } from 'react'
import { Container, Form, Button, Alert } from 'react-bootstrap'
{/* Importamos los componentes de bootstrap que necesitemos */}

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']

function App() {
  const [numeroDni, setNumeroDni] = useState('')
  const [letra, setLetra] = useState('')

  function calculaLetraDNI() {
    const resto = numeroDni % 23
    setLetra(letras[resto])
  }

  return (
    <Container className="mt-4" style={{ maxWidth: '400px' }}>
      <h2>Calcula letra DNI</h2>

      <Form.Group className="mb-3">
        <Form.Label>Ingresa el número de tu DNI para saber la letra</Form.Label>
        <Form.Control
          type="number"
          value={numeroDni}
          onChange={(e) => setNumeroDni(e.target.value)}
        />
      </Form.Group>

      <Button onClick={calculaLetraDNI}>
        Haz clic para calcular
      </Button>

      {letra && (
        <Alert variant="success" className="mt-3">
          La letra es: <strong>{letra}</strong>
        </Alert>
      )}
    </Container>
  )
}

export default App
