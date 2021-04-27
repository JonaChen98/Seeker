import React from 'react';
import { Puff } from '@agney/react-loading';
import './index.css'

function Loading() {
  return (
    <div id="loading_page_div">
      <Puff id="ball_triangle"  />
    </div>
  );
}

export default Loading;