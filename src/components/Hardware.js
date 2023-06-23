import { Card, Container,Row, Col } from "react-bootstrap";
import i7Img from "../assets/img/hardware/i7 13 gen.jpg";
import i9Img from "../assets/img/hardware/i9 13 gen.jpg";
import rtx3090Img from "../assets/img/hardware/rtx 3090.jpg";
import rtx4090Img from "../assets/img/hardware/rtx 4090.jpg";
import ryzen7Img from "../assets/img/hardware/ryzen 7.jpg";
import ryzen9Img from "../assets/img/hardware/ryzen 9.jpg";

const Hardware = () => {
  return (
    <div>
      <Container id="hardware">
        <br />
        <h1 className="text-white text-center title">LIST HARDWARE</h1>
        <br />
        <Row>
          <Col>
            <Card className="bg-dark text-white mb-3" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={i7Img} alt="Intel Core i7 13th Generation" className="images"/>
              <Card.Body>
                <Card.Title>Intel Core i7 13th Generation</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bg-dark text-white mb-3" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={i9Img} alt="Intel Core i9 13th Generation" className="images"/>
              <Card.Body>
                <Card.Title>Intel Core i9 13th Generation</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bg-dark text-white mb-3" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={rtx3090Img} alt="ASUS ROG RTX 3090" className="images"/>
              <Card.Body>
                <Card.Title>ASUS ROG STRIX GAMING RTX 3090</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bg-dark text-white mb-3" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={rtx4090Img} alt="ASUS ROG RTX 4090" className="images"/>
              <Card.Body>
                <Card.Title>ASUS ROG RTX 4090</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bg-dark text-white mb-3" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={ryzen7Img} alt="AMD RYZEN 7" className="images"/>
              <Card.Body>
                <Card.Title>AMD RYZEN 7</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bg-dark text-white mb-3" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={ryzen9Img} alt="AMD RYZEN 9" className="images"/>
              <Card.Body>
                <Card.Title>AMD RYZEN 9</Card.Title>
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

export default Hardware;
