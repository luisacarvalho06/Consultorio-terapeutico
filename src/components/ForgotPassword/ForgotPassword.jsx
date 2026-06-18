import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import "../Auth/auth.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");
  const [carregando, setCarregando] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro("");
    setSucesso("");
    setCarregando(true);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    setCarregando(false);

    if (error) {
      setErro("Erro ao enviar o e-mail. Verifique o endereço e tente novamente.");
      return;
    }

    setSucesso("E-mail enviado! Verifique sua caixa de entrada para redefinir a senha.");
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleSubmit}>
        <div className="voltar-topo">
          <Link to="/">← Voltar</Link>
        </div>

        <h2>Recuperar Senha</h2>
        <p>Informe seu e-mail para receber o link de recuperação.</p>

        {erro && <div className="auth-erro">{erro}</div>}
        {sucesso && <div className="auth-sucesso">{sucesso}</div>}

        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit" disabled={carregando}>
          {carregando ? "Enviando..." : "Enviar Link"}
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;