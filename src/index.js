import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './component/App';
import reducers from './reducers/Todo';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route path='/' exact render={() => <div>首页</div>} />
                <Route path="/todo-list" exact component={App} />
                <Route path="/page-another" exact render={() => <div>另一个页面</div>} />
                <Link to="/todo-list">TodoList</Link>
                <Link to="/page-another">另一个页面</Link>
            </div>
        </Router>
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();
