import { useState } from 'react'
import Usuario from './GestionUsuario/Usuario';
import GestionTienda from './GestionTienda';
import MensajeBienvenida from './GestionUsuario/MensajeBienvenida';
function App() {

  const [usuario, setUsuario] = useState(null);

  return (
    <>
      <h1>Tienda Interfaces</h1>
      {usuario ? <MensajeBienvenida usuario = {usuario}/>:<Usuario setUsuario={setUsuario}/>}
      <GestionTienda usuario={usuario}/>
    </>
  )
}

export default App
