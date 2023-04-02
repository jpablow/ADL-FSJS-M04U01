import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CompCard = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.url} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
                <Button variant="info">+ Info</Button>
            </Card.Body>
        </Card>
    );
}

export default CompCard;