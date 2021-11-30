import React from 'react';
import './App.css';
import {HashRouter, Switch, Route} from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./redux/store";
import AdminPage from "./pages/admin-page/admin-page";
import LoginPage from "./pages/login-page/login-page";
import "antd/dist/antd.css";

const App: React.FC = () =>{
  return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={LoginPage}/>
            <Route exact path="/admin" component={AdminPage}/>
          </Switch>
        </HashRouter>
      </Provider>
  );
}

export default App;
