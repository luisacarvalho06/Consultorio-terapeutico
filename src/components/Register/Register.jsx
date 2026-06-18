import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import "../Auth/auth.css";

function Register() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");
  const [carregando, setCarregando] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro("");
    setSucesso("");

    if (senha !== confirmarSenha) {
      setErro("As senhas não coincidem.");
      return;
    }

    if (senha.length < 6) {
      setErro("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    setCarregando(true);

    const { error } = await supabase.auth.signUp({
      email,
      password: senha,
      options: {
        data: { nome },
      },
    });

    setCarregando(false);

    if (error) {
      if (error.message.includes("already registered")) {
        setErro("Este e-mail já está cadastrado.");
      } else {
        setErro("Erro ao criar conta. Tente novamente.");
      }
      return;
    }

    setSucesso("Conta criada! Verifique seu e-mail para confirmar o cadastro.");
    setTimeout(() => navigate("/"), 3000);
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleSubmit}>
        <div className="voltar-topo">
          <Link to="/">← Voltar</Link>
        </div>

        <h2>Criar Conta</h2>

        {erro && <div className="auth-erro">{erro}</div>}
        {sucesso && <div className="auth-sucesso">{sucesso}</div>}

        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Senha (mínimo 6 caracteres)"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Confirmar senha"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
          required
        />

        <button type="submit" disabled={carregando}>
          {carregando ? "Criando conta..." : "Criar Conta"}
        </button>
      </form>
    </div>
  );
}

export default Register;