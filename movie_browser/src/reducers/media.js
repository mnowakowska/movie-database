import { SET_MEDIA } from '../actions/media.js'


const initialState = {
    media: [
      {
        backdrop_path: '/w9EzvZSQLk6MrwXgYpGZi1Pkaw2.jpg',
        first_air_date: '2001-10-14',
        genre_ids: [18],
        id: 1948,
        media_type: 'tv',
        name: 'Degrassi',
        origin_country: ['CA'],
        original_language: 'en',
        original_name: 'Degrassi',
        overview: 'super long overview',
      },
      {
        backdrop_path: '/w9EzvZSQLk6MrwXgYpGZi1Pkaw2.jpg',
        first_air_date: '2001-10-14',
        genre_ids: [18],
        id: 12224,
        media_type: 'movie',
        name: 'La la',
        origin_country: ['CA'],
        original_language: 'en',
        original_name: 'Degrassi',
        overview: 'super long overview',
      },
    ],
};

export function media(state = initialState, action) {
    switch (action.type) {
        case SET_MEDIA:
        return Object.assign({}, state, {
            media: [...action.mediaList]
        });
    default:
        return state;
    }
}
