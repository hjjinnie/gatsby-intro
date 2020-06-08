import React from 'react';
import { Row, Col } from 'antd';
import heart from '../images/heart.png';

function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <span>Made with </span>
        <img src={heart} alt="heart" />
        <span> from NYC</span>
      </div>
    </footer>
  );
}

export default Footer;
