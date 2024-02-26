import { useState, useEffect } from "react";
import URL_SERVER from "../../url";
import BarraBusqueda from "./BarraBusqueda"
import TablaProductos from "./TablaProductos"
import NuevoProducto from "./GestionUsuario/NuevoProducto";
export default function GestionTienda({usuario}) {

    const [filterText, setFilterText] = useState('');
    const [tablaProductos, setTablaProductos] = useState([]);
    const [pintaTablaProductos, setPintaTablaProductos] = useState(false);
    const [pulsaNuevoArticulo, setPulsaNuevoArticulo] = useState(false);

    useEffect(() => {
        fetch(URL_SERVER + `productos?nombre_like=${filterText}`)
        .then(response => {
            if (response.ok)
            return response.json();

            throw new Error(response.status);
        })
        .then(data => {
            setTablaProductos(data);
            setPintaTablaProductos(false);
        })
        .catch(err => {
            console.error("ERROR: ", err.message)
        })
      }, [filterText, pintaTablaProductos]);

    return(
        <>
            <br />
            <br />
            <BarraBusqueda filterText = {filterText} setFilterText = {setFilterText} />
            <br />
            <TablaProductos tablaProductos = {tablaProductos} usuario = {usuario} setPintaTablaProductos = {setPintaTablaProductos}/>
            {usuario && !pulsaNuevoArticulo ? <button onClick={()=>setPulsaNuevoArticulo(true)}>Añadir Articulo</button> : <></> }
            {usuario && pulsaNuevoArticulo && <NuevoProducto/>}
        </>
    )
}