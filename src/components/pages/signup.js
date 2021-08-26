import React, { Component } from 'react';

import SignupForm from './signupForm';


import { connect } from 'react-redux';
//import * as actions from '../../actions';

class Signup extends Component {

    componentDidMount() {
       // this.props.setHeaderLinks([]);
        //this.props.setNavbarLinks([]);
    }

    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        return (
            <div className='sign-up'>
                
                <SignupForm onSubmit={this.onSubmit} className='sign-up__form' />
            </div>
        )
    }
}

//Signup = connect(null, actions)(SignUp);

export default Signup;