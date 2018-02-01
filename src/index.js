import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './component/App';
import reducers from './reducers/Todo';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers);

let jqScript = document.createElement('script');

jqScript.src = '1111.js';
document.documentElement.appendChild(jqScript);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();
