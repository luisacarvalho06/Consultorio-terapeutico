import { useState } from "react";
import AtendimentoForm from "./AtendimentoForm";

function AtendimentoModal({
  onClose,
  atendimentos,
  setAtendimentos
}) {

  const [formData, setFormData] = useState({
    paciente: "",
    profissional: "",
    servico: "",
    data: "",
    horario: "",
    status: ""
  });

  const salvarAtendimento = () => {

    const novoAtendimento = {
      id: Date.now(),
      ...formData
    };

    setAtendimentos([
      ...atendimentos,
      novoAtendimento
    ]);

    onClose();
  };

  return (
    <div className="modal-overlay">

      <div className="modal">

        <h2>Novo Atendimento</h2>

        <AtendimentoForm
          formData={formData}
          setFormData={setFormData}
        />

        <div className="modal-actions">

          <button onClick={onClose}>
            Cancelar
          </button>

          <button onClick={salvarAtendimento}>
            Salvar
          </button>

        </div>

      </div>

    </div>
  );
}

export default AtendimentoModal;