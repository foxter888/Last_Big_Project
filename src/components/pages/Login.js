import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            email: "",
            password: "",
            errorText: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    

    handleChange(event)
    {
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ""
        });
    }
    

    handleSubmit(event)
    {
        //console.log("handleSubmit", event);
        axios.post("https://localhost:32", 
        {
            client:
            {
                email: this.state.email,
                password: this.state.password
            }
        },
            {withCredentials: true}
        ).then(response => {
            if(response.data.status === "created")
            {
                console.log("you can come in");
                this.props.handleSuccessfulAuth();
            }
            else
            {
                this.setState({
                    errorText: "wrong email or password"
                });

                this.props.handleUnSuccessfulAuth();
            }
        }).catch(error => {
            this.setState({errorText: "an error occured"});
            this.props.handleUnSuccessfulAuth();
        });

        event.preventDefault();
    }
    
    render() {
        return (
            <div className='auth'>
                <h1>LOGIN TO ACCESS YOUR DASHBOARD</h1>
               
               <div>{this.state.errorText}</div>


              <form onSubmit={this.handleSubmit} className="auth-form-wrapper">
                  
                  

                
                  <input
                   type="email"
                   name="email"
                   placeholder="your email"
                   value={this.state.email}
                   onChange={this.handleChange}
                  />
                  


                  

               
                  <input
                   type="password"
                   name="password"
                   placeholder="your password"
                   value={this.state.password}
                   onChange={this.handleChange}
                  />
                 

               
               <button type="submit">Login</button>
               


              </form>
            </div>
        );
    }
    
}

