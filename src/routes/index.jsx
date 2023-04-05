import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

import portrait from '../assets/asternie_portrait.jpg'; // Tell webpack this JS file uses this image

export default function Index() {
    return (
      <Container id="index">
        <Row>
          <Col xs={11} md={5} lg={3} class="portraitcontainer">
            <Image 
              roundedCircle 
              src={portrait} 
              alt="Portrait of Aster Nie."
              className="myportrait"
              fluid
              >
            </Image>
          </Col>
          <Col xs lg="auto">
            <div className="mydescription">
              <h1>ASTER NIE</h1>
              <h3>Programmer, Web Developer, & Artist</h3>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }