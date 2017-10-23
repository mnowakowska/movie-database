import React from 'react';

import ItemList from './../ItemList/ItemList.js';
import Pagination from './../Pagination/Pagination.js';
import SearchMedia from './../SearchMedia/SearchMedia.js';


function Media (props) {
    return (
        <div>
            <SearchMedia
                searchMedia={props.searchMedia}
                query={props.query}
            />
            <ItemList
                media={props.media}
                query={props.query}
                addFavorite={props.addFavorite}
            />
            <Pagination
                media={props.media}
                searchMedia={props.searchMedia}
                totalPages={props.totalPages}
                query={props.query}
                activePage={props.activePage}
            />
        </div>
    );
}

export default Media;
