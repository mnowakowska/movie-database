import React, { Component } from 'react';

import ItemList from './../ItemList/ItemList.js';
import Pagination from './../Pagination/Pagination.js';
import SearchMedia from './../SearchMedia/SearchMedia.js';


class Media extends Component {
    render() {
        return (
            <div>
                <SearchMedia
                    searchMedia={this.props.searchMedia}
                    query={this.props.query}
                />
                <ItemList media={this.props.media} />
                <Pagination
                    media={this.props.media}
                    searchMedia={this.props.searchMedia}
                    totalPages={this.props.totalPages}
                    query={this.props.query}
                    activePage={this.props.activePage}
                />
            </div>
        );
    }
}

export default Media;
