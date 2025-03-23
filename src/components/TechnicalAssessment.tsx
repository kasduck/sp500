import React from 'react';
import { Container, Row, Col, Card, Table, Badge } from 'react-bootstrap';
import Visualizations from './Visualizations';

const TechnicalAssessment: React.FC = () => {
  // Technical indicators data
  const technicalIndicators = [
    { indicator: 'RSI (Relative Strength)', currentReading: '<30 (Oversold)', signalStrength: 'Strong Buy' },
    { indicator: 'India VIX', currentReading: '>20 (Elevated)', signalStrength: 'Contrarian Buy' },
    { indicator: '200-Day Moving Average', currentReading: 'Below', signalStrength: 'Cautionary' },
    { indicator: 'MACD', currentReading: 'Potential crossover', signalStrength: 'Watch' },
    { indicator: 'Breadth Indicators', currentReading: 'Improving', signalStrength: 'Supportive' },
  ];

  // Market participant behavior data
  const participantBehavior = [
    { participantType: 'FII (Foreign)', recentAction: 'Net selling', historicalImplication: 'Near-term pressure' },
    { participantType: 'DII (Domestic)', recentAction: 'Net buying', historicalImplication: 'Supportive' },
    { participantType: 'Retail Investors', recentAction: 'Mixed', historicalImplication: 'Consolidation phase' },
    { participantType: 'Promoters', recentAction: 'Limited selling', historicalImplication: 'Confidence signal' },
  ];

  // Technical indicator trend data
  const technicalTrendData = [
    { month: 'Jan', rsi: 65, vix: 15 },
    { month: 'Feb', rsi: 58, vix: 17 },
    { month: 'Mar', rsi: 45, vix: 19 },
    { month: 'Apr', rsi: 38, vix: 22 },
    { month: 'May', rsi: 28, vix: 24 },
    { month: 'Jun', rsi: 32, vix: 21 },
  ];

  // Get signal badge style based on signal strength
  const getSignalBadge = (signal: string) => {
    if (signal.includes('Strong') || signal.includes('Supportive')) {
      return <Badge bg="success">{signal}</Badge>;
    } else if (signal.includes('Cautionary') || signal.includes('Watch')) {
      return <Badge bg="warning" text="dark">{signal}</Badge>;
    } else if (signal.includes('Contrarian')) {
      return <Badge bg="info">{signal}</Badge>;
    } else {
      return <Badge bg="secondary">{signal}</Badge>;
    }
  };

  return (
    <Container>
      <h2 className="section-title">Technical and Behavioral Assessment</h2>
      
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="report-card mb-4 mx-auto" style={{ maxWidth: '90%' }}>
            <Card.Body>
              <p>
                Assuming a recent 10% market correction, technical indicators present a constructive 
                case for potential market rebounds. The analysis below examines both technical 
                indicators and market participant behavior to assess the current market positioning.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="report-card mb-4 mx-auto" style={{ maxWidth: '90%' }}>
            <Card.Header className="report-card-header">
              <h3 className="report-card-title">Technical Indicators Status</h3>
            </Card.Header>
            <Card.Body>
              <Table className="report-table" responsive>
                <thead>
                  <tr>
                    <th>Indicator</th>
                    <th>Current Reading</th>
                    <th>Signal Strength</th>
                  </tr>
                </thead>
                <tbody>
                  {technicalIndicators.map((item, index) => (
                    <tr key={index}>
                      <td><strong>{item.indicator}</strong></td>
                      <td>{item.currentReading}</td>
                      <td>{getSignalBadge(item.signalStrength)}</td>
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
          <div className="chart-container">
            <h3 className="report-card-title mb-3">Technical Indicator Trends</h3>
            <Visualizations type="technical-trends" data={technicalTrendData} height={350} />
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="report-card mb-4 mx-auto" style={{ maxWidth: '90%' }}>
            <Card.Header className="report-card-header">
              <h3 className="report-card-title">Investor Psychology and Flow Analysis</h3>
            </Card.Header>
            <Card.Body>
              <p>
                The divergence between foreign institutional investor (FII) outflows and domestic 
                institutional investor (DII) inflows typically precedes market stabilization. Current 
                patterns suggest markets are in an accumulation phase, with informed domestic investors 
                providing support despite foreign selling pressure.
              </p>
              <Table className="report-table" responsive>
                <thead>
                  <tr>
                    <th>Participant Type</th>
                    <th>Recent Action</th>
                    <th>Historical Implication</th>
                  </tr>
                </thead>
                <tbody>
                  {participantBehavior.map((item, index) => (
                    <tr key={index}>
                      <td><strong>{item.participantType}</strong></td>
                      <td>{item.recentAction}</td>
                      <td>{item.historicalImplication}</td>
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
              <p>
                <strong>Technical Outlook Summary:</strong> Current technical indicators suggest 
                markets are approaching oversold territory, creating potential entry points for 
                investors with appropriate risk tolerance. The combination of oversold RSI, elevated 
                VIX, and supportive breadth indicators often precedes market reversals. However, the position below the 
                200-day moving average warrants a cautious approach until confirmation signals emerge.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TechnicalAssessment;