import React from 'react';
import './ImageList.css'; 
import ImageCard from './ImageCard.js';

const ImageList = (props) => {
const images =	props.images.map((image) => {
	return	(
		  <ImageCard  image={image} /> 
	    )
	})

	console.log(props.images)
	return (
		<div className='image-list'>
			{images}
		</div>
	)
}

export default ImageList;