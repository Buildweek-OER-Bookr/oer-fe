import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addReview, deleteReview, getData } from "../actions"

const StyledModal = styled.div`
	position: fixed;
	z-index: 11;
	top: 80px;
	left: 0;
	width: 100%;
	height: calc(100vh - 80px);
	background-color: rgba(0,0,0,.5);
	opacity: 0;
	visibility: hidden;
	transition: all .33s ease-in-out;
	&.show {
		opacity: 1;
		visibility: visible;
	}
	.popup-content {
		width: 90%;
		padding: 60px 25px 25px;
		background-color: #fff;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	textarea {
		margin-top: 15px;
	}
	.delete-btn {
		top: 0;
		right: 0;
		bottom: auto;
		&:hover {
			color: ${props => props.theme.white};
			background-color: ${props => props.theme.darkblue};
		}
	}
	.deleting {
		margin-bottom: 15px;
	}
	@media screen and (min-width: 720px) {
		.popup-content {
			width: 600px;
			padding: 75px 75px 60px;
		}
	}
	@media screen and (min-width: 1024px) {
		top: 0;
		left: 250px;
		width: calc(100% - 250px);
		height: 100%;
	}
`;


const Modal = (props) => {
	const { visible, onClose, onSubmit, type, data, dispatch } = props;

	return (
		<StyledModal className={`popup_${type} ${Number(visible) !== 0 ? 'show' : ''}`}>
			<div className="popup-content">
				<div className="delete-btn" onClick={onClose}>
					<i className="icon-cancel"></i>

				</div>
				{
					type === 'reviewForm' ? <>
						<h4>Reviewing {data.title}</h4>
						<form onSubmit={onSubmit}>
							<textarea
								id="review"
								name="review"
							/>
							<button type="submit">Submit</button>
						</form>
					</> : (type === 'deleteReview' ? <>
						<h4 className="deleting">Are you sure you want to delete this review?</h4>
						<form onSubmit={onSubmit}>
							<button type="submit">Yes</button>
							<button onClick={onClose}>Cancel</button>
						</form>
					</> : (type === 'deleteBook' ? <>
						<h4 className="deleting">Are you sure you want to delete this book?</h4>
						<form>
							<button type="submit">Yes</button>
							<button onClick={onClose}>Cancel</button>
						</form>
					</> : null))
				}
			</div>
		</StyledModal>
	)
};

const mapStateToProps = state => ({ ...state })
export default connect(mapStateToProps)(Modal);
