import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';

//Store
import {createStore,applyMiddleware} from 'redux';
import myReducer from "./reducers";
import {Provider} from 'react-redux'
import thunk from "redux-thunk";

const store = createStore(
    myReducer,
    applyMiddleware(thunk)
    );

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
