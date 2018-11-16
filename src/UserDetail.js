import React from 'react';

export default class UserList extends React.Component{
	render(){
		return(
			<ul className="list-group">
				{this.props.match.params.id}
			</ul>
		)
	}
}