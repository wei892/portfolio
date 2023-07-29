import { Col, Container, Row } from "react-bootstrap"


//import components
import Contacts from "./Contacts"


const AboutMe = () => {
    return (
        <Container>
            This section will be used to describe more about me and what I do 
            Include links to interests, hobbies and what I do outside of the education 
            <Row>
                <Col> <h3> About Me </h3> </Col>
            </Row>
            <Row>
                <Col xs={12} xl={7}>

                    Profile Image of Me
                </Col>
                <Col>
                    Hobbies
                </Col>
                <Col>
                    Favorite Things
                </Col>
            </Row>
            {/* <Row>
                <Contacts></Contacts>
            </Row> */}
        </Container>
    )
}

export default AboutMe