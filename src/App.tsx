import React, { useState } from 'react';
import { Container, Row, Col, Nav, Navbar, Button } from 'react-bootstrap';
import { jsPDF } from 'jspdf'; // Import jsPDF
import ExecutiveSummary from './components/ExecutiveSummary';
import HistoricalValidation from './components/HistoricalValidation';
import HistoricalComparison from './components/HistoricalComparison';
import RecoveryClassification from './components/RecoveryClassification';
import CurrentMarketConditions from './components/CurrentMarketConditions';
import TechnicalAssessment from './components/TechnicalAssessment';
import RiskAssessment from './components/RiskAssessment';
import InvestmentStrategy from './components/InvestmentStrategy';
import Conclusion from './components/Conclusion';
import Appendix from './components/Appendix';
import Disclaimer from './components/Disclaimer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('executive-summary');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sections = [
    { id: 'executive-summary', title: 'Executive Summary' },
    { id: 'historical-validation', title: 'Historical Validation' },
    { id: 'comparative-analysis', title: 'Comparative Analysis' },
    { id: 'recovery-classification', title: 'Recovery Classification' },
    { id: 'current-market', title: 'Current Market Conditions' },
    { id: 'technical-assessment', title: 'Technical Assessment' },
    { id: 'risk-assessment', title: 'Risk Assessment' },
    { id: 'investment-strategy', title: 'Investment Strategy' },
    { id: 'conclusion', title: 'Conclusion' },
    { id: 'appendix', title: 'Appendix' },
    { id: 'disclaimer', title: 'Disclaimer' }
  ];

  const renderSection = (sectionId: string) => {
    switch(sectionId) {
      case 'executive-summary': return <ExecutiveSummary />;
      case 'historical-validation': return <HistoricalValidation />;
      case 'comparative-analysis': return <HistoricalComparison />;
      case 'recovery-classification': return <RecoveryClassification />;
      case 'current-market': return <CurrentMarketConditions />;
      case 'technical-assessment': return <TechnicalAssessment />;
      case 'risk-assessment': return <RiskAssessment />;
      case 'investment-strategy': return <InvestmentStrategy />;
      case 'conclusion': return <Conclusion />;
      case 'appendix': return <Appendix />;
      case 'disclaimer': return <Disclaimer />;
      default: return <ExecutiveSummary />;
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    // Title Page
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.text('S&P 500 Returns After 10% Corrections', 20, 20, { align: 'left' });
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text('Investment Research Report', 20, 30);
    doc.text('March 2025', 20, 40);

    // Investment Strategy Section
    doc.addPage();
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Investment Strategy and Recommendations', 20, 20);

    // Introduction
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(
      'Based on our analysis of historical patterns, current market conditions, and risk factors, we recommend a calibrated investment approach in Indian equities, tailored to different investor profiles.',
      20,
      30,
      { maxWidth: 170 }
    );

    // Asset Allocation Table
    doc.setFontSize(12);
    doc.text('Asset Allocation Recommendations', 20, 50);
    doc.setFontSize(10);
    let yPos = 60;
    const assetData = [
      ['Investor Profile', 'Equity Allocation', 'Investment Approach'],
      ['Conservative', '10-20%', 'Phased entry (4 months)'],
      ['Moderate', '30-50%', '50% now, 50% on confirmation'],
      ['Aggressive', '50-70%', 'Full entry if oversold']
    ];
    assetData.forEach((row, index) => {
      doc.text(row[0], 20, yPos);
      doc.text(row[1], 70, yPos);
      doc.text(row[2], 110, yPos);
      yPos += 10;
      if (index === 0) {
        doc.line(20, yPos - 5, 190, yPos - 5); // Header underline
      }
    });

    // Sector Allocation Table
    doc.addPage();
    doc.setFontSize(12);
    doc.text('Sector Allocation Strategy', 20, 20);
    doc.setFontSize(10);
    yPos = 30;
    const sectorData = [
      ['Sector', 'Outlook', 'Allocation', 'Key Drivers'],
      ['Banking & Financials', 'Positive', 'Overweight', 'Credit growth, NPA stabilization'],
      ['IT Services', 'Neutral', 'Market-weight', 'Global spending recovery'],
      ['Consumer Discretionary', 'Positive', 'Overweight', 'Urban consumption'],
      ['Healthcare', 'Positive', 'Overweight', 'Defensive characteristics'],
      ['Industrials', 'Positive', 'Overweight', 'Capex cycle, infra spending'],
      ['Energy', 'Neutral', 'Market-weight', 'Stable crude prices'],
      ['Materials', 'Neutral', 'Market-weight', 'Global demand uncertainty']
    ];
    sectorData.forEach((row, index) => {
      doc.text(row[0], 20, yPos);
      doc.text(row[1], 70, yPos);
      doc.text(row[2], 100, yPos);
      doc.text(row[3], 130, yPos);
      yPos += 10;
      if (index === 0) {
        doc.line(20, yPos - 5, 190, yPos - 5); // Header underline
      }
      if (yPos > 270) {
        doc.addPage();
        yPos = 20;
      }
    });

    // Implementation Strategy
    doc.addPage();
    doc.setFontSize(12);
    doc.text('Implementation Strategy', 20, 20);
    doc.setFontSize(10);
    yPos = 30;

    // Entry Methodology
    doc.text('Entry Methodology:', 20, yPos);
    yPos += 10;
    doc.text('- Conservative: Focus on large-cap stocks or index funds (e.g., NIFTY 50 ETF)', 25, yPos);
    yPos += 10;
    doc.text('- Moderate: Mix of large-caps and selective mid-caps', 25, yPos);
    yPos += 10;
    doc.text('- Aggressive: Include mid-caps and growth sectors', 25, yPos);
    yPos += 15;

    // Risk Management
    doc.text('Risk Management Parameters:', 20, yPos);
    yPos += 10;
    doc.text('- Stop-loss of 10-15% below entry points', 25, yPos);
    yPos += 10;
    doc.text('- Allocate 5-10% to gold or defensive assets', 25, yPos);
    yPos += 10;
    doc.text('- Maintain 15-20% cash reserve', 25, yPos);
    yPos += 15;

    // Exit Triggers
    doc.text('Exit Triggers:', 20, yPos);
    yPos += 10;
    doc.text('- Partial profits at +10% in 6 months', 25, yPos);
    yPos += 10;
    doc.text('- Full exit if key support levels breached', 25, yPos);

    // Footer
    doc.setFontSize(8);
    doc.setTextColor(100);
    const pageCount = (doc.internal as any).getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.text(`Page ${i} of ${pageCount} | Generated on March 22, 2025`, 20, 280);
    }

    // Save the PDF
    doc.save('SP500_Corrections_Report.pdf');
  };

  return (
    <div className="app-container">
      <Navbar bg="white" expand="lg" className="border-bottom fixed-top">
        <Container fluid>
          <Button 
            variant="outline-primary" 
            className="d-lg-none me-2"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <i className="bi bi-list"></i>
          </Button>
          <Navbar.Brand href="#home" className="fw-bold">
            S&P 500 Returns After 10% Corrections
          </Navbar.Brand>
          <div className="ms-auto d-flex align-items-center">
            <div className="report-date me-3 d-none d-md-block">March 2025</div>
            <Button variant="primary" size="sm" onClick={generatePDF}>
              Download PDF
            </Button>
          </div>
        </Container>
      </Navbar>

      <Container fluid className="content-container">
        <Row>
          <Col lg={3} className={`sidebar d-lg-block ${sidebarOpen ? 'd-block' : 'd-none'} border-right`}>
            <Nav className="flex-column sticky-top pt-4" activeKey={activeSection}>
              {sections.map(section => (
                <Nav.Link 
                  key={section.id}
                  eventKey={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    setSidebarOpen(false);
                  }}
                  className={activeSection === section.id ? 'active' : ''}
                >
                  {section.title}
                </Nav.Link>
              ))}
            </Nav>
          </Col>
          <Col lg={9} className="main-content py-4">
            {renderSection(activeSection)}
          </Col>
        </Row>
      </Container>

      <footer className="bg-light border-top py-3 text-center">
        <Container>
          <small className="text-muted">Investment Research Report • By Kasduck</small>
        </Container>
      </footer>
    </div>
  );
};

export default App;