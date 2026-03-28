import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SiteNavbar from '../components/SiteNavbar';

const proofPoints = [
  { metric: '4.2x', label: 'Avg. return on ad spend' },
  { metric: '37%', label: 'Lower cost per qualified lead' },
  { metric: '$2.8M+', label: 'Client ad revenue managed monthly' }
];

const serviceCards = [
  {
    title: 'Strategy & Positioning',
    description:
      'Audience mapping, offer refinement, and messaging architecture designed around your unique buying journey.'
  },
  {
    title: 'Creative + Campaign Builds',
    description:
      'High-converting creative briefs, ad copy, and account structures built to scale without wasted spend.'
  },
  {
    title: 'Weekly Optimization',
    description:
      'Hands-on bid, budget, and funnel optimization with transparent reporting tied directly to pipeline and sales.'
  }
];

const processSteps = [
  'Deep-dive discovery into your offer, margins, and customer data.',
  'Launch strategy with full-funnel campaign architecture and tracking QA.',
  'Weekly performance sprints focused on qualified opportunities, not vanity metrics.'
];

function LandingPage() {
  return (
    <div className="landing-page">
      <SiteNavbar />
      <header className="hero-section py-5 py-lg-6">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={7}>
              <p className="eyebrow">Facebook Ad Management for Serious Growth Teams</p>
              <h1 className="display-4 fw-bold mb-4">
                Scale predictable, profitable Facebook ads without burning budget on guesswork.
              </h1>
              <p className="lead mb-4">
                We build and manage performance-driven Facebook ad systems for brands that need qualified leads,
                booked calls, and measurable revenue growth.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Button as={Link} to="/apply" size="lg" className="apply-btn">
                  Apply to Hire Us
                </Button>
                <Button variant="outline-light" size="lg" href="#services">
                  Explore Services
                </Button>
              </div>
            </Col>
            <Col lg={5}>
              <Card className="hero-card shadow-lg border-0">
                <Card.Body className="p-4 p-lg-5">
                  <h2 className="h4 fw-bold mb-3">What You Get</h2>
                  <ul className="list-unstyled mb-0 d-grid gap-3">
                    <li>✅ Dedicated media buyer + strategist</li>
                    <li>✅ Conversion-focused ad creative direction</li>
                    <li>✅ Weekly optimization + transparent reporting</li>
                    <li>✅ Fast communication through your preferred channel</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </header>

      <section id="results" className="proof-section py-5">
        <Container>
          <Row className="g-4 text-center">
            {proofPoints.map((point) => (
              <Col md={4} key={point.label}>
                <Card className="proof-card border-0 h-100">
                  <Card.Body>
                    <p className="metric mb-2">{point.metric}</p>
                    <p className="mb-0 text-secondary">{point.label}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section id="services" className="services-section py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold">Built to fit your goals, margin, and market</h2>
            <p className="text-secondary mb-0">
              Not a cookie-cutter setup. Every strategy is customized around your growth stage and economics.
            </p>
          </div>
          <Row className="g-4">
            {serviceCards.map((service) => (
              <Col lg={4} key={service.title}>
                <Card className="service-card h-100 border-0 shadow-sm">
                  <Card.Body className="p-4">
                    <h3 className="h5 fw-bold mb-3">{service.title}</h3>
                    <p className="text-secondary mb-0">{service.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section id="process" className="process-section py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={9}>
              <Card className="border-0 shadow-sm process-card">
                <Card.Body className="p-4 p-lg-5">
                  <h2 className="fw-bold mb-4">Our 3-step client growth system</h2>
                  <ol className="mb-0 d-grid gap-3">
                    {processSteps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="faq" className="faq-section py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={9}>
              <h2 className="fw-bold text-center mb-4">Frequently asked questions</h2>
              <div className="d-grid gap-3">
                <Card className="border-0 shadow-sm">
                  <Card.Body>
                    <h3 className="h6 fw-bold">Who is this for?</h3>
                    <p className="mb-0 text-secondary">
                      We partner with service businesses and brands already generating sales and ready to scale with paid social.
                    </p>
                  </Card.Body>
                </Card>
                <Card className="border-0 shadow-sm">
                  <Card.Body>
                    <h3 className="h6 fw-bold">Do you work month-to-month?</h3>
                    <p className="mb-0 text-secondary">
                      We begin with a 90-day growth sprint so we can build, optimize, and validate reliable performance.
                    </p>
                  </Card.Body>
                </Card>
                <Card className="border-0 shadow-sm">
                  <Card.Body>
                    <h3 className="h6 fw-bold">How do we get started?</h3>
                    <p className="mb-0 text-secondary">
                      Submit the short application below. If there is a fit, we will reach out with next steps.
                    </p>
                  </Card.Body>
                </Card>
              </div>
              <div className="text-center mt-4">
                <Button as={Link} to="/apply" size="lg" className="apply-btn">
                  Start Your Application
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default LandingPage;
