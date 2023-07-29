import { Button, Col, Container, Row } from "react-bootstrap"

const Contacts = () => {

    return(
        <Container>
            <Row>
                <Col>
                    <h4> Contacts  </h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button>
                        Linked In
                    </Button>
                    <Button>
                        Email
                    </Button>

                </Col>
            </Row>
        </Container>
    )
}

export default Contacts