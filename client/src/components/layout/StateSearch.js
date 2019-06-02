import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {saveResults} from '../../actions/search';
import {connect} from 'react-redux';
import {makeFav} from '../../actions/favs';
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
            this.props.saveResults(response.data);
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
        return newData = 'No Results Found';
    }


   if(this.state.brewdata.length === 0){

       newData = this.props.search.results.map((obj) => {
           let favButton
           if(this.props.auth.isAuthenticated){
               favButton = <small><button className="btn btn-success" onClick={() => {this.props.makeFav(obj,uid)}}>Fav This</button></small>
           }else{
               favButton = '';
           }
           return(
               <div className="row">
                   <div className="col-md-12">
                    <div className="card mb-4 shadow-sm">
                     <div key={obj.id} className="card-body">
                       {favButton}
                       <h4 className="display-4">{obj.name}</h4>
                       <p className="card-text lead"><b>Type - {obj.brewery_type}</b></p>
                         <p className="card-text lead"><b>State - {obj.state}</b></p>
                         <p className="card-text lead"><b>City - {obj.city}</b></p>
                       <p className="card-text lead"><b>Website - <a href={obj.website_url} target="_blank">{obj.website_url}</a></b></p>
                       <Link className="btn btn-primary btn-lg" to={`/brewDetail/${obj.id}`}>More Info </Link>
                   </div>
               </div>
                   </div>
               </div>
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
                <div className="row">
                    <div className="col-md-12">
                <div className="card mb-4 shadow-sm">
                    <div key={obj.id} className="card-body">
                        {favButton}
                        <h4 className="display-4">{obj.name}</h4>
                        <p className="card-text lead"><b>Type - {obj.brewery_type}</b></p>
                        <p className="card-text lead"><b>State - {obj.state}</b></p>
                        <p className="card-text lead"><b>City - {obj.city}</b></p>
                        <p className="card-text lead"><b>Website - <a href={obj.website_url} target="_blank">{obj.website_url}</a></b></p>
                        <Link className="btn btn-primary btn-lg" to={`/brewDetail/${obj.id}`}>More Info </Link>
                    </div>
                </div>
                    </div>
                </div>
            );
        });
    }

}


        return(
            <div>
            <form onSubmit={this.submitCity}>
                <div>
                    <label><b>State</b></label>
                    <input onChange={this.onChange}  name="area"/><br/>
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