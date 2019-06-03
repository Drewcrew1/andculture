import React from 'react';
import axios from 'axios';

import {saveResults} from '../../actions/search';
import {connect} from 'react-redux';
import {makeFav} from '../../actions/favs';
import SearchItem from '../common/SearchItem';

class StateSearch extends React.Component {
    constructor(){
        super();
        this.state = {
            area: '',
            brewdata: []
        }
    }
    submitCity = (e) => {
        e.preventDefault();
        axios.get(`/api/openBrew/state/${this.state.area}`).then((response) => {

            this.setState({brewdata: response.data});
            if(response.data.length > 0){
                this.props.saveResults(response.data);
            }
        }).catch((err) => {
            console.log(err);
        });
    }
    onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});

    }

    render(){

        let newData;
        let uid = this.props.auth.user._id;

if(this.state.brewdata === null || undefined){
    newData = (  <div>
            <p>Loading</p>
        </div>
    );

}else{
    if(this.state.brewdata.msg){
        newData = 'No results Found';
    }else{


   if(this.state.brewdata.length === 0){

       newData = this.props.search.results.map((obj) => {
           let favButton
           if(this.props.auth.isAuthenticated){
               favButton = <small><button className="btn btn-success" onClick={() => {this.props.makeFav(obj,uid)}}>Fav This</button></small>
           }else{
               favButton = '';
           }
           return(
               <SearchItem
                   id={obj.id}
                   favButton={favButton}
                   name={obj.name}
                   brewery_type={obj.brewery_type}
                   state={obj.state}
                   city={obj.city}
                   website_url={obj.website_url}
                   infoLink={obj.id}
                   website_url_Link={obj.website_url}
                   key={obj.id}
               />
           );
       });
    }else{

        newData = this.state.brewdata.map((obj) => {
            let favButton
            if(this.props.auth.isAuthenticated){
                favButton = <small><button className="btn btn-success" onClick={() => {this.props.makeFav(obj,uid)}}>Fav This</button></small>
            }else{
                favButton = '';
            }
            return(
                <SearchItem
                    id={obj.id}
                    favButton={favButton}
                    name={obj.name}
                    brewery_type={obj.brewery_type}
                    state={obj.state}
                    city={obj.city}
                    website_url={obj.website_url}
                    infoLink={obj.id}
                    website_url_Link={obj.website_url}
                    key={obj.id}
                />
            );
        });
    }
    }
}


        return(
            <div>
            <form onSubmit={this.submitCity} className="form-group">
                <div className="container">
                    <label><b>State</b></label>
                    <input required className="form-control" onChange={this.onChange}  name="area"/><br/>
                    <input className="btn btn-secondary" type="submit"  />

                </div>
            </form>
            <hr />
                <div className="container">
                    {newData}
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    search: state.search
});
export default connect(mapStateToProps,{saveResults, makeFav})(StateSearch);