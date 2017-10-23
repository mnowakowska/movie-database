import MediaApi from './../api/mediaApi.js';

export const SET_MEDIA = 'SET_MEDIA';


export function setMovies(mediaList, query, page, totalPages) {
    return {
        type: SET_MEDIA,
        mediaList,
        query,
        page,
        totalPages,
    }
}


export function loadMedia(query, page) {
    return function(dispatch) {
        return MediaApi.searchMedia(query, page).then(response => {
            dispatch(setMovies(
                response.results,
                query,
                response.page,
                response.total_pages,
            ));
        }).catch(error => {
            throw(error);
        });
    };
}
