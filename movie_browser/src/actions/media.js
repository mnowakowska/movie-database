import MediaApi from './../api/mediaApi.js';

export const SET_MEDIA = 'SET_MEDIA';


export function setMovies(mediaList) {
  return {
    type: SET_MEDIA,
    mediaList
  }
}


export function loadMedia(query) {
    return function(dispatch) {
        return MediaApi.searchMedia(query).then(response => {
            dispatch(setMovies(response.results));
        }).catch(error => {
            throw(error);
        });
    };
}
