import React, { Component } from 'react';


class SearchMedia extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
        };
        this.getNewResults = this.getNewResults.bind(this);
        this.typeName = this.typeName.bind(this)
    }

    getNewResults () {
        this.props.searchMedia(this.state.searchQuery);
        this.setState({
            searchQuery: ''
        });
    }

    typeName (newName) {
        this.setState({
            searchQuery: newName.target.value
        });
    }

  render() {

    return (
        <div>
            <form>
                <input
                    id="formControlsText"
                    type="text"
                    placeholder="Search movies/tv shows or ppl"
                    value={this.state.searchQuery}
                    onChange={this.typeName}
                />
            </form>
            <button onClick={this.getNewResults} >
                Search
            </button>
        </div>
    );
  }
}

export default SearchMedia;
