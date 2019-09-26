// import React from 'react';
import { deleteData } from '../actions';

import React, { Component } from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';

// import axios from 'axios';



export default class DeleteBookModal extends Component {
  constructor(props, id){
    super(props);
    this.state = { modalOpen: false };
     console.log(props, "props");
  };
 

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  // deleteBook = e => {
  //   e.preventDefault();
  //   axios
  //   .delete(`https://oer-bookr.herokuapp.com/api/books/${this.props.id}`)
  //   .then(response => {
  //       console.log(response)
  //       this.props.history.push('/books');
  //   })
  // };
  render() {
    return (
      <Modal
        trigger={<button onClick={this.handleOpen}>Delete</button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size="small"
      >
        <Header icon="browser" content="Confirm to Delete " />
        <Modal.Content>
          <h4>Are you sure you want to delete this book?</h4>
        </Modal.Content>
        <Modal.Actions>
          <Button  color="red" onClick={this.handleClose} inverted>
            <Icon name="remove" /> No
          </Button>
          <Button onClick={(e) => this.deleteBook(e)} color="green" inverted>
            <Icon name="checkmark" /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}


