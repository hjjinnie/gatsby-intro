import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import { page1 } from './data';

export default function Page1() {
  const children = page1.map((card, i) => (
    <Col className="card-wrapper" key={i.toString()} md={8} xs={24}>
      <div className="card">
        <h3>{card.title}</h3>
        <img className={card.class} src={card.img} alt="" />
        <div className="card-body">
          <span className="description text-secondary">{card.description}</span>
        </div>
      </div>
    </Col>
  ));

  return (
    <section className="page-wrapper page1">
      <div className="page text-center">
        <h2 fontSize="32px" class="page-wrapper" key="title">
          My Skill Set
        </h2>
        <div className="info-content" key="content">
          <p className="main-info" key="2">
            I am a full stack engineer, experienced in working with React,
            NodeJS, and AWS. I also enjoy learning new technologies.
          </p>
        </div>
      </div>
      <span key="line" className="separator" />
      <QueueAnim
        component={Row}
        type="bottom"
        className="page row text-center"
        delay={500}
      >
        {children}
      </QueueAnim>
    </section>
  );
}
