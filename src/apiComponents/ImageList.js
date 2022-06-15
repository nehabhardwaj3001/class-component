import React from 'react';

const ImageList = (props) => {
const images =	props.images.map((image) => {
	return	<div>
		  <img key={image.id} src={image.urls.regular} alt={image.description} /> 
		 </div>
	})

	console.log(props.images)
	return (
		<div>
			{images}
		</div>
	)
}

export default ImageList;