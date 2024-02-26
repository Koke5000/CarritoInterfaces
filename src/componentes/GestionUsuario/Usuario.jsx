import { useState } from "react"
import RegistrarUsuario from "./RegistrarUsuario";
import InicioSesion from "./InicioSesion";
export default function Usuario({setUsuario}){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [botonRegistrarPulsado, setBotonRegistrarPulsado] = useState(false);

    
    return(
        <>
            { botonRegistrarPulsado ? <RegistrarUsuario setBotonRegistrarPulsado = {setBotonRegistrarPulsado} username = {username} 
            setUsername = {setUsername} password = {password} setPassword = {setPassword} />:
            <InicioSesion setUsuario = {setUsuario} setBotonRegistrarPulsado = {setBotonRegistrarPulsado} username = {username} setUsername = {setUsername} 
            password = {password} setPassword = {setPassword} />}
        </>
    )

}