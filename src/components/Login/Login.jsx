import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErro("");
    setCarregando(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setCarregando(false);

    if (error) {
      if (error.message.includes("Invalid login credentials")) {
        setErro("E-mail ou senha incorretos.");
      } else if (error.message.includes("Email not confirmed")) {
        setErro("Confirme seu e-mail antes de entrar.");
      } else {
        setErro("Erro ao fazer login. Tente novamente.");
      }
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Acesse o sistema</h1>

          {erro && <div className="auth-erro">{erro}</div>}

          <div className="input-field">
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FaUser className="icon" />
          </div>

          <div className="input-field">
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaLock className="icon" />
          </div>

          <div className="recall-forget">
            <label>
              <input type="checkbox" />
              Lembre de mim
            </label>
            <Link to="/forgot-password">Esqueceu sua senha?</Link>
          </div>

          <button type="submit" disabled={carregando}>
            {carregando ? "Entrando..." : "Entrar"}
          </button>

          <div className="signup-link">
            <p>
              Não tem conta?
              <Link to="/register"> Criar Conta</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;