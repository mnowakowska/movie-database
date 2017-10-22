import React, { Component } from 'react';
import {
    Media,
} from 'react-bootstrap';

import Item from './../Item/Item.js';
import './ItemList.css';


class ItemList extends Component {

    componentDidUpdate () {
        window.scrollTo(0, 0);
    }

    render() {
        const items = this.props.media.map((item) => (
            <Item item={item} key={item.id} />
        ));
        return (
            <div className="itemsContainer">
                {items}
            </div>
        );
    }
}

export default ItemList;
