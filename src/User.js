import React from 'react';
import { Link ,Route} from './react-router-dom'; 

import UserAdd from './UserAdd';
import UserList from './UserList';
import UserDetail from './UserDetail';
export default class User extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div className="row">
				<div className="col-md-2">
					<ul>
						<li><Link to={'/user/add'}>添加用户</Link></li>
						<li><Link to={'/user/list'}>用户列表</Link></li>
					</ul>
				</div>
				<div className="col-md-2">
					<Route path="/user/add" component={UserAdd}/>
					<Route path="/user/list" component={UserList}/>
					<Route path="/user/detail/:id" component={UserDetail}/>
				</div>
				
			</div>
		)
	}
}