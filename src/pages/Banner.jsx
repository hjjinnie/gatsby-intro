import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { Element } from 'rc-scroll-anim';
import front from '../images/front2.png';

class Banner extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    isMobile: PropTypes.bool,
    navToShadow: PropTypes.func,
  };
  static defaultProps = {
    className: 'banner',
  };
  render() {
    const { className, isMobile, navToShadow } = this.props;
    return (
      <Element
        component="section"
        className={`${className}-wrapper page`}
        onChange={navToShadow}
      >
        <div className={className}>
          <div className={`${className}-img-wrapper`}>
            {isMobile ? (
              <div>
                <img width="100%" src={front} alt="" />
                <p>Developed via Gatsby</p>
              </div>
            ) : (
              <div>
                <img src={front} alt="front" width="600" />
                <p>Developed via Gatsby</p>
              </div>
            )}
          </div>
          <QueueAnim
            type={isMobile ? 'bottom' : 'right'}
            className={`${className}-text-wrapper`}
            delay={300}
          >
            <h1 key="h1">Hey! I'm Lisa</h1>
            <p className="main-info" key="p">
              I build clean, performant user experiences, and love to write code
              that's modular and scalable. When I am not programming, you'll
              find me baking keto cookies or working on my next art
              "masterpiece".
            </p>
          </QueueAnim>
        </div>
      </Element>
    );
  }
}

export default Banner;
