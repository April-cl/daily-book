import * as echarts from 'echarts';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ChartWrapper = styled.div`
  width: 100%;
  height: 300px;
`

type Props = {
  data: {
    value: number,
    name: string
  }[]
}

const TagsComparisonChart: React.FC = () => {
  const divRef = useRef(null);
  useEffect(() => {
    // @ts-ignore
    const myChart = echarts.init(divRef.current);
    myChart.setOption({
      tooltip: {},
      series: [
        {
          type: 'pie',
          radius: [10, 100],
          center: ['50%', '50%'],
          roseType: 'area',
          itemStyle: {
            borderRadius: 4
          },
          data: [
            {value: 40, name: 'rose 1'},
            {value: 38, name: 'rose 2'},
            {value: 32, name: 'rose 3'},
            {value: 30, name: 'rose 4'},
            {value: 28, name: 'rose 5'},
            {value: 26, name: 'rose 6'},
            {value: 22, name: 'rose 7'},
            {value: 18, name: 'rose 8'}
          ]
        }
      ]
    })
  }, [])
  return (
    <ChartWrapper ref={divRef}></ChartWrapper>
  )
}
export {TagsComparisonChart}