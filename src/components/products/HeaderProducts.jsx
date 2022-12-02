import React, { useState } from 'react'
import Categori from '../Icons/Categori'
import Locations from '../Icons/Location'
import Price from '../Icons/Price'
import '../../styles/headerProducts.css'
import Modal from '../Modal/Modal'
import useModal from '../../shared/hooks/useModal'
import modalEffects from '../../shared/helpers/modalEffects'
import CategoriesSelectModal from '../filtersProducts/CategoriesSelectModal'
import PrecioSelectModal from '../filtersProducts/PrecioSelectModal'
import LocationSelectModal from '../filtersProducts/LocationSelectModal'
import ButtonFilter from '../../components/Buttons/ButtonFilter'
import { useLocation } from 'react-router-dom'
import selectFilters from '../../shared/helpers/selectFilters'

const HeaderProducts = () => {
  const location = useLocation()
  const category = location.pathname.split('/').find((item) => item === 'category')
  const filters = selectFilters(category)

  const [selected, setSelected] = useState(false)
  const { close, modalOpen, open } = useModal()

  const { sliceIn } = modalEffects();

  const handleclik = (filter) => {
    setSelected(filter);
    open();
  };

  const printFilters = (selected) => {
    const renders = {
      Categorias: (
        <CategoriesSelectModal
          close={close}
          modalOpen={modalOpen}
        />
      ),
      Precio: (
        <PrecioSelectModal
          close={close}
          modalOpen={modalOpen}
        />
      ),
      Localidad: (
        <LocationSelectModal
          close={close}
          modalOpen={modalOpen}
        />
      ),
    };

    return renders[selected];
  };

  const render = {
    Categorias: <Categori />,
    Precio: <Price />,
    Localidad: <Locations />,
  };
  return (
    <section className="headerProducts__container">
      <ul className="headerProducts__list">
        {filters.map((filter) => {
          return (
            <ButtonFilter
              key={filter}
              handleclik={() => handleclik(filter)}
              text={filter}
            >
              {render[filter]}
            </ButtonFilter>
          );
        })}
      </ul>
      {modalOpen && (
        <Modal
          classe={"modal__filter"}
          classeBack={"white"}
          variant={sliceIn}
          handleClose={close}
        >
          {printFilters(selected)}
        </Modal>
      )}
    </section>
  );
};

export default HeaderProducts;
