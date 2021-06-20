import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Entry from './pages/entry';
import HomeContainer from './pages/homeContainer';
import EmployeesData from './components/employeesData';

import store from './redux/store';
import '../styles/main.scss';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path = "/home" component = {HomeContainer}/>
                    <Route path = "/list" render={()=><HomeContainer><EmployeesData/></HomeContainer>}/>
                    <Route path = "/" component = {Entry}/>
                </Switch>
            </Router>
        </Provider>
    );
};

ReactDOM.render(<App/> , document.querySelector('main'));
