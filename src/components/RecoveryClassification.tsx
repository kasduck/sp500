import React from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import Visualizations from './Visualizations';

const RecoveryClassification: React.FC = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <h2 className="section-title mb-4">Recovery Classification by Correction Type</h2>
          
          <Card className="report-card mb-4 mx-auto" style={{ maxWidth: '90%' }}>
            <Card.Body>
              <p className="lead">
                Our analysis distinguishes between technically driven corrections and those triggered by 
                fundamental/macroeconomic factors:
              </p>
              
              <h3 className="subsection-title mt-4">Technically Driven Corrections:</h3>
              <ul className="mt-3">
                <li>Characterized by profit-taking, algorithmic trading effects</li>
                <li>Example: 2018 market adjustment</li>
                <li>Typically result in more rapid rebounds when fundamentals remain intact</li>
                <li>Average 6-month return: <strong>+10-12%</strong></li>
              </ul>

              <h3 className="subsection-title mt-4">Macro/Geopolitical Shock Corrections:</h3>
              <ul className="mt-3">
                <li>Deeper initial declines but often stronger eventual recoveries</li>
                <li>Examples: 2008 crisis (-60% decline), 2020 pandemic</li>
                <li>Often aided by fiscal/monetary stimulus</li>
                <li>Average 6-month return: <strong>+6-8%</strong> (highly event-dependent)</li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="report-card">
            <Card.Body>
              <h3 className="text-center mb-4">Recovery Comparison by Correction Type</h3>
              <Table responsive hover className="data-table">
                <thead className="table-light">
                  <tr>
                    <th>Correction Type</th>
                    <th className="text-center">3-Month Return</th>
                    <th className="text-center">6-Month Return</th>
                    <th className="text-center">12-Month Return</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Technically Driven</td>
                    <td className="text-center">+4%</td>
                    <td className="text-center">+10-12%</td>
                    <td className="text-center">+18%</td>
                  </tr>
                  <tr>
                    <td>Macro/Geopolitical</td>
                    <td className="text-center">+2%</td>
                    <td className="text-center">+6-8%</td>
                    <td className="text-center">+14%</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
          
          <div className="mt-4">
            <Visualizations type="comparison" height={350} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RecoveryClassification;