import { Container, Nav, Navbar } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">TOKOKOMPUTER</Navbar.Brand>
          <Nav>
            <Nav.Link href="#software">SOFTWARE</Nav.Link>
            <Nav.Link href="#hardware">HARDWARE</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
