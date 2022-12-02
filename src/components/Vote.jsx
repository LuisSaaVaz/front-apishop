
import Star from './Icons/Star'

const Vote = ({ value, setValue}) => {
  
  return (
    <div>
      <span className='' onClick={() => setValue(1)}>
        {value >= 1 ? <Star fill={'#FD6C67'} /> : <Star />}
      </span>
      <span  className=''onClick={() => setValue(2)}>
        {value >= 2 ? <Star fill={'#FD6C67'} /> : <Star />}
      </span>
      <span  className=''onClick={() => setValue(3)}>
        {value >= 3 ? <Star fill={'#FD6C67'} /> : <Star />}
      </span>
      <span className='' onClick={() => setValue(4)}>
        {value >= 4 ? <Star fill={'#FD6C67'} /> : <Star />}
      </span>
      <span className='' onClick={() => setValue(5)}>
        {value >= 5 ? <Star fill={'#FD6C67'} /> : <Star />}
      </span>
    </div>
  )
}

export default Vote
