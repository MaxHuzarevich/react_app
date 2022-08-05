import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {State} from "./Components/State/State";

export const RerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App dialogsPage={State.dialogsPage} profilePage={State.profilePage} />
        </BrowserRouter>,
        document.getElementById('root')
    );
}