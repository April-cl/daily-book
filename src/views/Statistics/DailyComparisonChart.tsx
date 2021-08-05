import * as echarts from 'echarts';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ChartWrapper = styled.div`
  width: 100%;
  height: 200px;
`

const DailyComparisonChart: React.FC = () => {
  const divRef = useRef(null);
  useEffect(() => {
    // @ts-ignore
    const myChart = echarts.init(divRef.current);
    myChart.setOption({
      grid: {
        x: '40px',
        y: '40px',
        x2: '20px',
        y2: '20px'
      },
      tooltip: {},
      xAxis: {
        type: 'category',
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
        axisTick: {
          alignWithLabel: true
        }
      },
      yAxis: {},
      series: [{
        name: '金额',
        type: 'line',
        data: [5, 20, 36, 10, 10, 20],
        itemStyle: {
          color: '#26b59a'
        }
      }]
    })
  }, [])
  return (
    <ChartWrapper ref={divRef}></ChartWrapper>
  )
}
export {DailyComparisonChart}