import ButtonTo from "../Buttons/ButtonTo";

export const Pagination = ({ info }) => {
  return (
    <footer className="pagination__container">
      {/* {info.prevPage && (
				<ButtonTo
					classe={'pagination__button pagination__button--prev'}
					to={`${info.prevPage}`}
					text='Prev'
				/>
			)}
			<h3 className='pagination__title'>{info.pageView} </h3> */}
      {info.nextPage && (
        <ButtonTo
          classe={"pagination__button pagination__button--next"}
          to={`${info.nextPage}`}
          text="Cargar más"
        />
      )}
    </footer>
  );
};
