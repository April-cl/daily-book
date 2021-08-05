import * as echarts from 'echarts';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ChartWrapper = styled.div`
  width: 100%;
  height: 200px;
`

type Props = {
  data: {
    date: string[],
    amount: number[]
  }
}

const DailyComparisonChart: React.FC<Props> = (props) => {
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
        data: props.data.date,
        axisTick: {
          alignWithLabel: true
        }
      },
      yAxis: {},
      series: [{
        name: '金额',
        type: 'line',
        data: props.data.amount,
        itemStyle: {
          color: '#26b59a'
        }
      }]
    })
  }, [props])
  return (
    <ChartWrapper ref={divRef}></ChartWrapper>
  )
}
export {DailyComparisonChart}