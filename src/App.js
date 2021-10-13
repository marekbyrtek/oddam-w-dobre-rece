import React from "react";
import WebFont from 'webfontloader';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Register from "./components/Register/Register";
import Form from "./components/Form/Form";
import { AuthProvider } from "./components/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

WebFont.load({
  google: {
    families: ['Open Sans:300,400,,500,600,700', 'sans-serif']
  }
});

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/oddaj-rzeczy" component={Form} />
          <Route exact path="/logowanie" component={Login} />
          <Route exact path="/rejestracja" component={Register} />
          <Route exact path="/wylogowano" component={Logout} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
