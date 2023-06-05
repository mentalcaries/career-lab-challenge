import React from 'react';
import './SearchResults.css';

function SearchResults({ results, setSelectedImage }) {
	return (
		<div>
			<h2>Search Results</h2>
			{results.length > 0 ? (
				<ol className="results__list">
					{results.map((result) => (
						<li key={result.image_id} className="results__list">
							<button
								className="results__list-button"
								onClick={() => setSelectedImage(result)}
							>
								{result.title}{' '}
								{result.artist_title && `- ${result.artist_title}`}
							</button>
						</li>
					))}
				</ol>
			) : (
				<p>No results found</p>
			)}
		</div>
	);
}

export default SearchResults;
