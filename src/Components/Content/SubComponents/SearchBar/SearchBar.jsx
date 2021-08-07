import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.toggleLang = this.toggleLang.bind(this);
        this.toggleTooltip = this.toggleTooltip.bind(this);
        this.search = this.search.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this); 
        this.state = {
            tooltip: this.props.tooltip,
            langs: ['AUTO', 'JAP', 'ESP'],
            selectedLang: 1
        };
    }

    toggleLang(){

        if (this.state.selectedLang === this.state.langs.length - 1) {
            this.setState({selectedLang: 0});
        }else{
            this.setState({selectedLang: this.state.selectedLang + 1});
        }

        document.getElementsByClassName('search-lang')[0].innerHTML = this.state.langs[this.state.selectedLang];
        document.querySelector('#search-btn').className = `search-btn-${this.state.langs[this.state.selectedLang]}`;

    }

    toggleTooltip(){
        document.getElementsByClassName('tooltiptext')[0].classList.toggle("hidden");
    }

    search(){
        let src = document.getElementsByClassName('search-lang')[0].innerHTML;
        let word = document.getElementsByClassName('search-input')[0].value;

        if(src === 'AUTO'){
            window.location.pathname = `search/auto/${word}`;
        }

        if(src === 'ESP'){
            window.location.pathname = `search/es/${word}`;
        }
        
        if(src === 'JAP'){
            window.location.pathname = `search/jp/${word}`;
        }
        
    }

    handleKeyDown(event) {
        if(event.keyCode === 13) { 
            this.search();
        }
    }

    render(){
        let lastLang = 'AUTO';
        let lastQuery = '';

        if(this.props.lang === 'es'){
            lastLang = 'ESP';
        }

        if(this.props.lang === 'jp'){
            lastLang = 'JAP';
        }

        if(this.props.query){
            lastQuery = decodeURIComponent(this.props.query);
        }



        return(
            <div>
                <div className="search-bar">
                    <input onKeyDown={this.handleKeyDown} className="search-input" type="text" defaultValue={lastQuery} />
                    <div id="search-btn" className={`search-btn-${lastLang}`}>
                        <button onClick={(e) => {this.toggleLang(e.target.innerHTML)}} className="search-lang">{lastLang}</button>
                        <button onClick={this.search} className="search-search">
                            <span className="material-icons">search</span>
                        </button>
                    </div>
                    <div onClick={this.toggleTooltip} className="tooltip unselectable">
                        <span className="material-icons">help_outline</span>
                        <span className={`tooltiptext ${this.state.tooltip}`}>
                            Haga click en el botón de idioma <strong>(JAP/ESP)</strong> para cambiar el método de entrada.
                            <br></br><br></br>
                            Entradas soportadas:
                            <ul>
                                <li><strong>Español</strong>: entrada romana</li>
                                <li><strong>Japonés</strong>: ひらがな, カタカナ, 漢字, roma-ji</li>
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
        );
    };
}

export default SearchBar;