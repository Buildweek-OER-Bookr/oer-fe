import React from 'react'
import { Link } from 'react-router-dom';

import { Card, Icon, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
// import BookList from "./BookList";


const BookCard = () => (
  <Card>
    <Image src='http://via.placeholder.com/300' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Title: </Card.Header>
      <Card.Meta>
        <span className='author'>Author: </span>
      </Card.Meta>
      <Card.Description>
      Description: 
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Link>
        see more details
      </Link>
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

