import React, { Component } from 'react';
import NavComponent from './NavComponent';

class LayoutComponent extends Component {
	render(){
		return (
			<div className="container" style={{marginBottom: '100px'}}>
				<NavComponent />
		  	{this.props.children}
		  </div>
		);
	}
}

export default LayoutComponent;