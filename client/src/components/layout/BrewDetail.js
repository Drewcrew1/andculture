import React from 'react';
import axios from 'axios';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

import {withRouter} from 'react-router-dom';


class BrewDetail extends React.Component {
constructor(){
    super();
    this.state = {
        brewData: null,
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom:11
    };
}

    componentDidMount(){
        const {id} = this.props.match.params;
        axios.get(`/api/openBrew/${id}`).then((response) => {
           this.setState({brewData: response.data});
        }).catch((err) => {
            console.log(err);
        });

    }

    render(){
        let mapStyles = {
            width: '40%',
            height: '40%',
            marginLeft: '30vw'
        };
    let info = this.state.brewData;


    let content;
            if(info === null){
                content = "Loading";
            }else{
                let lat = info.latitude;
                let lng = info.longitude

                content = <div >
                    <h3 className="display-3">{info.name}</h3>
                    <h3>Brewery Type - {info.brewery_type}</h3>
                    <h3>{info.street}, {info.city}, {info.state}, {info.postal_code}</h3>
                    <h3> Website - <a href={info.website_url} target="_blank">{info.website_url}</a></h3>
                    <div>
                        <Map google={this.props.google}
                             style={mapStyles}
                             initialCenter={{
                                 lat: lat,
                                 lng: lng
                             }}
                             zoom={10}>

                            <Marker onClick={this.onMarkerClick}

                                    name={'Current location'} />
                            <Marker
                                title={'The marker`s title will appear as a tooltip.'}
                                name={info.name}
                                position={{lat: lat, lng: lng}} />

                            <Marker />


                        </Map>
                    </div>
<div>



</div>
                </div>
            }
        return(
            <div>
                <button className="btn btn-dark" onClick={this.props.history.goBack}>Back</button>
                {content}

            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyDCywPsMjsZt0XzqishZNae4XHckGDpREU"
})(withRouter(BrewDetail));