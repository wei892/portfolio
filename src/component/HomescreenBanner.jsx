import { useEffect, useState } from "react";
import { Container, Row, Col, Button} from "react-bootstrap";

import './cssFiles/homesceen.css'

const HomepageBanner = () => {

    // creating a state for text typing
    const [loop, setLoop] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const myName = "Mimi Li";
    const period = 300;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, period)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let fullText = myName;
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
        }
        else if (isDeleting && updatedText === 'M'){
            setIsDeleting(false);
        }
    }

    return (
        <Container className="homepageBanner">
            <Row>
                <Col sm={12} md={5} xl={5}> 
                    <div className="bioCont">
                        <h1>
                            Hi! I'm {text}
                        </h1>
                        <p>
                            I'm a student at Hunter College - 
                            CUNY majoring in Computer Science (BA) with a minor in Mathematics
                        </p>
                        <div className="linkContainer">
                            <div> About Me </div>

                            <div> Linked In </div>
                            <div> Github </div>
                            
                        </div>
                    </div>
                </Col>
                <Col sm={12} md ={7} xl={7}>
                    <div className="bioCont heartCont">

                        <div className="heart">

                        </div>

                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default HomepageBanner