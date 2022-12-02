import React, { useEffect, useState } from "react";
import Vote from "../components/Vote";
import Modal from "../components/Modal/Modal";
import Message from "../components/Message";
import Button from "../components/Buttons/Button";
import { useParams } from "react-router-dom";
import { setVoteService } from "../shared/services";
import useAuth from "../shared/hooks/useAuth";
import Loading from "../components/Loading";
import ButtonTo from "../components/Buttons/ButtonTo";

const ScoreVote = () => {
  const [value, setValue] = useState(1);
  const { user, token, logout } = useAuth();
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const path = `${id}?vote=${value}`;

  const handleVote = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await setVoteService(path, token);
      setResponse(data.message);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (error)
    return (
      <Modal>
        {error === "jwt expired" ? (
          <>
            <Message text={"Tu sesión ha expirado"} />
            <ButtonTo
              to={"/login"}
              text="Login"
              classe="modal__button"
              handleclick={logout}
            />
          </>
        ) : (
          <>
            <Message text={error} />
            <ButtonTo text="Home" classe="modal__button" />
          </>
        )}
      </Modal>
    );
  if (loading) return <Loading classe="loader__products" />;
  if (!user)
    return (
      <Modal>
        <Message text={"Debes iniciar sesión"} />
        <ButtonTo to={"/login"} text="login" classe="modal__button" />
      </Modal>
    );
  if (response)
    return (
      <Modal>
        <Message text={response} />
        <ButtonTo to={"/profile"} text="Volver" classe="modal__button" />
      </Modal>
    );

  return (
    <div className="page__container">
      <Modal>
        <Message text={"¿Que te ha parecido ?"} />
        <Vote setValue={setValue} value={value} />
        <Button
          text={"Enviar !"}
          classe={"button__logout"}
          handleClick={handleVote}
        />
      </Modal>
    </div>
  );
};

export default ScoreVote;
