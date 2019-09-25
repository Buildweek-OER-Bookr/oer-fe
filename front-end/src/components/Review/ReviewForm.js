import React from 'react';
import { Button, Card, TextArea, Form, Rating } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const ReviewForm = {
  ratingInput: 0,
  reviewInput: "",
  inputInvalid: true
}

class ReviewForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      reviewer: props.reviewer_id,
      book: props.book_id,
    }
  }

  handleInput = (e) => {
    this.setState ({
      [e.target.name]: e.target.value
    }, () => this.validateInput());
  }

  handleRatingChange = (value, name) => {
    this.setState ({
      [name]: value
    })
  }

  validateInput = () => {
    this.setState({
      inputInvalid: false
    })
  }

  handlePostReview = (e) => {
    e.preventDefault();
    const reviewData = {
      review: this.state.reviewInput,
      rating: parseInt(this.state.ratingInput),
      reviewer: this.state.reviewer,
      books_id: this.state.bookID
    };
    try {
      console.log("post review: ", reviewData);
      this.state.reviewInput && this.props.postReview(reviewData);
    }
    catch(err) {
      console.log(err);
      return;
    }
    this.setState({
      ...ReviewForm
    });
  }

  render() {
    return (
      <Card style={{ padding: '20px' }}>
              <h5>Review: (book.id)</h5>

        <Form onSubmit={this.handlePostReview}>
          <Rating 
            icon ="star" 
            clearable
            rating={this.state.ratingInput}
            changeRating={this.handleRatingChange}
            defaultRating={0}
            maxRating={5}
            name="ratingInput"
            
          />
          <TextArea
            placeholder="Write a review..."
            name="reviewInput"
            value={this.state.reviewInput}
            onChange={this.handleInput}
            style={{ width: '100%' }}
          />
          <Button 
            type="submit" 
            value="Register"
          >
            Post Review!
          </Button>
        </Form>
      </Card>
    );
  }
}
    
export default ReviewForm;