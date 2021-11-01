import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Header from "./components/Header";

import Home from "./views/Home";
import Register from "./views/Register";
import Login from "./views/Login";
import Main from "./views/Main";
import NewSuscription from "./views/NewSuscription";
import Edit from "./views/Edit";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/new" component={NewSuscription} />
          <Route exact path="/edit/:id" component={Edit} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
