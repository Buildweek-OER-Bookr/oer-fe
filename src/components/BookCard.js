import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
// import BookList from "./BookList";


const BookCard = () => (
  <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{book.title}</Card.Header>
      <Card.Meta>
        <span className='author'>J{book.author}</span>
      </Card.Meta>
      <Card.Description>
      {book.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='see more' />
        more details
      </a>
    </Card.Content>
  </Card>
)

export default BookCard


// import React from 'react';

// const BooCard = props => {
//   const { title, author, description } = props.book;
//   return (
//     <div className="book-card">
//        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
//       <h2>{title}</h2>
//       <div className="author">
//         Author: <em>{author}</em>
//       </div>
//       <div className="description">
//         Description: <strong>{description}</strong>
//       </div>
//      
//       ))}
//     </div>
//   );
// };

// export default BookCard;

