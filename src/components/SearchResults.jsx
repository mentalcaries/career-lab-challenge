import React from 'react';
import './SearchResults.css';

function SearchResults({ results, setSelectedImage }) {
	return (
		<div>
			<h2>Search Results</h2>
			<ul>
				{results.map((result) => (
					<li key={result.image_id}>
						<button onClick={() => setSelectedImage(result)}>
							{result.title}, {result.artist_title}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default SearchResults;
