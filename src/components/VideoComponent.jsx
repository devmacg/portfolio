import React, { Component } from 'react';

class VideoComponent extends Component {

	render(){
		return (
			<div className="row">
				<div className="col-md-10 offset-md-1">

					{ this.props.videos.map(video => (
							<div style={{marginBottom: "40px"}}>
								<div class="embed-responsive embed-responsive-16by9">
								  <iframe src={video.url} width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
								</div>
								<p>
									<b>{`"${video.title}"`}</b><br/>
									<span>{video.notes}</span>
								</p>
							</div>)
					)}

				</div>
			</div>
		);
	}
}

export default VideoComponent;

VideoComponent.defaultProps = {
	videos: [
		{
			title: "Man's Not Hot",
			url: "https://player.vimeo.com/video/251583930",
			notes: "directed/edited by devonte mac"
		},
		{
			title: "The Function of a Dream",
			url: "https://player.vimeo.com/video/253262732",
			notes: "directed/edited by devonte mac - poem by eden a."
		}
	]
};