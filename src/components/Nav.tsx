import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import React from 'react';
import Icon from './Icon';

const NavWrapper = styled.nav`
  border: 1px solid blue;
  ul {
    display: flex;
    li {
      width: 33.33%;
      text-align: center;
      a {
        padding: 4px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        &.selected {
          color: #26b59a;
          .icon {
            fill: #26b59a;
          }
        }
      }
    }
  }
`

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName="selected">
            <Icon name='tags' />标签页
          </NavLink>
        </li>
        <li>
          <NavLink to="/edit" activeClassName="selected">
            <Icon name='edit' />记账页
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name='statistics' />统计页
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav
