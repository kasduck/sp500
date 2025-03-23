import React from 'react';
import { Container, Row, Col, Card, Table, Badge } from 'react-bootstrap';
import Visualizations from './Visualizations';

const HistoricalComparison: React.FC = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={10}>
          <h2 className="section-title mb-4">Historical Comparison</h2>
          
          <Card className="report-card mb-4 mx-auto" style={{ maxWidth: '90%' }}>
            <Card.Body>
              <p className="lead">
                The current market environment exhibits similarities to the 2015-16 period, characterized by 
                China-led uncertainty, where markets rebounded once global fears subsided. Unlike systemic 
                crises (2008) or pandemic shocks (2020), the current environment lacks widespread financial 
                distress, suggesting potential for a milder correction cycle and sustainable recovery.
              </p>
            </Card.Body>
          </Card>
          
          <Card className="report-card mb-4 mx-auto" style={{ maxWidth: '90%' }}>
            <Card.Body>
              <h3 className="text-center mb-4">Comparative Analysis: Current vs. Historical Corrections</h3>
              <Table responsive hover className="data-table">
                <thead className="table-light">
                  <tr>
                    <th>Characteristic</th>
                    <th>Current Correction</th>
                    <th>2015-16 Correction</th>
                    <th>2008/2020 Crises</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Primary Trigger</td>
                    <td>Global uncertainty, valuation concerns</td>
                    <td>China slowdown, Fed tightening</td>
                    <td>Systemic financial crisis / Pandemic</td>
                  </tr>
                  <tr>
                    <td>Depth of Correction</td>
                    <td>
                      <Badge bg="warning">Moderate</Badge>
                      <span className="ms-2">~10-15%</span>
                    </td>
                    <td>
                      <Badge bg="warning">Moderate</Badge>
                      <span className="ms-2">~12-18%</span>
                    </td>
                    <td>
                      <Badge bg="danger">Severe</Badge>
                      <span className="ms-2">30-60%</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Economic Impact</td>
                    <td>Limited</td>
                    <td>Limited</td>
                    <td>Significant</td>
                  </tr>
                  <tr>
                    <td>Policy Response</td>
                    <td>Modest</td>
                    <td>Moderate</td>
                    <td>Aggressive</td>
                  </tr>
                  <tr>
                    <td>Recovery Time</td>
                    <td>
                      <Badge bg="success">Fast</Badge>
                      <span className="ms-2">3-6 months</span>
                    </td>
                    <td>
                      <Badge bg="success">Fast</Badge>
                      <span className="ms-2">4-8 months</span>
                    </td>
                    <td>
                      <Badge bg="warning">Extended</Badge>
                      <span className="ms-2">12-36 months</span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
          
          <Row className="mb-4">
            <Col lg={6}>
              <Card className="report-card h-100">
                <Card.Header className="bg-primary text-white">
                  <h3 className="mb-0">Key Similarities to 2015-16</h3>
                </Card.Header>
                <Card.Body>
                  <ul className="feature-list">
                    <li>Global growth concerns affecting sentiment</li>
                    <li>Emerging market volatility</li>
                    <li>Central bank policy uncertainty</li>
                    <li>Strong domestic fundamentals providing support</li>
                    <li>Technical selling accelerating market moves</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6}>
              <Card className="report-card h-100">
                <Card.Header className="bg-primary text-white">
                  <h3 className="mb-0">Key Differences from 2008/2020</h3>
                </Card.Header>
                <Card.Body>
                  <ul className="feature-list">
                    <li>No widespread financial system stress</li>
                    <li>Stronger corporate balance sheets</li>
                    <li>Absence of major economic disruption</li>
                    <li>More orderly market functioning</li>
                    <li>Better regulatory frameworks in place</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          <div className="mb-4">
            <h3 className="text-center mb-3">S&P 500 vs. NIFTY 50: Returns After 10% Corrections</h3>
            <Visualizations type="comparison" height={400} />
          </div>
          
          <Card className="report-card">
            <Card.Body>
              <h3 className="text-center mb-3">Historical Recovery Analysis</h3>
              <p>
                Comparative analysis of NIFTY 50 and S&P 500 across approximately 15 instances of 10% corrections 
                since 1990 demonstrates rebound patterns that largely confirm the investment thesis. While Indian 
                market rebounds are slightly more modest than S&P 500 averages, they show consistent directional 
                alignment, confirming the broader pattern of post-correction recovery.
              </p>
              <Table responsive hover className="data-table mt-3">
                <thead className="table-light">
                  <tr>
                    <th>Time Horizon</th>
                    <th>S&P 500 Average Return</th>
                    <th>NIFTY 50 Average Return</th>
                    <th>NIFTY 50 Range</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>3 Months</td>
                    <td>+3%</td>
                    <td>+2.5%</td>
                    <td>-5% to +8%</td>
                  </tr>
                  <tr>
                    <td>6 Months</td>
                    <td>+10%</td>
                    <td>+8%</td>
                    <td>0% to +15%</td>
                  </tr>
                  <tr>
                    <td>12 Months</td>
                    <td>+16%</td>
                    <td>+14%</td>
                    <td>+5% to +25%</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HistoricalComparison;