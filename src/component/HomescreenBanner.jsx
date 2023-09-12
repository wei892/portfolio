import { useEffect, useState } from "react";
import { Container, Row, Col, Button} from "react-bootstrap";

import "./styling/HomescreenBanner.css"

const HomepageBanner = () => {
    const [text, setText] = useState('');
    const myName = "Hi, I'm Mimi";
    const period = 250;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, period)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let fullText = myName;
        let updatedText = fullText.substring(0, text.length + 1)
        setText(updatedText);
    }

    return (
        <Container >
            <Row className="banner">
                <Col sm={12} md={4} xl={4}> 
                    <h1>
                        {text}
                    </h1>
                    {/* <h2>
                    《李薇玲》
                    </h2> */}
                    <p>
                        I'm a student at Hunter College - 
                        CUNY majoring in Computer Science (BA) with a minor in Mathematics.
                    </p>

                    {/* social links here */}
                </Col>
                <Col sm={12} md ={8} xl={8}>

                </Col>
            </Row>
        </Container>
    )
}

export default HomepageBanner