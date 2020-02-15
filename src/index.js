import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Create Store, Wrap the Provider Component to the App
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './utils/reducer';

//The extra argument in store is for a Redux extension on Chrome. It allows the developer to see the full state tree

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
