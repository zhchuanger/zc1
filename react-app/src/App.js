import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,Switch,Redirect,NavLink} from "react-router-dom"
import B from "./components/B.js"
import A from "./components/A.js"
import Home from "./components/Home.js"
import D from "./components/D.js"

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
            <div>
                <NavLink to ="/">跳转Home页</NavLink>|
                <NavLink to="/b/10">跳转b页</NavLink>|
                <NavLink to="/a/5">跳转a页</NavLink>|
                <NavLink to="/C">跳转C页</NavLink>|
                <NavLink to="/d/1">跳转d页</NavLink>
                {/* <Switch> */}
                  <Route exact path="/" component={Home}></Route>
                  <Route path="/b/:num" component={B}></Route>
                  <Route path="/a/:id" component={A}></Route>
                  {/* <Route path="/C" render={()=>{
                    return <h1>cccccc</h1>
                  }}></Route> */}
                  <Route path="/c" render={()=>{
                    return <Redirect to="/"></Redirect>
                  }}></Route>
                  <Route path="/d/:x" children={D}></Route>
                  
                {/* </Switch> */}
                
            </div>
            
          </Router>
      </div>
    );
  }
}

export default App;
