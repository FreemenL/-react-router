import React,{Component} from 'react';
import propTypes from 'prop-types';
import pathToRegexp from 'path-to-regexp';

/**
 * 1，拿到当前浏览器hash值与props中的path比较。相等的话就渲染props中的component组件
 * 2，把location history match 属性传给子组件
 *
 * props 中的render children 属性用到了 render props 模式渲染子组件  
 * 
 */
class Route extends Component{
	static contextTypes = {
		location:propTypes.object,
		history:propTypes.object,
	}
	constructor(props){
		super(props);
	}
    render(){
    	const { path, component:Component ,render,children} = this.props;
		const keies = []
		const regExp = pathToRegexp(path,keies,{end:false}) 
       	const {location:{pathname},history} = this.context;
    	const result = pathname.match(regExp);
    	const props={
    		location:this.context.location,
    		history
    	}
    	if(result){
    		let keys = keies.map(key=>key.name);
    		let [url,...value] = result;
    		props.match={
    			path,//Route 组件中配置的path属性
    			url,//当前路径
    			params:keys.reduce((memo,key,idx)=>{
    				memo[key]=value[idx];
    				return memo;
    			},{})
    		}
    		if(render){ //路由权限空中用的render 只匹配一个结果
    			return render(props);
    		}
            if(children){
                return children(props);
            }
    		return (<Component {...props}/>)
    	}else{
            if(children){
                return children(props);
            }
            return null;
        }
    }
}

export default Route;

























