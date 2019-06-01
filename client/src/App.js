
import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login'
import Dashboard from './components/layout/Dashboard';
import CitySearch from './components/layout/CitySearch';
import StateSearch from './components/layout/StateSearch';
import BrewDetail from './components/layout/BrewDetail';
import Favs from './components/layout/Favs';

import {Provider} from 'react-redux';
import store from './store';
import './App.css';


class App extends React.Component {


    render() {

        return (

            <Provider store={store}>

                <Router>
                    <div className="App">

                        <Navbar />

                        <Route exact path='/' component={Landing} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route exact path="/citySearch" component={CitySearch} />
                        <Route exact path="/stateSearch" component={StateSearch} />
                      <Route path="/brewDetail/:id" component={BrewDetail} />
                        <Route exact path="/favs" component={Favs} />
                        <Footer />
                    </div>
                </Router>
            </Provider>

        );
    }
}

export default App;
