import Heart from '../Icons/Heart'


export const ButtonWithLike = ({ onClick }) => {
    
    return (
      <button className="buttonlike__button" onClick={onClick}>
        <Heart fill={'#FD6C67'} />
      </button>
    )
}