import React, { Component } from 'react';

import Item from './../Item/Item.js';


class ItemList extends Component {
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
