import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import About from './components/About';
import Hello from './components/Hello';
import Home from './components/Home';
import Login from './components/Login';
import { Router, Route, hashHistory,IndexRoute } from 'react-router';
// Render the main component into the dom
// ReactDOM.render(<App />, document.getElementById('app'));

ReactDOM.render(
	<div>
		<Router history={hashHistory}>
			<Route path="/" component ={App} >
		    	<IndexRoute component={Home} onEnter={({}, replace) => replace(`/login`)}/>
				<Route path="/about" component ={About} />
				<Route path="/hello" component ={Hello} />
			</Route>
			<Route path="/login" component ={Login} />
		</Router> 
	</div>	
	,document.getElementById('app')
)