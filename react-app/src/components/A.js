import React, { Component } from 'react'

export default class A extends Component {
    constructor(params){
        super(params)
        this.state = {

        }
        this.go = this.go.bind(this);
    }
    go(){
        this.props.history.push('/');
    }
    render() {
        console.log(this.props);
        console.log(this.props.match.params.id);
        let {match} = this.props;
        return (
        <div>
            A页{match.params.id}
            <button onClick={this.go}>回到首页</button>
            <button onClick={()=>{
                
                this.props.history.go(-2);
                // this.props.history.goBack();
                // this.props.history.goForward();
                // this.props.push("/");
            }}>-1</button>
            
        </div>
        )
    }
    }
