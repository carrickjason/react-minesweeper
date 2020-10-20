import React from 'react';
import styles from './styles';

function Cell({isSwept, isFlagged, children, clickHandler}){
  let cellStyle = (isSwept) ?
      styles.sweptCell :
      styles.cell;

  let content = '';
  if (isSwept) {
    content = children;
  } else if (isFlagged) {
    content = '🚩';
  }

  return (
      <div
          style={cellStyle}
          onClick={clickHandler}
      >
        {content}
      </div>
  );
}
export default Cell;
