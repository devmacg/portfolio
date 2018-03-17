import React from 'react';
import Instagram from 'react-icons/lib/fa/instagram';
import Vimeo from 'react-icons/lib/fa/vimeo';

export default (props) => {
	return (
		<nav className="navbar navbar-expand-md navbar-light bg-faded">
			<div class="p-r">
		  	<a className="navbar-brand header" href="/">DEVONTE MAC</a>
		  	<p class="subtext">actor/writer/filmmaker</p>
		  </div>
		  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>

		  <div className="collapse navbar-collapse" id="navbarSupportedContent">
		    <ul className="navbar-nav mr-auto">
		      <li className="nav-item">
		        <a className="nav-link" href="/">stills <span className="sr-only">(current)</span></a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link" href="/video">video</a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link" href="/about">about</a>
		      </li>
		    </ul>
		    <div className="my-2 my-lg-0">
		    	<a className="grey-hov va-b ico" target="_blank" href="https://vimeo.com/dmacg"><Vimeo /></a>
		      <a className="grey-hov va-b ico" target="_blank" href="https://instagram.com/dmacg23"><Instagram /></a>
		    </div>
		  </div>
		</nav>
	);
};