import FormTittle from "../components/Forms/FormTittle";
import { useState } from "react";

import FormLogin from "../components/Forms/FormLogin";
import { loginUserService } from "../shared/services";
import useAuth from "../shared/hooks/useAuth";
import Message from "../components/Message";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(false);
  const { login, logout } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      setloading(true);
      setError("");
      const { accessToken } = await loginUserService(data);
      login(accessToken);
      if (login) navigate("/");
      setloading(false);
    } catch (e) {
      logout();
      setError(e.message);
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="main__section">
      <section className="form form__login">
        <FormTittle
          title="¡Hola de Nuevo!"
          text="Puedes iniciar Sesion abajo"
        />
        <FormLogin onSubmit={onSubmit} loading={loading} />

        {error ? (
          <Message className={"form__error__login"} text={error} />
        ) : null}
      </section>
    </div>
  );
};

export default Login;
