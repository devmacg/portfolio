import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';

const styles = {
  display: "block",
  minHeight: "1px",
  width: "100%",
  enableLightbox: true,
  overflow: "auto"
}; 

class HomeComponent extends Component {
	constructor(props){
      super(props);

      this.state = {
          images: this.props.images
      };

  }

	render(){
		return (
			<div className="row">
				  <div style={styles}>
            <Gallery
	            images={this.state.images}
	            enableLightbox={true}
	            rowHeight={400}
	            enableImageSelection={false}/>
        </div>
			</div>
		);
	}
}

HomeComponent.defaultProps = {
    images: [
        {
            src: "/images/1.jpg",
            thumbnail: "/images/1.jpg",
            thumbnailWidth: 1024,
            thumbnailHeight: 819,
        },
        {
            src: "/images/2.jpg",
            thumbnail: "/images/2.jpg",
            thumbnailWidth: 1024,
            thumbnailHeight: 683,
        },
        {
            src: "/images/3.jpg",
            thumbnail: "/images/3.jpg",
            thumbnailWidth: 1024,
            thumbnailHeight: 683,
        },
        {
            src: "/images/8.jpg",
            thumbnail: "/images/8.jpg",
            thumbnailWidth: 683,
            thumbnailHeight: 1024,
        },
        {
            src: "/images/6.jpg",
            thumbnail: "/images/6.jpg",
            thumbnailWidth: 1024,
            thumbnailHeight: 683,
        },
        {
            src: "/images/5.jpg",
            thumbnail: "/images/5.jpg",
            thumbnailWidth: 1024,
            thumbnailHeight: 683,
        }
    ]
};

export default HomeComponent;