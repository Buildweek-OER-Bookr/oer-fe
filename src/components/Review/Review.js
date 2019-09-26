import React from "react";


export const Review= props => {
  return (
    <div className="review-item">
					<div className="review-header">
						<h4>{props.review.reviewer_id}</h4>
						<p>Rating: {props.review.stars}</p>
					</div>
					<p>{props.review.review}</p>

			</div>
  );
};
