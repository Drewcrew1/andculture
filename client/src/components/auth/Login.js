import React from 'react';
import {connect } from 'react-redux';
import {login} from '../../actions/auth';
import {Redirect} from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
class Login extends React.Component{
    constructor(){
        super();
        this.state= {

            email: '',
            password: '',
            errors: {}

        };

    }
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }



    onSubmit = (e) => {
        e.preventDefault();
        let user = {

            email:this.state.email,
            password:this.state.password

        }
        this.props.login(user);
    }
    render(){


        if(this.props.isAuthenticated){
            return <Redirect to="/dashboard" />
        }
        return(
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Log In</h1>
                            <p className="lead text-center">Sign in to your Brew-Location</p>
                            <form onSubmit={this.onSubmit}>
                                <TextFieldGroup
                                    placeholder='Email'
                                    name='email'
                                    type='email'
                                    value={this.state.email}
                                    onChange={this.onChange}

                                />

                                <TextFieldGroup
                                    placeholder='Password'
                                    name='password'
                                    type='password'
                                    value={this.state.password}
                                    onChange={this.onChange}

                                />
                                <input type="submit" className="btn btn-info btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth
});

export default connect(mapStateToProps,{login})(Login);