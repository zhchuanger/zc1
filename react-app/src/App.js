import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from "react-router-dom"
import B from "./components/B.js"
import A from "./components/A.js"
import Home from "./components/Home.js"

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
            <div>
                <Link to ="/">跳转Home页</Link>|
                <Link to="/b/10">跳转b页</Link>|
                <Link to="/a/5">跳转a页</Link>
                <Switch>
                  
                  <Route path="/b/:num" component={B}></Route>
                  <Route path="/a/:id" component={A}></Route>
                  <Route path="/" component={Home}></Route>
                </Switch>
                
            </div>
            
          </Router>
      </div>
    );
  }
}

export default App;
