import React, { Component } from 'react';

import Item from './../Item/Item.js';


class ItemList extends Component {

    componentDidUpdate () {
        window.scrollTo(0, 0);
    }

    render() {
        const items = this.props.media.map((item) => (
            <Item item={item} key={item.id} />
        ));
        return (
            <div>
                {items}
            </div>
        );
    }
}

export default ItemList;
