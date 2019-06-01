import React from 'react';

import {connect} from 'react-redux';
import {getFavs, removeFavs} from '../../actions/favs';
import {Link} from 'react-router-dom';
class Favs extends React.Component{
    constructor(){
        super();
        this.state = {
            favs: []
        }
    }
componentDidMount(){
    let id = this.props.auth.user._id;
    this.props.getFavs(id);
    this.setState({favs: this.props.favs});
}
    render(){
        let id = this.props.auth.user._id;

let content;
if(this.props.favs.favs.length > 0){
    content = this.props.favs.favs.map((obj) => {
        return(
            <div className="card mb-4 shadow-sm">
                <div key={obj.id} className="card-body">
                    <small><button onClick={() => {
                        this.props.removeFavs(obj._id);
                        this.props.getFavs(id);
                        this.setState({favs: this.props.favs});
                    }}>Remvoe Fav</button></small>
                    <h4 className="card-text">{obj.name}</h4>
                    <p className="card-text"> state - {obj.state}</p>
                    <p className="card-text"> Website - <a href={obj.website_url} target="_blank">{obj.website_url}</a></p>
                    <small><Link to={`/brewDetail/${obj.id}`}>More Info </Link></small>
                </div>
            </div>
        );
});

}else{
    content = "no Favs";
}
        return (
            <div>
                <h2>Favs</h2>
                {content}
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    favs: state.favs
});


export default connect(mapStateToProps,{getFavs,removeFavs})(Favs);