import URL_SERVER from '../../../url'
export default function RegistrarUsuario({ setBotonRegistrarPulsado, username, setUsername, password, setPassword }) {
    
    function registrarUsuario(username, password){
        fetch(URL_SERVER + "usuarios", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
          })
        .then(response => {
            if (response.ok){
                setBotonRegistrarPulsado(false);
                return response.json();
            }

            throw new Error(response.status);
        })
        .catch(err => {
            console.error("ERROR: ", err.message)
        })
    }

    return(
        <>
            <h2>Registrar Usuario</h2>
            <label>Username:<input type="text" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)} /></label>
            <label>Password:<input type="text" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} /></label>

            <br /><br />

            <button onClick={()=>registrarUsuario(username, password)}>Registrar Usuario</button>
            <button onClick={()=>setBotonRegistrarPulsado(false)}>Volver</button>
        </>
    )
    
}