import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

import LogOutRedux from './../LogOut/LogOut.Redux.js';


describe('App Component', () => {
    it('renders nav component component', () => {
        const wrapper = shallow(<App isAuthenticated={true} />);
        expect(wrapper.find('#browser-navbar').exists()).toBeTruthy();
    });

    it('renders logout link for log in users', () => {
        const wrapper = shallow(<App isAuthenticated={true} />);
        expect(wrapper.find(LogOutRedux).exists()).toBeTruthy();
    });

    it('not renders logout link for log in users', () => {
        const wrapper = shallow(<App isAuthenticated={false} />);
        expect(wrapper.find(LogOutRedux).exists()).toBeFalsy();
    });

    it('renders two links for log in users', () => {
        const wrapper = shallow(<App isAuthenticated={true} />);
        expect(wrapper.find('.nav-link').length).toBe(3);
    });

    it('renders one link for not log in users', () => {
        const wrapper = shallow(<App isAuthenticated={false} />);
        expect(wrapper.find('.nav-link').length).toBe(2);
    });
});
