import React from 'react';

import {withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {register} from '../../actions/auth';
import TextFieldgroup from '../common/TextFieldGroup';
class Register extends React.Component{


    constructor(){
        super();
        this.state= {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {}

        };

    }
    componentDidMount(){
        if(this.props.isAuthenticated){
            this.props.history.push('/dashboard');
        }
    }


    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit = async (e) => {
        e.preventDefault();
        // const {name, email, password} = this.state;
        let newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2

        };
        if(this.state.password !== this.state.password2){
            this.setState({errors: 'Passwords do not match.'});
        }else {

            this.props.register(newUser,this.props.history);
        }

    };

    render(){
        let errors;
            if(this.state.errors === 'Passwords do not match.'){
                errors = 'Passwords do not match.';
            }

        if(this.props.isAuthenticated){
            return <Redirect to="/dashboard" />
        }
        return(
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">Create your Account</p>
                            <form onSubmit={this.onSubmit}>
                                <TextFieldgroup
                                    placeholder='Name'
                                    name='name'
                                    value={this.state.name}
                                    onChange={this.onChange}

                                />
                                <TextFieldgroup
                                    placeholder='Email'
                                    name='email'
                                    type='email'
                                    value={this.state.email}
                                    onChange={this.onChange}


                                />
                                <TextFieldgroup
                                    placeholder='Password'
                                    name='password'
                                    type='password'
                                    value={this.state.password}
                                    onChange={this.onChange}

                                />
                                <TextFieldgroup
                                    placeholder='Confirm Password'
                                    name='password2'
                                    type='password'
                                    value={this.state.password2}
                                    onChange={this.onChange}

                                />
                                {errors}
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
    errors: state.errors,
    auth: state.auth
});

export default connect(mapStateToProps, {register})(withRouter(Register));