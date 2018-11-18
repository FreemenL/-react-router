import React from 'react';
import ReactDOM from 'react-dom';
import { Route , Switch } from './react-router-dom';

import "bootstrap/dist/css/bootstrap.css";
import App from './App';
import User from './User';
import Login from './Login';

import Protected from './Protected';
let Home = (props)=>{
	return(<div>首页</div>)
};
let Profile = ()=><div>个人中心</div>;



 
ReactDOM.render(
	<App>
		<Switch>
			<Route path="/home" component={Home}/>
			<Route path="/user" component={User}/>
			<Route path="/login" component={Login}/>
			<Protected path="/profile" component={Profile}/>
		</Switch>
	</App>,
	document.getElementById('root')
);

