

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class Hello extends React.Component {
  render() {
    return (
      <div>
      	<h1>Hello</h1>	
        <img src={yeomanImage} alt="Yeoman Generator" />
      </div>
    );
  }
}

Hello.defaultProps = {
};

export default Hello;
