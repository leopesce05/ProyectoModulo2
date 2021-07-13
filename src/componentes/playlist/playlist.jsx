import React, { useState } from 'react';
import './playlist.css';
import Canciones from '../canciones/Canciones'
const Playlist =()=>{
        const cancionesData=[
            {
             id:1,
             nombre:'A las nueve',
             artista:'NTVG',
             duracion:'3:24',
             cantVotos:0,
            },
    
            {
                id:2,
                nombre:'Maldicion',
             artista:'OnceTiros',
             duracion:'3:04',
             cantVotos:0,
            },
    
            {
                id:3,
                nombre:'Cancion Para Uno',
             artista:'La Vela Puerca',
             duracion:'2:53',
             cantVotos:0,
            },
    
            {
                id:4,
                nombre:'Mi Revolucion',
             artista:'Cuatro Pesos de Propina',
             duracion:'3:24',
             cantVotos:0,
            },
            
            {
                id:5,
                nombre:'Lo mas simple de las cosas',
             artista:'Hereford',
             duracion:'3:17',
             cantVotos:0,
            },
        ]

        //state
        const [canciones,setCanciones]=useState(cancionesData);

        
        const likeCancion= (cancion)=>{
            setCanciones(canciones.map(can => (can.id===cancion.id?
                {id:can.id,
                    nombre:can.nombre,
                    artista:can.artista,
                    duracion:can.duracion,
                    cantVotos:can.cantVotos+1,}
            :can)))
        }
        const dislikeCancion= (cancion)=>{
            setCanciones(canciones.map(can => (can.id===cancion.id?can.cantVotos>0?
                {id:can.id,
                    nombre:can.nombre,
                    artista:can.artista,
                    duracion:can.duracion,
                    cantVotos:can.cantVotos-1,}:can
            :can)))
        }
    
        return(
            <div className='main-playlist'>
                <div className='search-box'>
                    <label htmlFor="searchpl"><i class="fas fa-search"></i></label>
                    <input type="text" name="searchpl" id="searchpl" placeholder="Buscar" className='search-input'/>
                </div>
                <div className="resultados-box">
                    <div className="resultado">
                        <p className='table-title'>Resultados</p>
                        <table>
                            <tr className='nombres-tabla'>
                                <th>Nombre</th>
                                <th>Artista</th>
                                <th className='noResp'>Album</th>
                                <th className='noResp'>Duracion</th>
                                <th>Agregar</th>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="playlist-box">
                    <div className="playlist-content">
                        <p className='table-title'>Tu playlist</p>
                        <Canciones canciones={canciones} likeCancion={likeCancion} dislikeCancion={dislikeCancion} />
                    </div>
                </div>
            </div>
        );
    
}
export default Playlist;