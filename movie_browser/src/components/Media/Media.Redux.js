import { connect } from 'react-redux'

import Media from './Media.js';
import { loadMedia } from './../../actions/media.js';


const mapStateToProps = (state, ownProps) => {
    return {
        media: state.media.media
    }
}

const mapDispatchToProps = dispatch => {
  return {
    searchMedia: query => {
        dispatch(loadMedia(query))
    },
  }
}


const MediaRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(Media);

export default MediaRedux;
