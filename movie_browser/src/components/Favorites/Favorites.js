import React, { Component } from 'react';

import ItemList from './../ItemList/ItemList.js';


class Favorites extends Component {

    componentDidMount () {
        this.props.getUserFavorite();
    }

    render() {

        const items = this.props.favorite.map((item) => (
            {
                media_type: item.media_type,
                id: item.media_id,
                name: item.media_name,
                overview: item.media_overview,
                poster_path: item.poster_path,
            }
        ));
        return (
            <ItemList media={items} />
        );
    }
}

export default Favorites;
