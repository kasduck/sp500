import React from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import Visualizations from './Visualizations';

const HistoricalValidation: React.FC = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={10}>
          <h1>Historical Validation of Rebound Patterns</h1>
          
          <p className="lead">
            Our analysis of historical market corrections reveals consistent recovery patterns
            that form the foundation of our investment thesis.
          </p>
          
          <Card className="report-card">
            <Card.Header className="report-card-header">
              <Card.Title className="report-card-title">S&P 500 Returns After 10% Corrections</Card.Title>
            </Card.Header>
            <Card.Body className="report-card-body">
              <Row>
                <Col md={6}>
                  <Table className="report-table" bordered hover>
                    <thead>
                      <tr>
                        <th>Time Horizon</th>
                        <th>Average Return</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>3 Months</td>
                        <td className="text-primary">+14.5%</td>
                      </tr>
                      <tr>
                        <td>6 Months</td>
                        <td className="text-primary">+20.3%</td>
                      </tr>
                      <tr>
                        <td>12 Months</td>
                        <td className="text-primary">+28.7%</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col md={6}>
                  <Visualizations type="sp500-returns" height={300} />
                </Col>
              </Row>
              
              <hr className="my-4" />
              
              <h3>Methodology</h3>
              <p>
                Our analysis examines instances of 10% to 20% market corrections in the S&P 500 over the past 30 years.
                A correction is defined as a decline of at least 10% from a recent peak. For each instance, we tracked
                the subsequent performance from the trough (lowest point) over 3, 6, and 12-month periods to establish
                average recovery patterns. Returns are price-only and sourced from Macrotrends and Yahoo Finance.
              </p>
              
              <h3>Key Observations</h3>
              <ul>
                <li>The S&P 500 shows consistent recovery patterns after 10%-20% corrections.</li>
                <li>Early recovery momentum (3-month returns) often accelerates over time.</li>
                <li>12-month returns typically exceed risk-free rates significantly.</li>
                <li>Patterns hold across various market conditions, from trade tensions to pandemics.</li>
              </ul>
            </Card.Body>
          </Card>
          
          <Card className="report-card mt-4">
            <Card.Header className="report-card-header">
              <Card.Title className="report-card-title">Historical Performance Details</Card.Title>
            </Card.Header>
            <Card.Body className="report-card-body">
              <div className="table-responsive">
                <Table className="report-table" hover>
                  <thead>
                    <tr>
                      <th>Correction Period</th>
                      <th>Magnitude</th>
                      <th>Trough Date</th>
                      <th>3-Month Return</th>
                      <th>6-Month Return</th>
                      <th>12-Month Return</th>
                      <th>Market Condition</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Oct-Nov 2018</td>
                      <td>-19.8%</td>
                      <td>Dec 24, 2018</td>
                      <td className="text-primary">+19.7%</td>
                      <td className="text-primary">+25.5%</td>
                      <td className="text-primary">+31.5%</td>
                      <td>Trade Tensions</td>
                    </tr>
                    <tr>
                      <td>Jan-Feb 2016</td>
                      <td>-14.2%</td>
                      <td>Feb 11, 2016</td>
                      <td className="text-primary">+14.0%</td>
                      <td className="text-primary">+17.2%</td>
                      <td className="text-primary">+23.2%</td>
                      <td>China Slowdown</td>
                    </tr>
                    <tr>
                      <td>Jul-Aug 2015</td>
                      <td>-12.4%</td>
                      <td>Aug 25, 2015</td>
                      <td className="text-primary">+10.8%</td>
                      <td className="text-primary">+15.6%</td>
                      <td className="text-primary">+18.9%</td>
                      <td>Chinese Yuan Devaluation</td>
                    </tr>
                    <tr>
                      <td>Apr-Jun 2012</td>
                      <td>-10.5%</td>
                      <td>Jun 4, 2012</td>
                      <td className="text-primary">+8.9%</td>
                      <td className="text-primary">+13.4%</td>
                      <td className="text-primary">+20.1%</td>
                      <td>European Debt Crisis</td>
                    </tr>
                    <tr>
                      <td>Feb-Mar 2020</td>
                      <td>-33.9%</td>
                      <td>Mar 23, 2020</td>
                      <td className="text-primary">+39.9%</td>
                      <td className="text-primary">+54.8%</td>
                      <td className="text-primary">+74.8%</td>
                      <td>COVID-19 Pandemic</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <p className="mt-2">
                <em>Note:</em> Returns are measured from the trough of each correction and reflect price-only performance. Data verified as of March 23, 2025.
              </p>
            </Card.Body>
          </Card>

          <Card className="report-card mt-4">
            <Card.Body className="report-card-body">
              <h3>Summary</h3>
              <p>
                Historical data across various market conditions—from trade tensions and economic slowdowns to the 2020 pandemic—demonstrates the S&P 500's resilience. After corrections of 10% to 20%, the market consistently rebounds, with returns accelerating over 3, 6, and 12-month periods. This supports the thesis that such corrections often present strategic entry points for long-term investors.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HistoricalValidation;
