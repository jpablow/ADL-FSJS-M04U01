import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CompCard = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.imgUrl} />
            <Card.Body className='bg-secondary' >
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
                <a href={props.webUrl}><Button variant="info">+ Info</Button></a>
            </Card.Body>
        </Card>
    );
}

export default CompCard;