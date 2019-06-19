import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

import '@vaadin/vaadin-button';
import '@vaadin/vaadin-grid';
import '@vaadin/vaadin-text-field';

ReactDOM.render(
        <div>
            <div class="form">
                <vaadin-text-field label="First Name" id="firstName"> </vaadin-text-field>
                <vaadin-text-field label="Last Name" id="lastName"> </vaadin-text-field>
                <vaadin-button id="addButton"> Add </vaadin-button>
            </div>
            <App />
            <vaadin-grid id="grid">
                <vaadin-grid-column path="firstName" header="First name"> (1)
                </vaadin-grid-column>
                <vaadin-grid-column path="lastName" header="Last name">
                </vaadin-grid-column>
            </vaadin-grid>
        </div>,
        document.getElementById("root")
    );
