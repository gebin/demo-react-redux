import React from 'react';
import { hashHistory } from 'react-router'
 

class Hello extends React.Component {
	
  redirect(event){ 
	hashHistory.push ('/hello') 
  }

  render() {
    return (
      <div>
      	<h1>Login</h1>	
      	<input type="text" placeholder={"请输入用户名"}/>
      	<input type="password" placeholder={"请输入密码"}/>
      	<input type="button" onClick={this.redirect.bind(this)} value={"点击"}/>
      </div>
    );
  }
}

Hello.defaultProps = {
};

export default Hello;
