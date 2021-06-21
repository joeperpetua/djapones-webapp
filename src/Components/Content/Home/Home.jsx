import React from 'react';
import SearchBar from '../SubComponents/SearchBar/SearchBar';
import './Home.css';

class Home extends React.Component{

    render(){

        return(
            <div className="Home">
                <h2>Ingresar término en español, romaji o japonés:</h2>
                <SearchBar tooltip='show' />
            </div>
        );
    };
}

export default Home;