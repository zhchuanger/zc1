import React, { Component } from 'react';
import './App.css';
import store from './store';
import {add,minus} from './action';
import {connect} from 'react-redux';
class App extends Component {
    constructor(params) {
        super(params);
        this.addHandler = this.addHandler.bind(this);
    }
    addHandler(){
        console.log('add');
        // store.dispatch 触发action
        store.dispatch(add(2));
    }
    render() {
        return (
            <div>
                {this.props.count}
                <button onClick={
                    this.addHandler
                }>+++</button>
                <button onClick={()=>{
                    store.dispatch(minus(3));
                }}>---</button>
                <div>
                    <h1>sxq成绩</h1>
                    <button onClick= {()=>{

                    }}>考试</button>
                </div>
            </div>
        );
    }
}
let mapStatetoProps = (state) =>{
    return {
        count:state.count
    }
}
export default connect(mapStatetoProps)(App);


