export const InfoData = ({ user }) => {
  //Eliminar desde la T
  const date = user.created_at.split("T")[0];
  //separar date por - y join con / en orden inverso
  const dateArray = date.split("-");
  const dateFormated = dateArray.reverse().join("/");

  return (
    <ul className="infoData__list">
      <li className="infoData__li name">
        <span className="infoData__span">Nombre </span>
        <span className="infoData__result__span">{user.name}</span>
      </li>
      <li className="infoData__li register">
        <span className="infoData__span">Registrado </span>
        <span className="infoData__result__span">{dateFormated}</span>
      </li>
      <li className="infoData__li score">
        <span className="infoData__span">Puntuación </span>
        <span className="infoData__result__span">{user.score}</span>
      </li>
      <li className="infoData__li sale">
        <span className="infoData__span">En Venta </span>
        <span className="infoData__result__span">{user.products}</span>
      </li>
      <li className="infoData__li likes">
        <span className="infoData__span">Likes </span>
        <span className="infoData__result__span">{user.likes}</span>
      </li>
      <li className="infoData__li loves">
        <span className="infoData__span">Favoritos </span>
        <span className="infoData__result__span">{user.loves}</span>
      </li>
      <li className="infoData__li votes">
        <span className="infoData__span">Votado </span>
        <span className="infoData__result__span">{user.votes}</span>
      </li>
      <li className="infoData__li bio">
        <span className="infoData__span">Biografía </span>
        <span className="infoData__result__span">{user.bio}</span>
      </li>
    </ul>
  );
};
