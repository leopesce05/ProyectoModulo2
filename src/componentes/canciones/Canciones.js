import React from 'react';
import './Canciones.css'; 
const  Canciones =(props)=> {



        
    

    
    props.canciones.sort((a, b) => a.cantVotos < b.cantVotos ? 1 : -1);
    return(
                        
                            <table>
                            <tr className='nombres-tabla'>
                                <th>Nombre</th>
                                <th>Artista</th>
                                <th className='noResp'>Duracion</th>
                                <th className='noResp'>Cant.votos</th>
                                <th>Votar</th>
                            </tr>
                            <tbody>
                            {
                               props.canciones.length>0?( 
                                props.canciones.map(cancion=>(
                                    <tr key={cancion.id}>
                                        <td>{cancion.nombre}</td>
                                        <td>{cancion.artista}</td>
                                        <td className='noResp'>{cancion.duracion}</td>
                                        <td className='noResp'>{cancion.cantVotos}</td>
                                        <td> 
                                            <a onClick={()=>{props.likeCancion(cancion)}} ><i class="fas fa-thumbs-up"  ></i> </a>
                                            <a className='noResp'  onClick={()=>{props.dislikeCancion(cancion)}}><i class="fas fa-thumbs-down noResp" ></i></a>
                                        </td>
                                    </tr>
                                ))
                               ):(
                                   <h1>No hay Canciones</h1>
                               )
                            }
                            </tbody>
                            </table>
                        

    );
    
    
}
export default Canciones;