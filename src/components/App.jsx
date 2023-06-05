import { useState } from 'react';

import { searchArtworks } from '../api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';

import './App.css';
import Results from './SearchResults';
import ImageDetailsPage from './ImageDetailsPage';

export function App() {
	const [searchResults, setSearchResults] = useState([]);
	const [selectedImage, setSelectedImage] = useState('');

	function onSearchSubmit(query) {
		// Search for the users's query.
		// TODO: render the results, instead of logging them to the console.
		// NOTE: `searchArtworks` currently returns local data, so that we
		// don't make too many requests to the API! Once we've built out
		// our UI, we need to make real requests!
		// @see: ./src/api.js
		searchArtworks(query).then((result) => {
			setSearchResults(result.data);
		});
	}

	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			{!selectedImage ? (
				<>
					<SearchForm onSearchSubmit={onSearchSubmit} />
					<Results
						results={searchResults}
						setSelectedImage={setSelectedImage}
					/>
				</>
			) : (
				<ImageDetailsPage
					selectedImage={selectedImage}
					setSelectedImage={setSelectedImage}
				/>
			)}

			<Footer />
		</div>
	);
}
