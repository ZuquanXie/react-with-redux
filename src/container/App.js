import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css'
import Todo from './Todo'

const App = ({ state, dispatch }) => {
    console.log(state, dispatch);
    return (
        <div className="App">
            <div className="App-nav">
                <span className="App-logo">+</span>
                <Link to="/" >首页</Link>
                <Link to="/todo" >TODO</Link>
                <Link to="/log" >LOG</Link>
            </div>
            <div className="App-content">
                <Route path="/todo" component={Todo} />
            </div>
        {/*
            <Route path="/" component={Home}/>

            <Route path="/log" component={Log} />
        */}
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
