import { connect } from 'react-redux'

import Media from './Media.js';


const mapStateToProps = (state, ownProps) => {
  return {
    media: state.media
  }
}


const MediaRedux = connect(
  mapStateToProps,
)(Media);

export default MediaRedux;
