
import React from 'react'
import FormularioVisita from './components/FormularioVisita'
import ListaVisitas from './components/ListaVisitas'
import EspeciesDesdeApi from './components/EspeciesDesdeApi'

function App() {
  return (
    <div>
      <h1>Reserva Natural - Observaciones</h1>
      <FormularioVisita />
      <ListaVisitas />
      <EspeciesDesdeApi />
    </div>
  )
}

export default App
