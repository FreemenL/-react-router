import React,{Component} from 'react';
import propTypes from 'prop-types';

/**
 * 1 获取浏览器的当前路径的hash值通过context传给子组件
 * 2 监听hashchange 事件重新渲染
 */
class HashRouter extends Component{
	static childContextTypes = {
		location:propTypes.object,
		history:propTypes.object
	}
	constructor(props){
		super(props);
		this.state={
			location:{pathname:window.location.hash.slice(1)||'/'}
		}
	}
	getChildContext(){
		return{
			location:this.state.location,
			history:{
				push(path){
					window.location.hash = path;
				}
			}
		}
	}
	componentDidMount(){
		window.location.hash = window.location.hash||'/'
		const render = ()=>{
			this.setState({location:{pathname:window.location.hash.slice(1)||'/'}});
		}
		window.addEventListener("hashchange",render)
	}
    render(){
    	return(
    		this.props.children
    	)
    }

}

export default HashRouter;
