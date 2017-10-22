import React, { Component } from 'react';
import {
    Button,
    Form,
    FormGroup,
    FormControl,
} from 'react-bootstrap';

import './SearchMedia.css';


class SearchMedia extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchQuery: this.props.query,
        };
        this.getNewResults = this.getNewResults.bind(this);
        this.typeName = this.typeName.bind(this);
    }

    getNewResults (event) {
        this.props.searchMedia(this.state.searchQuery, 1);
        event.preventDefault();
    }

    typeName (newName) {
        this.setState({
            searchQuery: newName.target.value
        });
    }

    render() {
        return (
            <div>
                <Form id="search-form" inline onSubmit={this.getNewResults} >
                    <FormGroup bsSize="large" className="search-group">
                        <FormControl
                            id="formControlsText"
                            type="text"
                            placeholder="Search movies, tv shows or people"
                            value={this.state.searchQuery}
                            onChange={this.typeName}
                            className="search-input"
                        />
                    </FormGroup>
                    <Button
                        onClick={this.getNewResults}
                        disabled={!this.state.searchQuery}
                        className="search-button"

                    >
                        Search
                    </Button>
                </Form>
            </div>
        );
    }
}

export default SearchMedia;
