import React from 'react'
import Timer from './Timer'

const Scoreboard = ({ numRemainingFlags, delay }) => {
  return (
    <div className="text-xl text-center flex w-1/2 m-auto bg-gray-400 mb-12 divide-x divide-gray-800 divide-solid p-3 rounded">
      <p className="w-1/2">Flags Left: {numRemainingFlags}</p>
      <p className="w-1/2">
        Game Time: <Timer delay={delay} />
      </p>
    </div>
  )
}

export default Scoreboard
