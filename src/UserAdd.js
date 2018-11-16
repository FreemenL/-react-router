import React from 'react';

export default class UserAdd extends React.Component{
	constructor(props){
		super(props);
		this.iptRef = React.createRef();
	}
	handleSubmit=()=>{
		let username = this.iptRef.current.value;
		let user = {id:Date.now(),username}
		let userStr = localStorage.getItem("users");
		let users = userStr?JSON.parse(userStr):[];
		users.push(user);
		localStorage.setItem("users",JSON.stringify(users));
		this.props.history.push('/user/list')
	}
	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<div className="form-group">
					<label htmlFor="username"></label>
					<input ref={this.iptRef} type="text" className="form-cnntrol"/>
				</div>
				<div className="form-group">
					<input type="submit" className="btn btn-primary" value="提交"/>
				</div>
			</form>
		)
	}
}