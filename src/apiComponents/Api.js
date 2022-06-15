import React from 'react';
import Unsplash from './Unsplash.js';
import SearchBar from './SearchBar.js';
import ImageList from './ImageList.js';

class Api extends React.Component {
state = { images : []}

  onSearchSubmit = async(term) => {
		const response = await Unsplash.get('/search/photos' , {
			params: {query:term},
		});
		this.setState({ images : response.data.results});
	}

	render() {
		console.log("sf",this.state.images)
		return (
		<div className='ui container' style={{ marginTop : "10px", marginBottom : "10px" }}>
			<SearchBar onSubmit={this.onSearchSubmit}/>
			<ImageList images={this.state.images}/>
		</div>
		);
	}
}


export default Api;