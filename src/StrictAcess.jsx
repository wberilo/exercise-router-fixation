import React from 'react';
import { Component } from 'react';
import { Redirect } from 'react-router-dom';

class StrictAcess extends Component{
  constructor(props){
    super(props);
    this.state ={
      user:{username:"joao",password:"1234"}
    }
  }
  componentDidMount(){
    console.log('mounted')
  }
  render(){
    if (this.state.user.username === this.props.user.username) {
      return (<Redirect to="/users/10"/>)
    }
    else{
      console.log(this.props.user )
      console.log(this.state.user )
      return <span>ERRO</span>
    }
    
  }
  
}

export default StrictAcess;