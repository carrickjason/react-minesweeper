import React from 'react';
import Timer from './Timer';
const Scoreboard = ({numRemainingFlags, delay, children}) => {
    return (
      <div>
        {children}
        <p>flags left: {numRemainingFlags}</p>
        <p>Seconds ticked: <Timer delay={delay}/></p>
      </div>
    );
};

export default Scoreboard;
