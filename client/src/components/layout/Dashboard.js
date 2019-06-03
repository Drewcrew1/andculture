import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Dashboard extends React.Component {
    constructor(){
        super();
        this.state = {
            loading: true,
            data: []
        };

    }

    componentDidMount() {

        axios.get('/api/openBrew').then((response) => {
            this.setState({data: response.data});
        }).catch((err) => {
            console.log(err);
        });

    }

    render(){

        let dashContent;
 if(this.state.data.length < 1){
     dashContent = ( <div>
         <p>Loading...</p>
     </div> );
 }else{
    let arr = this.state.data;

   dashContent = arr.map((obj) => {
       return(
           <div className="card mb-4 shadow-sm">
           <div key={obj.id} className="card-body">
               <p className="card-text">Brewery Name - <b>{obj.name}</b></p>
               <p className="card-text">City and State - {obj.city}, {obj.state}</p>
               <Link className="btn btn-primary btn-sm" to={`/brewDetail/${obj.id}`}>More Info </Link>
           </div>
           </div>
       );
   });
 }


        return(
            <div className='dashboard space'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h1 className='display-4'>Random Search</h1>
                            <p>Check out some random results to find new places.</p>
                            {dashContent}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({

});
export default connect(mapStateToProps)(Dashboard);