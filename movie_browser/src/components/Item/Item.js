import React, { Component } from 'react';


class Item extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.item.name} </h1>
                <div>{this.props.item.overview} </div>
            </div>
        );
    }
}

export default Item;
