import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { page4, assets } from './data';
import { Row, Col, Typography, Card } from 'antd';
import postQL from '../images/postQL.png';
import graphQL from '../images/graphQL.png';
import database from '../images/database.png';
import video from '../video/final2.mp4';
const { Title } = Typography;

export default function Page4(props) {
  return (
    <div className="page-wrapper page2">
      <div className="page">
        <Row gutter={[40, 40]}>
          <Col>
            <div className="design-card main-card">
              <Row align="stretch" type="flex" style={{ alignItems: 'center' }}>
                <Col xs={24} sm={14}>
                  <Row
                    type="flex"
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                  >
                    <Card
                      className="card"
                      style={{ width: 500 }}
                      cover={
                        <video controls>
                          {' '}
                          <source type="video/mp4" src={video} />
                        </video>
                      }
                    ></Card>
                  </Row>
                </Col>
                <Col xs={24} sm={10} style={{ padding: '30px' }}>
                  <br></br>
                  <br></br>
                  <br></br>
                  <Title level={3}>
                    Most Recent Public Talk: Why React-Hooks and Redux?
                  </Title>
                  <Row xs={24} sm={10}>
                    Built with Code NYC - SingleSprout Speaker Series
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

// cover={<img alt="example" src={postQL} />}
