import React from 'react'
import Timer from './Timer'

const Scoreboard = ({ numRemainingFlags, delay }) => {
  return (
    <div className="text-xl text-center text-lightBlue flex lg:w-2/3 w-full m-auto mb-8 lg:justify-center items-center flex-col lg:flex-row">
      <p className="flex items-center justify-center lg:w-1/3 m-4 min-w-max bg-darkBlue rounded p-4">
        <span className="text-2xl mr-8">{numRemainingFlags}</span>{' '}
        {numRemainingFlags === 1 ? 'Flag' : 'Flags'} Left
      </p>
      <p className="flex items-center justify-center lg:w-1/3 m-4 min-w-max bg-darkBlue rounded p-4">
        Game Time <Timer delay={delay} />
      </p>
    </div>
  )
}

export default Scoreboard
