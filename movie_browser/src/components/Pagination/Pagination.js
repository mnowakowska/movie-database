import React, { Component } from 'react';
import { Pagination as BootstrapPagination } from 'react-bootstrap';


class Pagination extends Component {

    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(eventKey) {
        this.props.searchMedia(
            this.props.query,
            eventKey
        );
    }

    render() {
        if (this.props.totalPages < 2) {
            return null;
        }
        return (
            <div>
                <BootstrapPagination
                    prev
                    next
                    first
                    ellipsis
                    boundaryLinks
                    items={this.props.totalPages}
                    maxButtons={2}
                    activePage={this.props.activePage}
                    onSelect={this.handleSelect}
                />
            </div>
        );
    }
}

export default Pagination;
