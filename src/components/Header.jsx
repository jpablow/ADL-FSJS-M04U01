import Badge from 'react-bootstrap/Badge';

const CompHeader = (props) => {
    return (
        <h1 className="text-center --bg-primary" >
            <Badge pill bg='warning'>{props.title}</Badge>
        </h1>
    );
}

export default CompHeader;