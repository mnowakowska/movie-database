import React, { Component } from 'react';

import ItemList from './../ItemList/ItemList.js';


class Media extends Component {
    render() {
        return (
            <div>
                <ItemList media={this.props.media} />
            </div>
        );
    }
}

export default Media;
