import React from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import Visualizations from './Visualizations';

const CurrentMarketConditions: React.FC = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={10}>
          <h2 className="section-title mb-4">Current Market Conditions Analysis</h2>
          
          <Card className="report-card mb-4">
            <Card.Header className="bg-primary text-white">
              <h3 className="mb-0">Macroeconomic Indicators</h3>
            </Card.Header>
            <Card.Body>
              <Table responsive hover className="data-table">
                <thead className="table-light">
                  <tr>
                    <th>Indicator</th>
                    <th>Current Value</th>
                    <th>Trend</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>GDP Growth</td>
                    <td>6-7%</td>
                    <td>Resilient</td>
                  </tr>
                  <tr>
                    <td>Interest Rates</td>
                    <td>~6.5%</td>
                    <td>Stabilizing</td>
                  </tr>
                  <tr>
                    <td>Inflation</td>
                    <td>5-6%</td>
                    <td>Moderating</td>
                  </tr>
                  <tr>
                    <td>Government Capex</td>
                    <td>↑</td>
                    <td>Supportive</td>
                  </tr>
                  <tr>
                    <td>Corporate Earnings</td>
                    <td>↑</td>
                    <td>Positive</td>
                  </tr>
                </tbody>
              </Table>
              
              <div className="mt-4">
                <p>
                  India continues to demonstrate economic resilience despite global headwinds, with GDP growth forecasts 
                  maintaining a robust 6-7% for FY24. The RBI has maintained a hawkish stance to combat inflation, with 
                  interest rates around 6.5%, but inflation is showing signs of moderation.
                </p>
                <p>
                  The government's continued focus on capital expenditure provides a strong foundation for infrastructure 
                  development, which should support cyclical sectors.
                </p>
              </div>
            </Card.Body>
          </Card>
          
          <Card className="report-card mb-4">
            <Card.Header className="bg-primary text-white">
              <h3 className="mb-0">Global Influences</h3>
            </Card.Header>
            <Card.Body>
              <Table responsive hover className="data-table">
                <thead className="table-light">
                  <tr>
                    <th>Factor</th>
                    <th>Status</th>
                    <th>Impact on Indian Equity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>U.S. Fed Policy</td>
                    <td>Rate hike pause</td>
                    <td className="text-success">Positive</td>
                  </tr>
                  <tr>
                    <td>China Economy</td>
                    <td>Slowing growth</td>
                    <td className="text-warning">Mixed</td>
                  </tr>
                  <tr>
                    <td>Oil Prices</td>
                    <td>$80-90/barrel</td>
                    <td>Neutral</td>
                  </tr>
                  <tr>
                    <td>Global Liquidity</td>
                    <td>Tightening but stabilizing</td>
                    <td className="text-success">Cautiously positive</td>
                  </tr>
                  <tr>
                    <td>Geopolitical Tensions</td>
                    <td>Elevated</td>
                    <td className="text-danger">Negative</td>
                  </tr>
                </tbody>
              </Table>
              
              <div className="mt-4">
                <p>
                  The U.S. Federal Reserve's signals toward pausing rate hikes reduce pressure on emerging markets like India. 
                  While China's economic slowdown and property sector challenges dampen global demand prospects, India's 
                  domestic consumption focus provides relative insulation.
                </p>
                <p>
                  Commodity prices, particularly oil, have stabilized in the $80-90 per barrel range, supporting India's 
                  external account position.
                </p>
              </div>
            </Card.Body>
          </Card>
          
          <div className="mt-4">
            <Row>
              <Col md={6}>
                <Card className="report-card h-100">
                  <Card.Body>
                    <h4 className="text-center mb-3">GDP Growth Trend</h4>
                    <Visualizations type="recovery-range" height={250} />
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="report-card h-100">
                  <Card.Body>
                    <h4 className="text-center mb-3">Key Market Indicators</h4>
                    <div className="d-flex flex-column h-100 justify-content-center">
                      <div className="indicator-item mb-3">
                        <div className="d-flex justify-content-between">
                          <span>Market Sentiment</span>
                          <span className="text-warning">Neutral</span>
                        </div>
                        <div className="progress">
                          <div className="progress-bar bg-warning" role="progressbar" style={{ width: '50%' }}></div>
                        </div>
                      </div>
                      <div className="indicator-item mb-3">
                        <div className="d-flex justify-content-between">
                          <span>Valuation Metrics</span>
                          <span className="text-success">Favorable</span>
                        </div>
                        <div className="progress">
                          <div className="progress-bar bg-success" role="progressbar" style={{ width: '70%' }}></div>
                        </div>
                      </div>
                      <div className="indicator-item">
                        <div className="d-flex justify-content-between">
                          <span>Liquidity Conditions</span>
                          <span className="text-primary">Improving</span>
                        </div>
                        <div className="progress">
                          <div className="progress-bar bg-primary" role="progressbar" style={{ width: '65%' }}></div>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CurrentMarketConditions;