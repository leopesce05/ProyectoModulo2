import React from 'react';
import './loginError.css'
import candado from '../img/candado.png'
class Error extends React.Component{
    render(){
      return(
        <div className="main-error">
          <div className='error-container'>
            <img className='candadoError' src={candado} alt="CANDADO" />
            <div>
                <h1 className='error-message-resp'>Algo no salio bien</h1>
                <h1 className='error-message'>Mmm... algo no salio bien</h1>
                <p className='error-message2'>Debes estar autenticado para acceder a esta pagina</p>
            </div>
        </div>
        </div>
      )
    }
  
  }
  
  export default Error;