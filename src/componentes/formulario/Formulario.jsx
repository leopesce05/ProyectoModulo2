import React from 'react';
import './formulario.css'
import candado from '../img/candado.png';
import { useHistory } from "react-router-dom";


function envio(e,history) {
  var usuario = document.getElementById('usuario').value;
    var contraseña =document.getElementById('contraseña').value;
    if (usuario==localStorage.getItem('usuario') && contraseña==localStorage.getItem('contraseña')) {
      console.log("true");
      history.push("/playlist");
    }else{
      console.log('false');
      e.preventDefault();
      history.push("/errorlogin");
      
    }
}
function Formulario(){
  const history = useHistory();

  const storage =()=>{
    localStorage.setItem('usuario', 'usuario');
    localStorage.setItem('contraseña', 'contraseña');
  }


      return(
        <div className='main-form' onLoad={storage}>
            <div className='login-formulario'>
            <div className='main-logs'>
                <img className='candado' src={candado} alt="Candado" />
                <p className='login-text'>Ingresar</p>
            </div>
            
            <form action="" className='formulario' onSubmit={(e)=>envio(e,history)}>
              
              
                <input type="text" placeholder='Usuario'  id='usuario' name='usuario' className='loginput'  />
                <input type="password" placeholder='Constraseña'  id='contraseña' name='contraseña' className='loginput' />
                <input type="submit" value="COMENZAR A CREAR PLAYLIST" className='btn-login' />
                <a href='#' className='recuperacion'>¿HAS OLVIDADO LA CONTRASEÑA?</a>
            </form>
            
            <div className='preguntas'>
                <p className='preg1'>¿NO TIENES CUENTA?</p>
                <a href='#' className='btn-register'>REGISTRATE</a>
            </div>
            </div>
        </div>
      )
  }
    
  
  
  
  export default Formulario;
