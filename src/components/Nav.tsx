import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React from 'react';

require('icons/edit.svg')
require('icons/statistics.svg')
require('icons/tags.svg')

const NavWrapper = styled.nav`
  border: 1px solid blue;
  ul {
    display: flex;
    li {
      width: 33.33%;
      text-align: center;
      padding: 4px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <svg className="icon">
            <use xlinkHref='#tags' />
          </svg>
          <Link to="/tags">标签页</Link>
        </li>
        <li>
          <svg className="icon">
            <use xlinkHref='#edit' />
          </svg>
          <Link to="/edit">记账页</Link>
        </li>
        <li>
          <svg className="icon">
            <use xlinkHref='#statistics' />
          </svg>
          <Link to="/statistics">统计页</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav
