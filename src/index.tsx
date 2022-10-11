import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {store} from "./Components/State/redux-store";

const RerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

RerenderEntireTree();

store.subscribe(() => {
    // let state = store.getState()
    RerenderEntireTree()
});