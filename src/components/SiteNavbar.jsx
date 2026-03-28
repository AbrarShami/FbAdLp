import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SiteNavbar() {
  return (
    <Navbar expand="lg" className="site-navbar py-3" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-uppercase tracking-wide">
          GrowthPilot Ads
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="nav-main" />
        <Navbar.Collapse id="nav-main">
          <Nav className="ms-auto align-items-lg-center gap-lg-3">
            <Nav.Link href="#results">Results</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#process">Process</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
            <Button as={Link} to="/apply" className="ms-lg-2 apply-btn">
              Apply to Work With Us
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SiteNavbar;
