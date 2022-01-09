import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.VFC = () => <ul>
  <li><Link to="/">Home</Link></li>
  <li><Link to="counter">Audio</Link></li>
</ul>;
