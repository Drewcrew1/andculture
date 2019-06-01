import React from 'react';
import {Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../actions/auth';


class Navbar extends React.Component{
    onLogoutClick = (e) => {

        this.props.logout();
        return <Redirect to='/login' />
    }
    render(){

        const authLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/favs">Favs</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/stateSearch">State Search</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/citySearch">City Search</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                    <a href='/login' onClick={this.onLogoutClick} className="nav-link"><img style={{width: '25px', marginRight: '5px'}} />Logout {this.props.auth.user.name}</a>
                </li>
            </ul>
        );
        const guestLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/stateSearch">State Search</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/citySearch">City Search</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Sign Up</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/login'>Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                </li>
            </ul>
        );

        return(
            <nav className="navbar sticky-top navbar-expand-sm navbar-dark bg-dark mb-4">
                <div className="container">
                    <Link className="navbar-brand" to="/">Brew-Location</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">

                            </li>
                        </ul>

                        {this.props.auth.isAuthenticated ? authLinks : guestLinks}
                    </div>
                </div>
            </nav>
        );
    }
}
const mapStateToProps = (state) => ({
    auth: state.auth
});


export default connect(mapStateToProps,{logout})(Navbar);