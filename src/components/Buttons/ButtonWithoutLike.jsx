import Heart from '../Icons/Heart'

export const ButtonWithoutLike = ({onClick}) => {
    return (
        <button className='buttonNolike__button' onClick={onClick}>
            <Heart fill={'white'} />
        </button>)
    
}