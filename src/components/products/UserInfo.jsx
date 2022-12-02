import { Link } from 'react-router-dom'
import useAuth from '../../shared/hooks/useAuth'
import ButtonTo from '../Buttons/ButtonTo'

import VoteOnlyRead from '../VoteOnlyRead'
import { Like } from './Like'

export const UserInfo = ({ userInfo, productId, productStatus }) => {
  const { user, logout } = useAuth() //Para saber si el usuario esta logueado y renderizar el boton de like

  return (
    <header className="userInfo__container">
      <nav className="userInfo__nav">
        <ul className="userInfo__list">
          <Link to={`/profile/info/${userInfo.id}`}>
            <li className="userInfo__element">
              <section className="userInfo__element__container">
                <div className="userInfo__avatar__background">
                  {userInfo.avatar ? (
                    <img
                      className="userInfo__element__avatar"
                      src={`${process.env.REACT_APP_BACKEND_PUBLIC}/users/${userInfo.id}/${userInfo.avatar}`}
                      alt={userInfo.avatar}
                    />
                  ) : (
                    <img
                      className="userInfo__element__avatar"
                      src={`${process.env.REACT_APP_BACKEND_IMG_DEFAULT}/default/defaultAvatar.png`}
                      alt="Default Avatar"
                    />
                  )}
                </div>
              </section>
              <section className="userInfo__element__container">
                <p className="userInfo__element__text--name">{userInfo.name}</p>

                <p className="userInfo__element__text--products">
                  {userInfo.products} <span>Productos</span>
                </p>
              </section>
            </li>
          </Link>
          <li className="userInfo__element">
            <section className="userInfo__element__container">
              <VoteOnlyRead value={userInfo?.score} />
              <p className="userInfo__element__text--valoraciones">
                {userInfo.votes} <span>Valoraciones</span>
              </p>
            </section>
          </li>
          {user && user.id !== userInfo.id && productStatus !== 'bought' && (
            <Like productId={productId} userId={user.id} />
          )}
          {user && user.id === userInfo.id && (
            <ButtonTo
              handleclick={logout}
              text={'Logout'}
              classe={'button__logout'}
            />
          )}
        </ul>
      </nav>
    </header>
  )
}
