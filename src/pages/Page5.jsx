import React from 'react';
import { Row, Col } from 'antd';
import tufts from '../images/tufts.png';
import bc from '../images/bc.png';

export default function Page5() {
  return (
    <div className="page-wrapper page5 text-center">
      <div type="bottom" leaveReverse className="page" key="a">
        <h2 key="h2">Education</h2>
        <Row type="flex" style={{ justifyContent: 'center' }}>
          <span>
            <Col xs="24" style={{ minHeight: '100px' }}>
              <img className="tufts" src={tufts} alt="tufts" />
              <p className="txt" style={{ textAlign: 'center' }}>
                M.S. in Environmental Engineering
              </p>
            </Col>
          </span>
          <div>
            <Col xs="24" style={{ minHeight: '100px' }}>
              <img className="bc" src={bc} alt="bc" />
              <p className="txt" style={{ textAlign: 'center' }}>
                B.S. in Environmental Geo-Science
              </p>
            </Col>
          </div>
        </Row>
      </div>
    </div>
  );
}
