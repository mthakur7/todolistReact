import React from "react"
import './App.css';
import Collections from "./components/Collections"
import Dashboard from "./components/Dashboard"
import Landing from "./components/Landing";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Forgotpw from "./components/Forgotpw";
import Learnmore from "./components/Learnmore";
import Fnf from "./components/Fnf"
import { Route, Switch } from "react-router-dom"

const App = () => {
  return (
    <>

      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/forgotpw" component={Forgotpw} />
        <Route exact path="/learnmore" component={Learnmore} />
        <Route exact path= "/dashboard" component={Dashboard}/>
        <Route exact path= "/collections" component={Collections}/>

        <Route component={Fnf} />







      </Switch>

    </>
  );
}

export default App;
