import React from 'react';
import { Link } from 'gastby';

export default () => (
  <>
    <h1>Home</h1>
    <p>Hello Minnesota!</p>
    <Link to="/about/">Learn about me &rarr;</Link>
  </>
);
