import React from 'react';
import styled from 'styled-components';

const StyledDetails = styled.div`
	.book {
		 
	}
	.reviews {

	}
`;


const Book = (props) => {
	//const { history, location, match } = props;

	return (
		<StyledDetails>
			<div className="container book">
				<h1>Book Title</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit excepturi odio molestiae soluta animi sit alias nobis quas error vel? Iste suscipit perspiciatis tempora accusamus, porro nihil! Exercitationem, atque maxime.</p>
			</div>
			<div className="container reviews">
				<h2 className="nopad">Reviews</h2>
				<div className="review">
					
				</div>
			</div>
		</StyledDetails>
	)
};

export default Book;
