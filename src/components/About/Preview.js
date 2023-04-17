import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const Preview = ({ imgSrc, altText, title, description, link }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgSrc} alt={altText} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Link to={link}>
          <Button variant="primary" className='pinkButton'>Read More</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Preview;