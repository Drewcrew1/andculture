import React from 'react';
import {Link } from 'react-router-dom';


class Landing extends React.Component{


    render(){

        return(
            <div className="landing">
                <div className="dark-overlay landing-inner text-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="display-3 mb-4">Brew-Location
                                </h1>
                                <h3 className="lead"> Locate your next Beer stop and search for new brewpubs to check out.</h3><br/>
                                <h3 className="lead">Head to the Dashboard to find some random places you may not have heard of!</h3>
                                <p>Sign up for an account to keep track of your favorite places in your personal favs section.</p>
                                <hr />
                                <Link to='/register' className="btn btn-lg btn-info mr-2">Sign Up</Link>
                                <Link to='/login' className="btn btn-lg btn-info">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Landing;