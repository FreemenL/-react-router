import React from 'react';

import {Link} from './react-router-dom'
export default class UserList extends React.Component{
	constructor(props){
		super(props)
		this.state={
			users:[]
		}
	}
	componentDidMount(){
		let userStr = localStorage.getItem("users");
		let users = userStr?JSON.parse(userStr):[];
		this.setState({users})
	}
	render(){
		return(
			<ul className="list-group">
				{this.state.users.map((user,index)=>{
					return(<li key={index} className="list-group-item"><Link to={"/user/detail/"+user.id}>{user.username}:{user.id}</Link></li>)
				})}
			</ul>
		)
	}
}