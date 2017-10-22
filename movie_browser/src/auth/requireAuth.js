import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


export default function(ComposedComponent) {
    class Authentication extends Component {
        static contextTypes = {
            router: PropTypes.object
        }

        componentWillMount() {
            if (!this.props.token) {
                debugger;
                this.context.router.history.push('/login');
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.token) {
                this.context.router.history.push('/login');
            }
        }

        render() {
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return { token: state.token };
    }

    return connect(mapStateToProps)(Authentication);
}
