import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Home/home";
import Forget from "./login-signup/forgotpass";
import ForgotPassword from "./login-signup/ForgotPassword";
import Login from "./login-signup/login";
import Register from "./login-signup/signup";
import Admin from "./Admin/admin";
import AdminFake from "./Admin/admin_fake";
import UserHome from "./Home/userHome";
import ViewFake from "./Admin/view_fake";
import View from "./Admin/view";
function App() {
  return (
      // eslint-disable-next-line no-restricted-globals
      <Router history={history}>
              <div className="app">
                  <Switch>
              <Route path="/login" component={Login}/>

              <Route path="/signup" component={Register}/>


              <Route path="/admin" component={AdminFake}/>

              <Route path="/manager" component={Admin}/>

              <Route path="/forget" component={Forget} />
              <Route path="/forgotPassword" component={ForgotPassword} />

              <Route  path="/home" component={UserHome}/>
              <Route  path="/view" component={ViewFake}/>
              <Route  path="/manager_view" component={View}/>
              <Route  path="/" component={Home}/>

                  </Switch>
              </div>
        </Router>
  );
}

export default App;
