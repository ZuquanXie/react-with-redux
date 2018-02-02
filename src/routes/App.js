import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css'
import Home from './Home'
import Todo from './Todo'
import Log from './Log'

const App = ({ state, dispatch }) => {
    return (
        <div className="App">
            <div className="App-nav">
                <span className="App-logo">+</span>
                <NavLink activeClassName="active" to="/" exact >Home</NavLink>
                <NavLink activeClassName="active" to="/todo" >TODO</NavLink>
                <NavLink activeClassName="active" to="/log" >LOG</NavLink>
            </div>
            <div className="App-content">
                <Route path="/" exact component={Home}/>
                <Route path="/todo" exact component={Todo} />
                <Route path="/log" exact component={Log} />
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return { ...state }
};
const mapDispatchToProps = (dispatch) => {
    return { dispatch }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
