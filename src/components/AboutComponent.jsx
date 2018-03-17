import React, { Component } from 'react';
import Instagram from 'react-icons/lib/fa/instagram';

const styles = {
	height: '400px',
	objectFit: 'cover'
};

const socialStyles = {
	float: 'right',
	marginTop: '50px'
};

class HomeComponent extends Component {
	render(){
		return (
			<div className="row">
				<div className="col-md-5" style={{marginBottom: '20px'}}>
					<img src="/images/about.jpg" alt="" className="img-fluid" style={styles} />
				</div>
				<div className="col">
					<h4>about</h4>
					<p>Devonte is an actor/writer/filmmaker from Toronto, and is currently based in London.</p>
					<p>He produces music videos, short documentaries, and promotional materials. He's currently working on a spoken word project that involves creating visual for Los Angeles based spoken word poets.</p>
					<p>Let's work together! Hit me up for projects.</p>
					<div style={socialStyles}>
						<a href="https://instagram.com/dmacg23"><Instagram className="grey-hov" size={40} /></a>
					</div>
				</div>
			</div>);
	}
}

export default HomeComponent;