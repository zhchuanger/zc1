import React, { Component } from 'react'
import {Prompt} from 'react-router-dom';
import axios from 'axios';
export default class Home extends Component {
    constructor(params) {
        super(params);
        this.state = {
            isWarn:true,
            list:[],
            isShow:false
        }
    }
    componentDidMount(){
        axios.get('http://www.weichuang.com/test')
        .then((result)=>{
            console.log(result.data);
            this.setState({
                list:result.data.list
            });
        })
    }
  render() {
    return (
        <div>
            home页
            <ul>
                {
                    this.state.list.map((obj,index)=>{
                        return (
                            <li>
                                <p>{obj.name}</p>
                                <p>{obj.date}</p>
                                <img src={obj.image}/>
                            </li>
                        )
                    })
                }
            </ul>
            <button onClick={()=>{
                // 下n页 (n>0) 上n页 (n<0)
                // this.props.history.go(n);
                // 下一页
                this.props.history.goForward();
            }}>下一页</button>

            {/* <Prompt when={this.state.isWarn} message={"确定离开页面吗？"}></Prompt> */}
        </div>
    )
  }
}
