import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container"
import { Row, Col } from "react-bootstrap"

const Features = ({ data }) => {
    return (
        <Container className='d-flex mt-4'>
            <Row>
                {
                    data.map((product, index) => (
                        <Col sm={6} md={3} key={product._id} className='mb-4' >
                            <Card style={{ width: '14rem' }}>
                                <Card.Img variant="top" src={product.img} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>
                                        {product.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Features