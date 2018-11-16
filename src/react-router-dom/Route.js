import React,{Component} from 'react';
import propTypes from 'prop-types';
import pathToRegexp from 'path-to-regexp';

/**
 * 1，拿到当前浏览器hash值与props中的path比较。相等的话就渲染props中的component组件
 * 2，把location history match 属性传给子组件
 */
class Route extends Component{
	static contextTypes = {
		location:propTypes.object,
		history:propTypes.object,
	}
	constructor(props){
		super(props);
		const { path } = this.props;
		this.keys = []
		this.reg = pathToRegexp(path,this.keys,{end:false}) 
	}
    render(){
    	const { path, component:Component } = this.props;
    	const {location:{pathname},history} = this.context;
    	const result = pathname.match(this.reg);
    	const props={
    		location:this.context.location,
    		history
    	}
    	if(result){
    		let keys = this.keys.map(key=>key.name);
    		let [url,...value] = result;
    		props.match={
    			path,//Route 组件中配置的path属性
    			url,//当前路径
    			params:keys.reduce((memo,key,idx)=>{
    				memo[key]=value[idx];
    				return memo;
    			},{})
    		}
    		return (<Component {...props}/>)
    	}
    	return null;
    }
}

export default Route;

























