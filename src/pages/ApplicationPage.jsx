import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const staticFormsAccessKey = 'REPLACE_WITH_YOUR_STATICFORMS_ACCESS_KEY';

function ApplicationPage() {
  return (
    <div className="application-page py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={9} xl={8}>
            <div className="mb-4 d-flex justify-content-between align-items-center flex-wrap gap-3">
              <Link to="/" className="text-decoration-none fw-semibold">
                ← Back to Home
              </Link>
              <h1 className="h3 fw-bold mb-0">Client Application Form</h1>
            </div>

            <Alert variant="info" className="mb-4">
              Replace <strong>REPLACE_WITH_YOUR_STATICFORMS_ACCESS_KEY</strong> with your StaticForms access key.
              All form answers (including qualifying questions) will be emailed directly through your StaticForms setup.
            </Alert>

            <Form
              action="https://api.staticforms.xyz/submit"
              method="post"
              className="application-form p-4 p-lg-5 shadow-sm"
            >
              <input type="hidden" name="accessKey" value={staticFormsAccessKey} />
              <input type="hidden" name="subject" value="New Facebook Ads Management Application" />
              <input type="hidden" name="replyTo" value="@" />
              <input type="hidden" name="redirectTo" value="http://localhost:5173/apply?submitted=true" />
              <input type="text" name="honeypot" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

              <Row className="g-4">
                <Col md={6}>
                  <Form.Group controlId="fullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name="full_name" required placeholder="Jane Smith" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="email">
                    <Form.Label>Business Email</Form.Label>
                    <Form.Control type="email" name="email" required placeholder="jane@company.com" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="company">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control type="text" name="company_name" required placeholder="Your Company" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="website">
                    <Form.Label>Website or Landing Page</Form.Label>
                    <Form.Control type="url" name="website" required placeholder="https://" />
                  </Form.Group>
                </Col>

                <Col xs={12}>
                  <hr className="my-1" />
                  <h2 className="h5 fw-bold mt-3">Qualification Questions</h2>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="monthlyBudget">
                    <Form.Label>Current or planned monthly ad spend</Form.Label>
                    <Form.Select name="monthly_ad_spend" required>
                      <option value="">Choose one</option>
                      <option value="under_2000">Under $2,000</option>
                      <option value="2000_5000">$2,000 - $5,000</option>
                      <option value="5000_15000">$5,000 - $15,000</option>
                      <option value="15000_plus">$15,000+</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="offerValidated">
                    <Form.Label>Do you have a proven offer with recent sales?</Form.Label>
                    <Form.Select name="proven_offer" required>
                      <option value="">Choose one</option>
                      <option value="yes_consistent_sales">Yes, consistent sales</option>
                      <option value="some_sales_need_scale">Some sales, need scale</option>
                      <option value="no_pre_launch">No, still pre-launch</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="decisionMaker">
                    <Form.Label>Are you the final decision-maker?</Form.Label>
                    <Form.Select name="decision_maker" required>
                      <option value="">Choose one</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                      <option value="shared_decision">Shared decision</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="timeline">
                    <Form.Label>How soon are you looking to start?</Form.Label>
                    <Form.Select name="start_timeline" required>
                      <option value="">Choose one</option>
                      <option value="asap">Immediately</option>
                      <option value="within_30_days">Within 30 days</option>
                      <option value="30_90_days">30-90 days</option>
                      <option value="just_researching">Just researching</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col xs={12}>
                  <Form.Group controlId="revenue">
                    <Form.Label>Current monthly revenue (or best estimate)</Form.Label>
                    <Form.Control
                      type="text"
                      name="monthly_revenue"
                      required
                      placeholder="Example: $50,000"
                    />
                  </Form.Group>
                </Col>

                <Col xs={12}>
                  <Form.Group controlId="goal">
                    <Form.Label>Main growth goal in the next 90 days</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="ninety_day_goal"
                      required
                      placeholder="Tell us what success looks like."
                    />
                  </Form.Group>
                </Col>

                <Col xs={12}>
                  <Form.Group controlId="challenges">
                    <Form.Label>Biggest challenge with Facebook ads right now</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="biggest_challenge"
                      required
                      placeholder="Share where you are stuck so we can evaluate fit."
                    />
                  </Form.Group>
                </Col>

                <Col xs={12}>
                  <Button type="submit" size="lg" className="apply-btn w-100">
                    Submit Application
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ApplicationPage;
