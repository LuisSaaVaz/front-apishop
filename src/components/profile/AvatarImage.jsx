export const AvatarImage = ({ user }) => {
  return (
    <article className="profileInfo__avatar__background">
      {user.avatar ? (
        <img
          className="profileInfo__avatar__element"
          src={`${process.env.REACT_APP_BACKEND_PUBLIC}/users/${user.id}/${user.avatar}`}
          alt={user.avatar}
        />
      ) : (
        <img
          className="profileInfo__avatar__element"
          src={`${process.env.REACT_APP_BACKEND_IMG_DEFAULT}/default/defaultAvatar.png`}
          alt="Default Avatar"
        />
      )}
    </article>
  );
};
