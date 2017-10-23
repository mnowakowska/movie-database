import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Form,
    FormGroup,
    Col,
    FormControl,
    ControlLabel,
    Button,
    Alert
} from 'react-bootstrap';

import './Register.css';


class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.createUser = this.createUser.bind(this);
        this.changeValue = this.changeValue.bind(this);
    }

    componentWillMount() {
        if (this.props.token) {
            this.context.router.history.push('/');
        }
    }

    componentWillUpdate(nextProps) {
        if (nextProps.token) {
            this.context.router.history.push('/');
        }
    }

    createUser () {
        this.props.createUser(this.state.username, this.state.password);
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
            <div className="register-form">
                {this.props.error && (
                    <Alert bsStyle="danger" className="error-alert" >
                        Please provide unique username and min 8 character password
                    </Alert>
                )}
                <Form horizontal >
                    <FormGroup controlId="username">
                        <Col componentClass={ControlLabel} sm={2}>
                            Username
                        </Col>
                        <Col sm={5}>
                            <FormControl
                                type="text"
                                placeholder="Username"
                                name="username"
                                value={this.state.username}
                                onChange={this.changeValue}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="password">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={5}>
                            <FormControl
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={this.state.password}
                                onChange={this.changeValue}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={5}>
                            <Button onClick={this.createUser} >
                                Register
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

Register.contextTypes = {
    router: PropTypes.object.isRequired,
}

export default Register;
