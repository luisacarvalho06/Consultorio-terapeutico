import { useState } from "react";
import "./Atendimentos.css";

import AtendimentoTabela from "./AtendimentoTabela";
import AtendimentoModal from "./AtendimentoModal";

function Atendimentos() {

  const [showModal, setShowModal] = useState(false);

  const [atendimentos, setAtendimentos] = useState([]);

  return (
    <div>

      <div className="page-header">
        <h1>Atendimentos</h1>

        <button
          className="novo-btn"
          onClick={() => setShowModal(true)}
        >
          + Novo Atendimento
        </button>
      </div>

      <AtendimentoTabela
        atendimentos={atendimentos}
      />

      {showModal && (
        <AtendimentoModal
          onClose={() => setShowModal(false)}
          atendimentos={atendimentos}
          setAtendimentos={setAtendimentos}
        />
      )}

    </div>
  );
}

export default Atendimentos;