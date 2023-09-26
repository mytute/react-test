import React from 'react';

const MemoComp = ({name}) => {
  console.log("************ memo component render ******************");
  return (
    <div>{name}</div>
  )
}

export default React.memo(MemoComp);
// export default MemoComp;