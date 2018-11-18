import React from "react";
import { Route ,Link } from './react-router-dom';
export default function({to,children}){
  return (
  	<Route path={to} children={(props)=>{
  		return(
  			<li key={to} className={props.match?"active":""}>
  				<Link to={to}>{children}</Link>
  			</li>
  		)
  	}}/>
  )
}

























