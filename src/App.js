import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Users from './Users';
import StrictAcess from './StrictAcess';

class App extends Component {
  componentDidMount(){
    console.log('mounted app')
  }
  render() {
    const sendProps = {username:"joao",password:"1234"}
    return (
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Link to="/strictacess">strictacess</Link>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/users/:id" render={(props) => <Users greetingMessage="Good Morning" />}/>
          <Route path="/strictacess" render={(props) => <StrictAcess user={sendProps} />}/>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
