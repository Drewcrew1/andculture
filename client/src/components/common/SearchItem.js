import React from 'react';
import {Link} from 'react-router-dom';

const SearchItem = ({
                            id,
                            key,
                            favButton,
                            name,
                            brewery_type,
                            state,
                            city,
                            website_url,
                            website_url_Link,
                            infoLink
                        }) => {
    return (
        <div key={key} className="row">
            <div className="col-md-12">
                <div className="card mb-1 shadow-sm">
                    <div  className="card-body mb-5">
                        {favButton}
                        <h4 className="display-4">{name}</h4>
                        <p className="card-text lead"><b>Type - {brewery_type}</b></p>
                        <p className="card-text lead"><b>State - {state}</b></p>
                        <p className="card-text lead"><b>City - {city}</b></p>
                        <p className="card-text lead"><b>Website - <a href={website_url} target="_blank">{website_url_Link}</a></b></p>
                        <Link className="btn btn-primary btn-lg" to={`/brewDetail/${infoLink}`}>More Info </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default SearchItem;