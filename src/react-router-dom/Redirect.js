import React,{ Component } from 'react';
import propTypes from 'prop-types';

/**
 * 路由重定向
*/
export default class Redirect extends Component{
	static contextTypes = {
		history:propTypes.object
	}
	componentDidMount(){
		this.context.history.push(this.props.to);
	}
	render(){
		return null;
	}
}