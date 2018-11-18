import React,{ Component } from 'react';
import propTypes from 'prop-types';
import pathToRegexp from 'path-to-regexp';

/**
 * 匹配到一个规则就渲染该组件 避免不必要的render
 */
export default class Switch extends Component{
	static contextTypes = {
		location:propTypes.object
	}
	constructor(props){
		super(props);
	}
	render(){
		const { children } = this.props;
		const { pathname } = this.context.location;
		for(let child=0;child<children.length;child++){
			const { path } = children[child].props;
			if(pathToRegexp(path,[],{end:false}).test(pathname)){
				return children[child];
			}
			
		}
		return null;
	}
}