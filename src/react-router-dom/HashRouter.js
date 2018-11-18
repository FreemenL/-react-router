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
			location:{state:{},pathname:window.location.hash.slice(1)||'/'}
		}
	}
	getChildContext(){
		let that = this;
		return{
			location:this.state.location,
			history:{
				push(path){
					if(typeof path=="object"){
						let { pathname,state } = path;
						that.setState({location:{...that.state.location,state}},()=>{
							window.location.hash = pathname;
						})
					}else{
						window.location.hash = path;
					}
					
				}
			}
		}
	}
	componentDidMount(){
		window.location.hash = window.location.hash||'/'
		const render = ()=>{
			this.setState({location:{...this.state.location,pathname:window.location.hash.slice(1)||'/'}});
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
