import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import App from './Example/Context';
// import App from './Example/Reducer';
// import App from './Example/ExPropsDrilling';
// import App from './Example/ExUseReducer';
import App from './Example/ExRedux'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

// ExRedux
import store from "./Example/ExStore";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  {/* <BrowserRouter> */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  {/* </BrowserRouter> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
