import React from 'react';
import { Row, Col, Typography, Card } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import postQL from '../images/postQL.png';
import graphQL from '../images/graphQL.png';
import database from '../images/database.png';
const { Title } = Typography;

export default function Page2() {
  return (
    <div className="page-wrapper page2">
      <div className="page">
        <Row gutter={[40, 40]}>
          <Col span={24}>
            <div className="design-card main-card">
              <Row align="stretch" style={{ alignItems: 'center' }}>
                <Col xs={24} sm={10}>
                  <Title level={3}>
                    Most Recently Launched Project: PostQL (100+ Github stars)
                  </Title>
                  <Row xs={24} sm={10}>
                    PostQL is a web-based dev tool that helps you optimize the
                    performance of your GraphQL endpoints and design efficient
                    resolvers by providing detailed performance metrics for your
                    queries.
                  </Row>
                  <Row className="design-values">
                    <Col xs={12} sm={8}>
                      <img alt="certainty" src={graphQL} />

                      <h4>Endpoint testing</h4>
                    </Col>
                    <Col xs={12} sm={8}>
                      <img alt="meaningful" src={database} />
                      <h4>Query caching</h4>
                    </Col>
                    <Col xs={24} sm={8}>
                      <img
                        alt="growth"
                        src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*NvhsRKmTLwUAAAAAAAAAAABkARQnAQ"
                      />
                      <h4>Performance visualizations</h4>
                    </Col>
                  </Row>
                </Col>
                <Col xs={24} sm={14} style={{ padding: '30px' }}>
                  <Row type="flex" style={{ justifyContent: 'center' }}>
                    <Card
                      className="card"
                      style={{ width: 500 }}
                      cover={<img alt="example" src={postQL} />}
                    ></Card>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

// <OverPack component="section" className="page-wrapper page2">
//       <QueueAnim
//         type="bottom"
//         className="page text-center"
//         leaveReverse
//         key="page"
//       >
//         <h2 key="title">Most Recently Launched Project - PostQL</h2>
//         <QueueAnim type="bottom" className="info-content" key="content">
//           <b className="main-info" key="1">
//             100+ Github stars
//           </b>
//           <br></br>
//           <b className="main-info" key="2">
//             PostQL is a web application that specializes in providing metrics
//             for your GraphQL endpoint and then utilizing that data further to
//             provide detailed, historic analytical data. We help you implement
//             structured automatic testing on your GraphQL endpoint as well as
//             giving you all the data you need to make your application more
//             performant.
//           </b>
//         </QueueAnim>
//       </QueueAnim>
//     </OverPack>
