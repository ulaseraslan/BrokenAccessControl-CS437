import React from 'react';
import "./oldApp_login_signup.css";

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            email:'',
            password: '',
            buttonDisabled: false
        }
        this.routeChange = this.routeChange.bind(this);

    }
    resetForm(){
        this.setState({
            email:'',
            password:'',
            buttonDisabled: false
        })
    }
}

export default LoginForm;