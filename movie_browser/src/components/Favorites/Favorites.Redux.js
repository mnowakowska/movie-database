import { connect } from 'react-redux'

import Favorites from './Favorites.js';
import { getUserFavorite } from './../../actions/user.js';


const mapStateToProps = (state, ownProps) => {
    return {
        favorite: state.user.favorite,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUserFavorite: () => {
            dispatch(getUserFavorite())
        },
    }
}


const FavoritesRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(Favorites);

export default FavoritesRedux;
