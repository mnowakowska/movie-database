import React from 'react';
import {
    Media,
} from 'react-bootstrap';

import './Item.css';


function Item ({ item }) {
    const imgUrl=`http://image.tmdb.org/t/p/w92/${item.poster_path}`;
    return (
        <div className="item-container">
            <Media>
                <Media.Left>
                    <img src={imgUrl} alt={`img-${item.name}`} className="poster-img" />
                </Media.Left>
                <Media.Body>
                     <Media.Heading>
                         {item.name || item.original_name}
                         {' '}
                         ({item.media_type})
                     </Media.Heading>
                    <div>{item.overview} </div>
                </Media.Body>
                <Media.Right>
                    <div>
                        <span>Rating: </span>
                        <span className="popularity">
                            {item.vote_average.toFixed(2)}
                        </span>
                    </div>
                </Media.Right>
            </Media>
        </div>
    );
}

export default Item;
