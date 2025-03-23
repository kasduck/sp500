import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Visualizations from './Visualizations';

const ExecutiveSummary: React.FC = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={10}>
          <div className="page-header text-center mb-5">
            <h1>S&P 500 Returns After 10% Corrections</h1>
            <h2 className="text-secondary border-0 mb-0 pb-0">Investment Opportunity Analysis</h2>
          </div>
          
          <Card className="report-card">
            <Card.Header className="report-card-header">
              <Card.Title className="report-card-title">Executive Summary</Card.Title>
            </Card.Header>
            <Card.Body className="report-card-body">
              <p>
                This report analyzes market behavior following 10% corrections, with a focus on the S&P 500
                and implications for Indian equity markets. Historical data confirms that after 10% corrections,
                markets typically rebound by approximately <strong className="text-primary">+3% in 3 months</strong>, 
                <strong className="text-primary"> +10% in 6 months</strong>, and <strong className="text-primary">+16%
                in 12 months</strong>, creating potential investment opportunities. Our analysis indicates that current
                market conditions present a favorable entry point for equity investments, particularly if recent
                sell-offs have been technically driven rather than fundamentally justified.
              </p>
              <p>
                We recommend a calibrated investment approach based on investor risk profiles, with strategic
                sector allocations and defined risk management parameters. The base case scenario projects a
                10% return over the next 6 months with a 50% probability, while monitoring key risk factors
                including global monetary policies, geopolitical tensions, and commodity price movements.
              </p>
            </Card.Body>
          </Card>
          
          <div className="my-5">
            <h2 className="text-center mb-4">S&P 500 Returns After 10% Corrections</h2>
            <Visualizations type="sp500-returns" />
          </div>
          
          <Row className="mt-5">
            <Col md={6}>
              <Card className="report-card h-100">
                <Card.Header className="report-card-header bg-light">
                  <Card.Title className="report-card-title">Key Findings</Card.Title>
                </Card.Header>
                <Card.Body className="report-card-body">
                  <ul>
                    <li>Historical analysis confirms consistent rebound patterns after market corrections</li>
                    <li>Indian markets (NIFTY 50) show similar recovery patterns to S&P 500</li>
                    <li>Technically-driven corrections typically result in faster recoveries</li>
                    <li>Current economic indicators suggest resilient fundamentals</li>
                    <li>Multiple scenario analysis points to favorable risk-reward ratio</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="report-card h-100">
                <Card.Header className="report-card-header bg-light">
                  <Card.Title className="report-card-title">Investment Implications</Card.Title>
                </Card.Header>
                <Card.Body className="report-card-body">
                  <ul>
                    <li>Current market conditions present a strategic entry opportunity</li>
                    <li>Phased investment approach recommended for conservative investors</li>
                    <li>Sector preferences: Banking & Financials, Consumer Discretionary, Healthcare, Industrials</li>
                    <li>Risk management through stop-loss implementation and strategic diversification</li>
                    <li>Regular portfolio review to adapt to evolving market conditions</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          <div className="text-center mt-5">
            <div className="d-inline-block p-3 border rounded">
              <p className="mb-0"><strong>Report Date:</strong> March 2025</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ExecutiveSummary;