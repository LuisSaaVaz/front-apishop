import React from 'react'
import SmallStar from './Icons/SmallStar'



const VoteOnlyRead = ({value}) => {
  return (
    <div>
      <span className="" >
        {value >= 1 ? <SmallStar  fill={'#FD6C67'} /> : <SmallStar />}
      </span>
      <span className="" >
        {value >= 2 ? <SmallStar fill={'#FD6C67'} /> : <SmallStar />}
      </span>
      <span className="" >
        {value >= 3 ? <SmallStar fill={'#FD6C67'} /> : <SmallStar />}
      </span>
      <span className="" >
        {value >= 4 ? <SmallStar fill={'#FD6C67'} /> : <SmallStar />}
      </span>
      <span className="" >
        {value >= 5 ? <SmallStar fill={'#FD6C67'} /> : <SmallStar />}
      </span>
    </div>
  )
}

export default VoteOnlyRead