import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Conclusion: React.FC = () => {
  return (
    <Container id="conclusion">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="report-card">
            <Card.Header className="report-card-header">
              <h2 className="section-title">Conclusion</h2>
            </Card.Header>
            <Card.Body className="report-card-body">
              <p>
                The historical data strongly supports the premise that 10% market corrections typically precede
                rebounds of approximately 3%, 10%, and 16% over 3, 6, and 12-month periods respectively.
                Current market conditions, while facing headwinds from global uncertainty, demonstrate
                resilience in India's core economic fundamentals.
              </p>
              <p>
                Technical indicators suggest markets may be approaching oversold conditions, creating
                potential entry points for investors with appropriate risk tolerance. The current correction
                presents an investment opportunity, particularly if it is technically driven rather than reflecting
                deterioration in underlying economic or corporate fundamentals.
              </p>
              <p>
                We recommend a calibrated approach based on investor risk profiles, with strategic sector
                allocations focused on high-quality companies that can withstand potential volatility. Regular
                portfolio reviews and adherence to risk management parameters will be crucial to navigate
                potential volatility.
              </p>
              <p>
                This investment recommendation is based on historical patterns and current market assessment
                as of March 2025. Individual investment decisions should be made in consultation with a
                qualified financial advisor considering personal financial goals and risk tolerance.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Conclusion;