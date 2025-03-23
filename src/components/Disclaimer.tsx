import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Disclaimer: React.FC = () => {
  return (
    <Container id="disclaimer" className="mb-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="report-card border">
            <Card.Header className="report-card-header">
              <h2 className="section-title">Disclaimer</h2>
            </Card.Header>
            <Card.Body className="report-card-body">
              <div className="text-muted small">
                <p>
                  Past performance is not indicative of future results. This report is for informational
                  purposes only and does not constitute investment advice. Market investments involve risk and
                  may result in loss of principal.
                </p>
                <p>
                  The information contained in this report has been obtained from sources believed to be reliable, 
                  but we cannot guarantee its accuracy or completeness. The opinions expressed are based on our 
                  current analysis and may change without notice.
                </p>
                <p>
                  This document is intended for qualified investors only and should not be distributed, published, 
                  or reproduced, in whole or in part without prior written consent. Recipients should consult with 
                  their financial advisor before making any investment decisions.
                </p>
                <p>
                  The S&P 500 is an unmanaged index of 500 widely held stocks. It is not possible to invest directly 
                  in an index. The NIFTY 50 is a benchmark Indian stock market index that represents the weighted 
                  average of 50 Indian company stocks in various sectors.
                </p>
                <p>
                  Individual investment decisions should be made in consultation with a qualified financial 
                  advisor considering personal financial goals and risk tolerance. The recommendations in this report 
                  may not be suitable for all investors.
                </p>
                <p>
                  Copyright © 2025. All rights reserved.
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Disclaimer;