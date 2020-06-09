import React from 'react';
import { Row, Col, Card } from 'antd';
import fitPal from '../images/fitpal.png';
import frecco from '../images/frecco.png';
import busyBazaar from '../images/busybazaar.png';

const { Meta } = Card;

export default function Page3() {
  // const children = page3.map((card, i) => (
  //   <Col key={i.toString()} md={8} xs={24}>
  //     <img src={card.img} alt="" width="100" height="100" />
  //   </Col>
  // ));
  return (
    <Row className="page-wrapper row page3 text-center">
      <div className="wrap page">
        <h2 fontSize="32px" key="title">
          Other Projects
        </h2>
        <br></br>
        <Row gutter={[40, 40]} type="flex" style={{ justifyContent: 'center' }}>
          <Col>
            <Card
              className="card"
              hoverable
              style={{ width: 340 }}
              cover={<img alt="example" src={fitPal} />}
            >
              <Meta
                title="FitPal"
                description="Fitness Partner Finder - Built with React, ExpressJS, and MongoDB and authenticated with JWT tokens"
              />
            </Card>
          </Col>
          <Col>
            <Card
              className="card"
              hoverable
              style={{ width: 340 }}
              cover={<img alt="example" src={frecco} />}
            >
              <Meta
                title="Frecco"
                description="Business Review Aggregator - Built with React, Redux, and ExpressJS and authenticated with cookies"
              />
            </Card>
          </Col>
          <Col>
            <Card
              hoverable
              className="card"
              style={{ width: 340 }}
              cover={<img alt="example" src={busyBazaar} />}
            >
              <Meta
                title="BusyBazaar"
                description="Marketplace for Hard to Get Foreign Goods - Built with React and ExpressJS and authenticated with OAuth2.0"
              />
            </Card>
          </Col>
        </Row>
      </div>
    </Row>
  );
}

// <OverPack component="section" className="page-wrapper page3 text-center">
// <QueueAnim
//   type="bottom"
//   className="page"
//   leaveReverse
//   key="page3"
//   component={Row}
// >
//   {children}
// </QueueAnim>
// </OverPack>
