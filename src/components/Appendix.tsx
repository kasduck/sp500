import React, { useState } from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';

const Appendix: React.FC = () => {
  // State to track active accordion keys
  const [activeKey, setActiveKey] = useState<string>('0');

  return (
    <Container id="appendix">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="report-card">
            <Card.Header className="report-card-header">
              <h2 className="section-title">Appendix: Methodology and Data Sources</h2>
            </Card.Header>
            <Card.Body className="report-card-body">
              <p>
                This analysis leverages historical market data from multiple corrections over the past 20-30
                years. Technical analysis employs standard indicators including RSI, moving averages, and
                volatility metrics. Economic projections are derived from central bank publications, economic
                surveys, and consensus forecasts from leading financial institutions.
              </p>
              
              <Accordion activeKey={activeKey} onSelect={(k) => setActiveKey(k as string)}>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Market Data Collection Methodology</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Our analysis includes data from all S&P 500 corrections of 10% or more since 1990. 
                      For each correction event, we measured:
                    </p>
                    <ul>
                      <li>Magnitude of the correction (percentage decline from peak to trough)</li>
                      <li>Duration of the correction (number of trading days)</li>
                      <li>Recovery performance at 3, 6, and 12-month intervals</li>
                      <li>Conditions that preceded and followed the correction</li>
                    </ul>
                    <p>
                      Data was sourced from Bloomberg Terminal, S&P Dow Jones Indices, and public market databases.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Technical Analysis Framework</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Technical analysis incorporated the following indicators:
                    </p>
                    <ul>
                      <li>Relative Strength Index (RSI) with 14-day lookback period</li>
                      <li>Moving Average Convergence Divergence (MACD) with standard parameters</li>
                      <li>50-day and 200-day Simple Moving Averages (SMA)</li>
                      <li>Market breadth indicators (advance-decline ratio)</li>
                      <li>Volatility Index (VIX) readings and correlation patterns</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Economic Projection Sources</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Economic forecasts used in this report are derived from:
                    </p>
                    <ul>
                      <li>Reserve Bank of India (RBI) Monetary Policy Reports</li>
                      <li>Economic Survey of India, 2024-25</li>
                      <li>International Monetary Fund (IMF) World Economic Outlook</li>
                      <li>Consensus forecasts from leading global investment banks</li>
                      <li>Industry reports from research institutions</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Statistical Analysis Methods</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Statistical methods employed include:
                    </p>
                    <ul>
                      <li>Mean and median return calculations for historical correction recovery periods</li>
                      <li>Standard deviation and range analysis to assess result variability</li>
                      <li>Correlation analysis between economic indicators and market performance</li>
                      <li>Regression models to identify predictive factors for recovery strength</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Appendix;