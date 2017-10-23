import { connect } from 'react-redux'

import Media from './Media.js';
import { loadMedia } from './../../actions/media.js';
import { addUserFavorite } from './../../actions/user.js';


const mapStateToProps = (state, ownProps) => {
    return {
        media: state.media.media,
        activePage: state.media.activePage,
        query: state.media.query,
        totalPages: state.media.totalPages,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchMedia: (query, page) => {
            dispatch(loadMedia(query, page))
        },
        addFavorite: (media) => {
            dispatch(addUserFavorite(media))
        },
    }
}


const MediaRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(Media);

export default MediaRedux;
