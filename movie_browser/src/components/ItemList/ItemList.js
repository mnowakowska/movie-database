import React, { Component } from 'react';

import Item from './../Item/Item.js';
import NoResults from './../NoResults/NoResults.js';
import './ItemList.css';


class ItemList extends Component {

    componentDidUpdate () {
        window.scrollTo(0, 0);
    }

    render() {
        if (this.props.query && this.props.media.length === 0) {
            return <NoResults />;
        }

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
