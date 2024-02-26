import URL_SERVER from "../../url";
export default function TablaProductos({tablaProductos, usuario, setPintaTablaProductos}) {

    function eliminarArticulo(producto){
        fetch(URL_SERVER + "productos/" + producto.id, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
        }).then(response => {
            if (response.ok){
                setPintaTablaProductos(true)
                return response.json();
            }

            throw new Error(response.status);
        })
        .catch(err => {
            console.error("ERROR: ", err.message)
        })
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {tablaProductos.map((producto)=>(
                    <tr key={producto.id}>
                        <td>{producto.nombre}</td>
                        <td>{producto.precio}</td>
                        {usuario ? <td><button onClick={()=>eliminarArticulo(producto)}>Eliminar</button></td> : <></> }
                    </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}