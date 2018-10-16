import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';

//Store
import {createStore} from 'redux';
import myReducer from "./reducers";
import {Provider} from 'react-redux'

const store = createStore(myReducer);

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
