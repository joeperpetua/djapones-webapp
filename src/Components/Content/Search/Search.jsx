import React from 'react';
import SearchBar from '../SubComponents/SearchBar/SearchBar';
import ResultCard from '../SubComponents/ResultCard/ResultCard';
import loading from '../../../res/loading-dark.gif';
import './Search.css';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            request: window.location.pathname.split('/').splice(-2),
            error: null,
            isLoaded: false,
            results: []
        }
    }

    componentDidMount() {
        fetch(`http://localhost:7000/?lang=${this.state.request[0]}&word=${this.state.request[1]}`)
          .then(res => res.json())
          .then(
            (response) => {
                if(response.status !== 200){
                    this.setState({
                        isLoaded: true,
                        error: response.error
                    });
                }else{
                    this.setState({
                        isLoaded: true,
                        results: response.data
                    });
                }
            },
        )
    }

    render(){
        const { request, error, isLoaded, results } = this.state;
        console.log(request);
        if (error) {
            return (
                <div>
                    <SearchBar tooltip='hidden' query={this.state.request[1]} lang={this.state.request[0]} increment="1"/>
                    <div>{error}</div>
                </div>
            );
        } else if (!isLoaded) {
            return (
                <div>
                    <SearchBar tooltip='hidden' query={this.state.request[1]} lang={this.state.request[0]} increment="1" />
                    <img src={loading} alt="Cargando" width="300vw" className="gif" />
                    {/* <video loop>
                        <source src={loading} type="video/mp4" />
                    </video> */}
                </div>
            );
        } else {
            console.log(results)
            return (
                <div>
                    <SearchBar tooltip='hidden' query={this.state.request[1]} lang={this.state.request[0]} increment="1" />
                    {results.map((result, index) => (
                        <ResultCard key={index} data={result} />
                    ))}
                </div>
            );
        }
    };
}

export default Search;