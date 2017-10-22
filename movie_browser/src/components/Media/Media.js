import React, { Component } from 'react';

import ItemList from './../ItemList/ItemList.js';
import SearchMedia from './../SearchMedia/SearchMedia.js';


class Media extends Component {
    render() {
        return (
            <div>
                <SearchMedia searchMedia={this.props.searchMedia} />
                <ItemList media={this.props.media} />
            </div>
        );
    }
}

export default Media;
