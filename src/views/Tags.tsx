import Layout from '../components/Layout';
import React from 'react';
import { useTags } from '../useTags';
import Icon from '../components/Icon';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TagList = styled.ul`
  background-color: #fff;
  font-size: 16px;
  li {
    display:flex;
    align-items: center;
    height: 60px;
    border-bottom: 1px solid #ccc;
    margin: 0 20px;
    .delete {
      fill: #fc2b29;
      margin-right: 20px;
      font-size: 18px;
    }
    .tag {
      flex-grow: 1;
      .chinese {
        margin-left: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .menu {
      font-size: 18px;
    }
  }
`

function Tags() {
  const {tags} = useTags()
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag.chinese}>
            <button className='delete' >
                <Icon name='delete' />
            </button>
            <Link className='tag' to={'/tags/' + tag.chinese}>
              <span className='iconName' >
                  <Icon name={tag.iconName}/>
              </span>
              <span className='chinese' >{tag.chinese}</span>
            </Link>
            <button className='menu' >
                <Icon name='menu' />
            </button>
          </li>
        )}
      </TagList>
    </Layout>
  );
}

export { Tags }