require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import {Link} from 'react-router';
let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div> 
      	<Link to="/about" >About</Link>
      	<Link to="/hello" >Hello</Link>
      	 {this.props.children}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
