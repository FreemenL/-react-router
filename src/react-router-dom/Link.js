import React,{ Component } from 'react';
import propTypes from 'prop-types';

export default class Link extends Component{
	static contextTypes = {
		history:propTypes.object
	}
	constructor(props){
		super(props);
	}
	render(){
		return(
			<a onClick={()=>this.context.history.push(this.props.to)} href="jacascript:void(0)">{this.props.children}</a>
		)
	}
}