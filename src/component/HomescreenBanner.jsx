import { useEffect, useState } from "react";
import { Container, Row, Col, Button} from "react-bootstrap";

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
        <Container >
            <Row>
                <Col sm={12} md={4} xl={4}> 
                    <h1>
                        Hi! <br/> My name is: {text}
                    </h1>
                    {/* <h2>
                    《李薇玲》
                    </h2> */}
                    <p>
                        I'm a student at Hunter College - 
                        CUNY majoring in Computer Science (BA) with a minor in Mathematics
                    </p>
                    <Button>
                        Learn More
                    </Button>
                </Col>
                <Col sm={12} md ={8} xl={8}>
                    IMG placeholder 
                    {/* this will be for the image */}
                </Col>
            </Row>
        </Container>
    )
}

export default HomepageBanner