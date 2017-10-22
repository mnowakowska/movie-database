import React, { Component } from 'react';
import {
    Media,
} from 'react-bootstrap';

import './Item.css';


class Item extends Component {
    render() {
        const imgUrl=`http://image.tmdb.org/t/p/w92/${this.props.item.poster_path}`;
        return (
            <div className="item-container">
                <Media>
                    <Media.Left>
                        <img src={imgUrl}  className="poster-img" />
                    </Media.Left>
                    <Media.Body>
                         <Media.Heading>
                             {this.props.item.name || this.props.item.original_name}
                             {' '}
                             ({this.props.item.media_type})
                         </Media.Heading>
                        <div>{this.props.item.overview} </div>
                    </Media.Body>
                    <Media.Right>
                        <div>
                            <span>Rating: </span>
                            <span className="popularity">
                                {this.props.item.vote_average.toFixed(2)}
                            </span>
                        </div>
                    </Media.Right>
                </Media>
            </div>
        );
    }
}

export default Item;
