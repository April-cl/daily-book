import styled from 'styled-components';
import React from 'react';
import Icon from '../../components/Icon';

const Wrapper = styled.section`
  background-color: #fff;
  flex-grow: 1;
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      padding: 12px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 20%;
      font-size: 14px;
      .iconWrapper {
        width: 40px;
        height: 40px;
        border: 1px solid #f0eff4;
        border-radius: 50%;
        background-color: #f0eff4;
        margin-bottom: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &.selected {
        color: #26b59a;
        .iconWrapper {
          background-color: #26b59a;
          fill: #fff;
        }
      }
    }
  }
`;
const TagsSection: React.FC = () => {
  return (
    <Wrapper>
      <ul>
        <li className="selected">
          <span className="iconWrapper">
            <Icon name="diet"/>
          </span>
          <span>餐饮</span>
        </li>
        <li className="selected">
          <span className="iconWrapper">
          <Icon name="clothes"/>
          </span>
          <span>服饰</span>
        </li>
        <li>
          <span className="iconWrapper">
          <Icon name="family"/>
          </span>
          <span>居家</span>
        </li>
        <li>
          <span className="iconWrapper">
          <Icon name="transportation"/>
          </span>
          <span>交通</span>
        </li>
        <li>
          <span className="iconWrapper">
          <Icon name="add"/>
          </span>
          <span>新增标签</span>
        </li>
      </ul>
    </Wrapper>
  )
}

export {TagsSection}