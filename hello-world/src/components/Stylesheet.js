import React from 'react';
import './myStyles.css';

const Stylesheet = ({primary}) => {
    let className = primary ? 'primary' : '';
  return (
    <div>
        <h1 className={`${className} font-xl`}> Stylesheet</h1>
        <h1 className='success'>Child Success</h1>
    </div>
  )
}
export default Stylesheet;