import React from 'react';
import { Media } from 'react-bootstrap';

import AddFavorite from './../AddFavorite/AddFavorite.js';
import './Item.css';


function Item ({ item, addFavorite }) {
    const imgUrl=`http://image.tmdb.org/t/p/w92/${item.poster_path}`;
    const itemRatings = item.vote_average ? item.vote_average.toFixed(2) : 0;
    return (
        <div className="item-container">
            <Media>
                <Media.Left>
                    <img src={imgUrl} alt={`img-${item.name}`} className="poster-img" />
                </Media.Left>
                <Media.Body>
                     <Media.Heading>
                         {item.name || item.original_name || item.original_title}
                         {' '}
                         ({item.media_type})
                     </Media.Heading>
                    <div>{item.overview} </div>
                </Media.Body>
                <Media.Right>
                    <div>
                        <span>Rating: </span>
                        <span className="popularity">
                            {itemRatings}
                        </span>
                    </div>
                    <AddFavorite addFavorite={addFavorite} item={item} />
                </Media.Right>
            </Media>
        </div>
    );
}

export default Item;
