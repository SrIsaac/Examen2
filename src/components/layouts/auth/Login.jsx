import Title from "../../helpers/auth/Titles";
import Button from "../../helpers/auth/Buttons";
import Inputs from "../../helpers/auth/Inputs";
import { useState } from "react";
import { Usuario } from "../../database/DataBase";
import { useNavigate } from "react-router-dom";



function Login() {
  const [getUsuario,setUsuario]=useState("");
  const [getContrasena,setContrasena]=useState("");
  const redireccion=useNavigate();

  function validarUsuario(){
    if(buscarUsuario()){
      redireccion("/home")
    }else{
      console.log("Usuario o contraseña incorrecta");
    }
  }

  function buscarUsuario(){
    return Usuario.some((usuario)=> usuario.user === getUsuario && usuario.contrasena===getContrasena)
  }

  console.log(Usuario);
  console.log(getUsuario);
  console.log(getContrasena);


    return (
      <div className="container">
        <section id="login" className="form-login visible">
          <Title title={"Inicio de Sesión"} />
  
          <input 
            className="controls" 
            type="text" 
            placeholder="Usuario"
            onChange={(e)=>{setUsuario(e.target.value)}} 
          />
          <input 
            className="controls" 
            type="password" 
            placeholder="Contraseña" 
            onChange={(e)=>{setContrasena(e.target.value)}}
          />
          
          
          <button onClick={validarUsuario} className="buttons" type="button">Inicio de sesión</button>
          <button className="buttons" type="button">Registro</button>
  
        </section>
    
      </div>
    
    );
  }
  
  export default Login;