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

const TagsComparisonChart: React.FC<Props> = (props) => {
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
          data: props.data
        }
      ]
    })
  }, [props.data])
  return (
    <ChartWrapper ref={divRef}></ChartWrapper>
  )
}
export {TagsComparisonChart}