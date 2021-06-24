import React from 'react';

const requireAll = (requireContext: __WebpackModuleApi.RequireContext) => {requireContext.keys().map(requireContext);}
const req = require.context('icons', false, /\.svg$/)
requireAll(req)

type Props= {
  name: string
}

const Icon = (props: Props) => {
  return (
    <svg className="icon">
      <use xlinkHref={'#' + props.name}/>
    </svg>
  );
}

export default Icon