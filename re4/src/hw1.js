import React, {Component} from 'react';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {name : '', isLog : false};

        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleLogin(){
        this.setState({isLog : true});
    }
    handleLogout(){
        this.setState({isLog : false});
    }
    handleSubmit(event){
        if(!this.state.isLog){
            alert('Please, Login')
        }else{
            alert('Welcome! '+this.state.name)
            this.setState({isLog : true});
        }
        event.preventDefault();
    }
    handleChange(event){
        this.setState({name : event.target.value});
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Login</h2>
                    <label>ID : <input type='text' value={this.state.name} onChange={this.handleChange}/></label>
                    <input type='submit' value='submit'/>
                </form>
                {this.state.isLog ? (
                    <button onClick={this.handleLogout}>Logout</button>
                ):(
                    <button onClick={this.handleLogin}>Login</button>
                )
                }
            </div>
        );
    }
}

export default Login;