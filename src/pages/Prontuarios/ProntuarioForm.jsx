import { useClinica } from "../../context/ClinicaContext";

function ProntuarioForm({
    formData,
    setFormData
}) {

    const { pacientes } = useClinica();

    return (

        <div className="prontuario-form-grid">

            <select
                value={formData.paciente}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        paciente: e.target.value
                    })
                }
            >
                <option value="">
                    Selecione um paciente
                </option>

                {pacientes.map((paciente) => (

                    <option
                        key={paciente.id}
                        value={paciente.nome}
                    >
                        {paciente.nome}
                    </option>

                ))}
            </select>

            <input
                type="text"
                placeholder="Data de criação"
                value={formData.dataCriacao}
                disabled
            />

            <textarea
                placeholder="Queixa Principal"
                value={formData.queixaPrincipal}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        queixaPrincipal: e.target.value
                    })
                }
            />

            <textarea
                placeholder="Histórico Clínico"
                value={formData.historicoClinico}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        historicoClinico: e.target.value
                    })
                }
            />

            <textarea
                placeholder="Avaliação Física"
                value={formData.avaliacaoFisica}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        avaliacaoFisica: e.target.value
                    })
                }
            />

            <textarea
                placeholder="Plano Terapêutico"
                value={formData.planoTerapeutico}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        planoTerapeutico: e.target.value
                    })
                }
            />

            <textarea
                placeholder="Observações"
                value={formData.observacoes}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        observacoes: e.target.value
                    })
                }
            />

        </div>

    );
}

export default ProntuarioForm;