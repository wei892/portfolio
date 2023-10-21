import { Card, Col, Container, Nav, Row, Button } from "react-bootstrap"


const Exp = () =>{

    return (
        <Container xl={10}>
            <Row>
                <Col> <h3> Work Experiences </h3> </Col>
            </Row>
            <Row>
                <Col>
                figure out how to put each experience within the tabs

                    <Nav fill variant="tabs" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/home">Active</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Link</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="disabled" disabled>
                            Disabled
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>


                    <Card>
                        <Card.Body>
                            <Card.Title> Job 1</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title> Job 1</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title> Job 1</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </Container>
      );

}

export default Exp 