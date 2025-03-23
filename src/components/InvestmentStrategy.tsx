import React from 'react';
import { Container, Row, Col, Card, Table, Badge, Button } from 'react-bootstrap';
import Visualizations from './Visualizations';

const InvestmentStrategy: React.FC = () => {
  // Asset allocation recommendations data
  const assetAllocation = [
    { 
      profile: 'Conservative', 
      equityAllocation: '10-20%', 
      investmentApproach: 'Phased entry (4 months)' 
    },
    { 
      profile: 'Moderate', 
      equityAllocation: '30-50%', 
      investmentApproach: '50% now, 50% on confirmation' 
    },
    { 
      profile: 'Aggressive', 
      equityAllocation: '50-70%', 
      investmentApproach: 'Full entry if oversold' 
    },
  ];

  // Sector allocation strategy data
  const sectorStrategy = [
    { 
      sector: 'Banking & Financials', 
      outlook: 'Positive', 
      allocation: 'Overweight', 
      keyDrivers: 'Credit growth, NPA stabilization' 
    },
    { 
      sector: 'IT Services', 
      outlook: 'Neutral', 
      allocation: 'Market-weight', 
      keyDrivers: 'Global spending recovery' 
    },
    { 
      sector: 'Consumer Discretionary', 
      outlook: 'Positive', 
      allocation: 'Overweight', 
      keyDrivers: 'Urban consumption' 
    },
    { 
      sector: 'Healthcare', 
      outlook: 'Positive', 
      allocation: 'Overweight', 
      keyDrivers: 'Defensive characteristics' 
    },
    { 
      sector: 'Industrials', 
      outlook: 'Positive', 
      allocation: 'Overweight', 
      keyDrivers: 'Capex cycle, infra spending' 
    },
    { 
      sector: 'Energy', 
      outlook: 'Neutral', 
      allocation: 'Market-weight', 
      keyDrivers: 'Stable crude prices' 
    },
    { 
      sector: 'Materials', 
      outlook: 'Neutral', 
      allocation: 'Market-weight', 
      keyDrivers: 'Global demand uncertainty' 
    },
  ];

  // Function to get outlook badge
  const getOutlookBadge = (outlook: string) => {
    if (outlook === 'Positive') {
      return <Badge bg="success">{outlook}</Badge>;
    } else if (outlook === 'Neutral') {
      return <Badge bg="info">{outlook}</Badge>;
    } else {
      return <Badge bg="danger">{outlook}</Badge>;
    }
  };

  // Function to get allocation badge
  const getAllocationBadge = (allocation: string) => {
    if (allocation === 'Overweight') {
      return <Badge bg="success">{allocation}</Badge>;
    } else if (allocation === 'Market-weight') {
      return <Badge bg="secondary">{allocation}</Badge>;
    } else {
      return <Badge bg="danger">{allocation}</Badge>;
    }
  };

  // Function to get risk profile badge
  const getProfileBadge = (profile: string) => {
    if (profile === 'Conservative') {
      return <Badge bg="info">{profile}</Badge>;
    } else if (profile === 'Moderate') {
      return <Badge bg="warning" text="dark">{profile}</Badge>;
    } else {
      return <Badge bg="danger">{profile}</Badge>;
    }
  };

  // LinkedIn redirect handler
  const handleConsultationRequest = () => {
    window.location.href = 'www.linkedin.com/in/kasduck'; // Replace with your LinkedIn URL
  };

  return (
    <Container>
      <h2 className="section-title">Investment Strategy and Recommendations</h2>
      
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={10} xl={8}>
          <Card className="report-card mb-4 mx-auto" style={{ maxWidth: '90%' }}>
            <Card.Body>
              <p>
                Based on our analysis of historical patterns, current market conditions, and risk factors, 
                we recommend a calibrated investment approach in Indian equities, tailored to different 
                investor profiles. This section outlines our strategic recommendations for asset allocation, 
                sector positioning, and implementation strategies.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={10} xl={8}>
          <Card className="report-card mb-4 mx-auto" style={{ maxWidth: '90%' }}>
            <Card.Header className="report-card-header">
              <h3 className="report-card-title">Asset Allocation Recommendations</h3>
            </Card.Header>
            <Card.Body>
              <Table className="report-table" responsive>
                <thead>
                  <tr>
                    <th>Investor Profile</th>
                    <th>Recommended Equity Allocation</th>
                    <th>Investment Approach</th>
                  </tr>
                </thead>
                <tbody>
                  {assetAllocation.map((item, index) => (
                    <tr key={index}>
                      <td>{getProfileBadge(item.profile)}</td>
                      <td><strong>{item.equityAllocation}</strong></td>
                      <td>{item.investmentApproach}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={10} xl={8}>
          <Card className="report-card mb-4 mx-auto" style={{ maxWidth: '90%' }}>
            <Card.Header className="report-card-header">
              <h3 className="report-card-title">Sector Allocation Strategy</h3>
            </Card.Header>
            <Card.Body>
              <Table className="report-table" responsive>
                <thead>
                  <tr>
                    <th>Sector</th>
                    <th>Outlook</th>
                    <th>Allocation</th>
                    <th>Key Drivers</th>
                  </tr>
                </thead>
                <tbody>
                  {sectorStrategy.map((item, index) => (
                    <tr key={index}>
                      <td><strong>{item.sector}</strong></td>
                      <td>{getOutlookBadge(item.outlook)}</td>
                      <td>{getAllocationBadge(item.allocation)}</td>
                      <td>{item.keyDrivers}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={10} xl={8}>
          <Card className="report-card mb-4 mx-auto" style={{ maxWidth: '90%' }}>
            <Card.Header className="report-card-header">
              <h3 className="report-card-title">Implementation Strategy</h3>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={4}>
                  <h4 className="mb-3">Entry Methodology</h4>
                  <ul>
                    <li><strong>Conservative Investors:</strong> Focus on large-cap stocks or index funds (e.g., NIFTY 50 ETF) for stability</li>
                    <li><strong>Moderate Investors:</strong> Mix of large-caps and selective mid-caps, particularly in banking and industrials</li>
                    <li><strong>Aggressive Investors:</strong> Include mid-caps and growth sectors, with opportunistic small-cap allocation</li>
                  </ul>
                </Col>
                <Col md={4}>
                  <h4 className="mb-3">Risk Management Parameters</h4>
                  <ul>
                    <li>Implement stop-loss of 10-15% below entry points</li>
                    <li>Allocate 5-10% to gold or other defensive assets as hedges</li>
                    <li>Maintain 15-20% cash reserve for additional buying opportunities</li>
                    <li>Consider options strategies for portfolio protection</li>
                  </ul>
                </Col>
                <Col md={4}>
                  <h4 className="mb-3">Exit Triggers</h4>
                  <ul>
                    <li>Take partial profits at +10% in 6 months</li>
                    <li>Full exit if key support levels are breached</li>
                    <li>Review positions if risk scenarios materialize</li>
                    <li>Consider trailing stop-loss implementation</li>
                  </ul>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={10} xl={8}>
          <div className="chart-container mb-4">
            <h3 className="report-card-title mb-3">Expected Returns by Time Horizon</h3>
            <Visualizations type="recovery-range" height={350} />
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={10} xl={8}>
          <Card className="report-card mb-4 bg-light-gray">
            <Card.Body className="text-center">
              <h4 className="mb-3">Need a Personalized Investment Strategy?</h4>
              <p>
                Our analysis is based on historical patterns and current market conditions.
                For personalized investment advice tailored to your specific financial goals and risk tolerance,
                please consult with a qualified financial advisor.
              </p>
              <Button variant="primary" className="mt-2" onClick={handleConsultationRequest}>
                Request Consultation
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default InvestmentStrategy;