import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SingIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.authUser = this.authUser.bind(this);
        this.changeValue = this.changeValue.bind(this);
    }

    componentWillMount() {
        if (this.props.token) {
            this.context.router.history.push('/media');
        }
    }

    componentWillUpdate(nextProps) {
        if (nextProps.token) {
            this.context.router.history.push('/media');
        }
    }

    authUser () {
        this.props.authUser(this.state.username, this.state.password);
        this.setState({
            username: '',
            password: '',
        });
    }

    changeValue (field) {
        const name = field.target.name;
        this.setState({
            [name]: field.target.value
        });
    }

  render() {

    return (
        <div>
            <form>
                <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.changeValue}
                />
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.changeValue}
                />
            </form>
            <button onClick={this.authUser} >
                Sing In
            </button>
        </div>
    );
  }
}

SingIn.contextTypes = {
    router: PropTypes.object.isRequired,
}

export default SingIn;
