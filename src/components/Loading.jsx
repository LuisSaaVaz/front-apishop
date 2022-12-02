import React from 'react'
import useWait from '../shared/hooks/useWait'
import Loader from './Icons/Loader'

const Loading = ({ classe }) => {
  const { ready } = useWait()

  return <div className={classe}>{ready ? <Loader /> : null}</div>
}

export default Loading
