import reactRedux from '../images/reactredux.png';
import nodeJs from '../images/nodejs.png';
import aws from '../images/aws.png';
import fitpal from '../images/fitpal3.png';
import tufts from '../images/tufts.png';
import bc from '../images/bc.png';

export const assets = 'https://gw.alipayobjects.com/os/s/prod/antv/assets';
const base = 'https://antv.alipay.com/';
export const page1 = [
  {
    img: reactRedux,
    class: 'react',
    title: 'Frontend',
    description: 'React, Redux，Typescript, GraphQL, SASS',
  },
  {
    img: nodeJs,
    class: 'node',
    title: 'Backend',
    description: 'NodeJS, Express, SQL/NoSQL, OAuth, JWT',
  },
  {
    img: aws,
    class: 'aws',
    title: 'Deployment',
    description: 'AWS (i.e ELB/EC2/RDS), Docker',
  },
];

export const page3 = [
  {
    img: fitpal,
    title: 'FitPal',
    description: 'Fitness Partner Finder',
    description2:
      'Built with React, ExpressJS, and MongoDB and authenticated with JWT tokens',
  },
  {
    img: `${assets}/image/home/features-professional-1c6d1.svg`,
    title: 'Frecco',
    description: 'Business Review Aggregator',
    description2:
      'Built with React, Redux, and ExpressJS and authenticated with cookies',
  },
  {
    img: `${assets}/image/home/features-powerful-243e3.svg`,
    title: 'BusyBazaar',
    description: 'Marketplace for Hard-to-Find Foreign Items',
    description2:
      'Built with React and ExpressJS and authenticated with OAuth2.0',
  },
];

export const page4 = [
  {
    name: '陈为',
    profile: '浙江大学计算机学院 CAD & CG 国家重点实验室教授 可视化专家',
    avatar: 'https://os.alipayobjects.com/rmsportal/CcFeLxXurbQmwrT.jpg',
    comment:
      '在多年可视化设计与开发的积累基础上，蚂蚁金服团队推出了 AntV 产品，这是工业界在基础可视化语法与实践方面发出的最强声音，也是工业界与学术界一道推进可视化研发进展的最佳利器。',
  },
  {
    name: '林峰',
    profile: '爱烹饪的数据可视化攻城狮',
    avatar: 'https://zos.alipayobjects.com/rmsportal/wtkIALmYDSmOIiAalkdv.jpg',
    comment:
      'G2 是面粉，ECharts 是面条，皆微小但美好，因小食材怀大梦想，助力共筹东方巨龙崛起之盛宴，迎四海饕客。',
  },
];

export const page5 = [
  tufts,
  `${assets}/image/home/alipay-fceea.png`,
  `${assets}/image/home/tmall-cb94f.png`,
  `${assets}/image/home/taobao-ade5b.png`,
  bc,
  `${assets}/image/home/jd-23e52.png`,
  `${assets}/image/home/yunos-2edef.png`,
  `${assets}/image/home/cainiao-40fc8.png`,
];
