import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class AddFavorite extends Component {

    constructor(props) {
        super(props);
        this.state = {
            favorite: false,
        };
        this.add = this.add.bind(this);
    }

    add () {
        this.props.addFavorite(this.props.item);
        this.setState({
            favorite: true,
        });
    }

    render() {
        return (
            <Button bsStyle="primary" onClick={this.add} disabled={this.state.favorite} >
                Add to Favorite
            </Button>
        );
    }
}

export default AddFavorite;
