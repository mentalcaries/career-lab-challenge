import React from 'react';
import './ImageDetailsPage.css';

function ImageDetailsPage({ selectedImage, setSelectedImage }) {
	const { title, artist_title, thumbnail, image_id } = selectedImage;
	return (
		<>
			<button className="details__button" onClick={() => setSelectedImage('')}>
				Back
			</button>
			<h2>{title}</h2>
			<p>Artist: {artist_title ?? 'Unknown'}</p>
			<img
				alt={thumbnail.alt_text}
				className="details__image"
				src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}
			/>
		</>
	);
}

export default ImageDetailsPage;
