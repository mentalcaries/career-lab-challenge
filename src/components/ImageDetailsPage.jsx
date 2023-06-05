import React from 'react';

// the name of the piece
// the artist who created the piece
// the image associated with the piece (don't forget its alt text!)
// a back button that returns the user to the list of results

function ImageDetailsPage({ selectedImage, setSelectedImage }) {
	const { title, artist_title, thumbnail } = selectedImage;
	return (
		<>
			<button onClick={() => setSelectedImage('')}>Back</button>
			<h2>{title}</h2>
		</>
	);
}

export default ImageDetailsPage;
