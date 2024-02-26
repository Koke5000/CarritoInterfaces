import URL_SERVER from "../../../url";
export default function InicioSesion({setUsuario, setBotonRegistrarPulsado, username, setUsername, password, setPassword }) {

    function iniciarSesion(username, password){
        fetch(URL_SERVER + `usuarios?username=${username}`, {
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
                return response.json();
            }

            throw new Error(response.status);
        })
        .then(data => {
            if(data.length == 1){
                if(data[0].password == password){
                    setUsuario(username);
                }else{
                    throw new Error("La contraseña no corresponde");
                }
            }else{
                throw new Error("Usuario no encontrado");
            }
        })
        .catch(err => {
            console.error("ERROR: ", err.message)
        })
        setUsuario(username)
    }

    return(
        <>
            <h2>Inicio Sesion</h2>
            <label>Username:<input type="text" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)} /></label>
            <label>Password:<input type="text" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} /></label>

            <br /><br />

            <button onClick={()=>iniciarSesion(username, password)}>Iniciar Sesion</button>
            <button onClick={()=>{
                setUsername('')
                setPassword('')
                setBotonRegistrarPulsado(true)}}>Registrar Usuario</button>
        </>
    )
    
}