import React, { Component } from 'react';

class VideoComponent extends Component {

	render(){
		return (
			<div className="row">
				<div className="col-md-10 offset-md-1">
					<div class="embed-responsive embed-responsive-16by9">
					  <iframe src="https://player.vimeo.com/video/251583930" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
					</div>
				</div>
			</div>
		);
	}
}

export default VideoComponent;