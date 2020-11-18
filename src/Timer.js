import React, { useState, useEffect, useRef } from 'react'

function useInterval(callback, delay) {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay != null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

function Timer({ delay }) {
  let [ticks, setTicks] = useState(0)
  let [currentDelay, setCurrentDelay] = useState(null)

  useInterval(() => {
    setTicks(ticks + 1)
  }, currentDelay)

  useEffect(() => {
    setCurrentDelay(delay)
  }, [delay])
  return <span className="text-2xl ml-8">{ticks}</span>
}

export default Timer
