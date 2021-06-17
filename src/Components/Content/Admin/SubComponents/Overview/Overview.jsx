import React from 'react';

class Overview extends React.Component{

    verifyLogin(){
        let msg = ``;
        let form = ``;

        if(localStorage.getItem('logged')){
            msg = `logged`;
            form = 
                <div>
                    <button>Logout</button>
                </div>
            ;
        }else{
            msg = `not logged`;
            form = 
                <div>
                    <input type="text" id="email"></input>
                    <br></br>
                    <input type="password" id="pass"></input>
                    <br></br>
                    <button>Login</button>
                </div>
            ;
        }

        return {msg, form}
    }

    render(){
        let loginState = this.verifyLogin();

        return(
            <div>
                <h1>Admin</h1>
                <p>{loginState.msg}</p>
                {loginState.form}
            </div>
            
        );
    }
}

export default Overview;
