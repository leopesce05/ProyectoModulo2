import React from 'react';
import Header from '../componentes/header/Header';
import Playlist from '../componentes/playlist/playlist';

class PlaylistPage extends React.Component{
    
render(){
    return(
        <div>
            <Header user={localStorage.getItem('usuario') } play='play' />
            <Playlist />
        </div>
    );
}
}

export default PlaylistPage;