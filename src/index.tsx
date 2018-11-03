import * as React from "react";
import * as ReactDOM from "react-dom";
import { MuiThemeProvider, getMuiTheme } from "material-ui/styles"
import { Provider } from "react-redux";
import { store } from "./store";
import { showResults } from "./showResults";
import { Form } from "./Form";

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme = {getMuiTheme()}>
            <div style={{ padding: 15 }}>
                <h2>Typescript Form</h2>
                <Form onSubmit={showResults} />
            </div>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById("root")
);