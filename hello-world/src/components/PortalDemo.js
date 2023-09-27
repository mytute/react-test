import React from 'react';
import ReactDOM  from 'react-dom';

const PortalDemo = () => {
  return ReactDOM.createPortal(
    <div>PortalDemo</div>,
    document.getElementById('portal-root')
  )
}

export default PortalDemo;