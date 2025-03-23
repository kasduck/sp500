import React from 'react';
import { Container, Row, Col, Card, Table, Badge, ProgressBar } from 'react-bootstrap';
import Visualizations from './Visualizations';

const RiskAssessment: React.FC = () => {
  // Risk factor data
  const riskFactors = [
    { riskFactor: 'Middle East Escalation', probability: 40, impact: 'High', overallRisk: 'Medium-High' },
    { riskFactor: 'U.S.-China Trade Tensions', probability: 60, impact: 'Medium', overallRisk: 'Medium' },
    { riskFactor: 'Unexpected Monetary Tightening', probability: 30, impact: 'High', overallRisk: 'Medium' },
    { riskFactor: 'Domestic Political Uncertainty', probability: 25, impact: 'Medium', overallRisk: 'Low-Medium' },
    { riskFactor: 'Corporate Earnings Disappointment', probability: 35, impact: 'Medium', overallRisk: 'Medium' },
  ];

  // Multi-scenario analysis data
  const scenarioAnalysis = [
    { 
      scenario: 'Base Case', 
      probability: 50, 
      threeMonthReturn: '+3%', 
      sixMonthReturn: '+10%', 
      twelveMonthReturn: '+16%' 
    },
    { 
      scenario: 'Bull Case', 
      probability: 25, 
      threeMonthReturn: '+5%', 
      sixMonthReturn: '+15-20%', 
      twelveMonthReturn: '+25%' 
    },
    { 
      scenario: 'Bear Case', 
      probability: 25, 
      threeMonthReturn: '-2%', 
      sixMonthReturn: '-5% to 0%', 
      twelveMonthReturn: '+5%' 
    },
  ];

  // Function to get risk badge color
  const getRiskBadge = (risk: string) => {
    if (risk.includes('High')) {
      return <Badge bg="danger">{risk}</Badge>;
    } else if (risk.includes('Medium')) {
      return <Badge bg="warning" text="dark">{risk}</Badge>;
    } else {
      return <Badge bg="success">{risk}</Badge>;
    }
  };

  // Function to get scenario badge color
  const getScenarioBadge = (scenario: string) => {
    if (scenario === 'Base Case') {
      return <Badge bg="primary">{scenario}</Badge>;
    } else if (scenario === 'Bull Case') {
      return <Badge bg="success">{scenario}</Badge>;
    } else {
      return <Badge bg="danger">{scenario}</Badge>;
    }
  };

  // Progress bar variant based on probability
  const getProbabilityVariant = (probability: number) => {
    if (probability >= 60) return 'danger';
    if (probability >= 40) return 'warning';
    return 'info';
  };

  return (
    <Container>
      <h2 className="section-title">Risk Assessment and Scenario Analysis</h2>
      
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="report-card mb-4 mx-auto" style={{ maxWidth: '90%' }}>
            <Card.Body>
              <p>
                This section evaluates key risk factors that could impact market performance
                following a 10% correction, along with probability-weighted scenario analysis
                for potential return outcomes across different time horizons.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="report-card mb-4 mx-auto" style={{ maxWidth: '90%' }}>
            <Card.Header className="report-card-header">
              <h3 className="report-card-title">Current Risk Factors</h3>
            </Card.Header>
            <Card.Body>
              <Table className="report-table" responsive>
                <thead>
                  <tr>
                    <th>Risk Factor</th>
                    <th>Probability</th>
                    <th>Impact</th>
                    <th>Overall Risk</th>
                  </tr>
                </thead>
                <tbody>
                  {riskFactors.map((item, index) => (
                    <tr key={index}>
                      <td><strong>{item.riskFactor}</strong></td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="me-2">{item.probability}%</div>
                          <ProgressBar 
                            className="w-100" 
                            variant={getProbabilityVariant(item.probability)} 
                            now={item.probability} 
                          />
                        </div>
                      </td>
                      <td>{item.impact}</td>
                      <td>{getRiskBadge(item.overallRisk)}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="report-card mb-4 mx-auto" style={{ maxWidth: '90%' }}>
            <Card.Header className="report-card-header">
              <h3 className="report-card-title">Multi-Scenario Analysis</h3>
            </Card.Header>
            <Card.Body>
              <Table className="report-table" responsive>
                <thead>
                  <tr>
                    <th>Scenario</th>
                    <th>Probability</th>
                    <th>3-Month Return</th>
                    <th>6-Month Return</th>
                    <th>12-Month Return</th>
                  </tr>
                </thead>
                <tbody>
                  {scenarioAnalysis.map((item, index) => (
                    <tr key={index}>
                      <td>{getScenarioBadge(item.scenario)}</td>
                      <td>{item.probability}%</td>
                      <td className={item.threeMonthReturn.includes('-') ? 'text-danger' : 'text-success'}>
                        <strong>{item.threeMonthReturn}</strong>
                      </td>
                      <td className={item.sixMonthReturn.includes('-') ? 'text-danger' : 'text-success'}>
                        <strong>{item.sixMonthReturn}</strong>
                      </td>
                      <td className={item.twelveMonthReturn.includes('-') ? 'text-danger' : 'text-success'}>
                        <strong>{item.twelveMonthReturn}</strong>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="report-card mb-4 mx-auto" style={{ maxWidth: '90%' }}>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <h4 className="mb-3">Base Case (50% Probability)</h4>
                  <p>
                    Global risks remain contained, inflation moderates, and corporate earnings 
                    remain stable, supporting a rebound in line with historical averages.
                  </p>
                </Col>
                <Col md={6}>
                  <h4 className="mb-3">Bull Case (25% Probability)</h4>
                  <p>
                    Geopolitical tensions ease, global central banks pivot toward accommodative 
                    policies sooner than expected, and India's domestic growth accelerates.
                  </p>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col md={12}>
                  <h4 className="mb-3">Bear Case (25% Probability)</h4>
                  <p>
                    Geopolitical conflicts intensify, causing commodity price shocks, persistent 
                    inflation, and deteriorating corporate earnings.
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={10}>
          <Row>
            <Col lg={6}>
              <div className="chart-container mb-4">
                <h3 className="report-card-title mb-3">Scenario Analysis Projection</h3>
                <Visualizations type="scenario-analysis" height={350} />
              </div>
            </Col>
            <Col lg={6}>
              <div className="chart-container mb-4">
                <h3 className="report-card-title mb-3">Scenario Probability Distribution</h3>
                <Visualizations type="probability" height={350} />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default RiskAssessment;