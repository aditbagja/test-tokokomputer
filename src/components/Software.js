import { Card, Container,Row, Col } from "react-bootstrap";
import adobeImg from "../assets/img/software/adobe.png";
import driverpackImg from "../assets/img/software/driverpack.png";
import msofficeImg from "../assets/img/software/ms office.jpeg";
import win10Img from "../assets/img/software/win 10.jpg";
import win11Img from "../assets/img/software/win 11.jpg";
import win8Img from "../assets/img/software/win 8.1.jpg";

const Software = () => {
  return (
    <div>
      <Container id="software">
        <br />
        <h1 className="text-white text-center title">LIST SOFTWARE</h1>
        <br />
        <Row>
          <Col className="softwareWrapper">
            <Card className="bg-dark text-white mb-3" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={adobeImg} alt="Adobe Collection" className="images"/>
              <Card.Body>
                <Card.Title>Adobe Master Collection</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="softwareWrapper">
            <Card className="bg-dark text-white mb-3" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={driverpackImg} alt="Driverpack Solution" className="images"/>
              <Card.Body>
                <Card.Title>DriverPack Solution</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="softwareWrapper">
            <Card className="bg-dark text-white mb-3" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={msofficeImg} alt="Microsoft Office 2021" className="images"/>
              <Card.Body>
                <Card.Title>Microsoft Office 2021</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="softwareWrapper">
            <Card className="bg-dark text-white mb-3" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={win10Img} alt="Windows 10" className="images"/>
              <Card.Body>
                <Card.Title>Windows 10</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="softwareWrapper">
            <Card className="bg-dark text-white mb-3" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={win11Img} alt="Windows 11" className="images"/>
              <Card.Body>
                <Card.Title>Windows 11</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="softwareWrapper">
            <Card className="bg-dark text-white mb-3" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={win8Img} alt="Windows 8.1" className="images"/>
              <Card.Body>
                <Card.Title>Windows 8.1</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Software;
