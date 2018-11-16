import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from './react-router-dom';

import "bootstrap/dist/css/bootstrap.css";
import App from './App';
import User from './User';

let Home = (props)=>{
	console.log(props);
	return(<div>首页</div>)
};
let Profile = ()=><div>个人中心</div>;




 
ReactDOM.render(
	<App>
		<Route path="/home" component={Home}/>
		<Route path="/user" component={User}/>
		<Route path="/profile" component={Profile}/>
	</App>,
	document.getElementById('root')
);

