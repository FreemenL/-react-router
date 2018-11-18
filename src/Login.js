import React from 'react';
// import { Link ,Route ,Switch} from './react-router-dom'; 

export default class Login extends React.Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(){
		localStorage.setItem("login","true");
		this.props.history.push(this.props.location.state.from)
	}
	render(){
		return(
			<div>
				<button onClick={this.handleClick} className="btn btn-primary">登陆</button>
			</div>
		)
	}
}