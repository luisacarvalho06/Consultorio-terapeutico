import { useState, useEffect } from "react";
import ProntuarioForm from "./ProntuarioForm";

function ProntuarioModal({
    onClose,
    prontuarios,
    setProntuarios,
    prontuarioEditando
}) {

    const [formData, setFormData] = useState({
        paciente: "",
        dataCriacao: "",
        queixaPrincipal: "",
        historicoClinico: "",
        avaliacaoFisica: "",
        planoTerapeutico: "",
        observacoes: ""
    });

    const [novaEvolucao, setNovaEvolucao] = useState("");

    useEffect(() => {

        if (prontuarioEditando) {

            setFormData({
                ...prontuarioEditando,
                evolucoes: prontuarioEditando.evolucoes || []
            });

        } else {

            setFormData({
                paciente: "",
                dataCriacao: new Date()
                    .toLocaleDateString("pt-BR"),
                queixaPrincipal: "",
                historicoClinico: "",
                avaliacaoFisica: "",
                planoTerapeutico: "",
                observacoes: "",
                evolucoes: []
            });
        }

    }, [prontuarioEditando]);

    const salvarProntuario = () => {

        if (
            !formData.paciente ||
            !formData.queixaPrincipal
        ) {

            alert(
                "Paciente e Queixa Principal são obrigatórios."
            );

            return;
        }

        if (prontuarioEditando) {

            setProntuarios(
                prontuarios.map((prontuario) =>
                    prontuario.id === prontuarioEditando.id
                        ? {
                            ...formData,
                            id: prontuario.id
                        }
                        : prontuario
                )
            );

        } else {

            const novoProntuario = {
                id: Date.now(),
                ...formData
            };

            setProntuarios([
                ...prontuarios,
                novoProntuario
            ]);
        }

        onClose();
    };

    const adicionarEvolucao = () => {

        if (!novaEvolucao.trim()) return;

        const evolucao = {
            id: Date.now(),
            data: new Date().toLocaleDateString("pt-BR"),
            texto: novaEvolucao
        };

        setFormData({
            ...formData,
            evolucoes: [
                ...formData.evolucoes,
                evolucao
            ]
        });

        setNovaEvolucao("");
    };

    return (

        <div className="modal-overlay">

            <div className="modal">

                <h2>
                    {prontuarioEditando
                        ? "Editar Prontuário"
                        : "Novo Prontuário"}
                </h2>

                <ProntuarioForm
                    formData={formData}
                    setFormData={setFormData}
                />

                <hr />

                <h3>Evoluções</h3>

                <textarea
                    placeholder="Digite a evolução do paciente..."
                    value={novaEvolucao}
                    onChange={(e) =>
                        setNovaEvolucao(e.target.value)
                    }
                />

                <div className="evolucoes-lista">

                    {(formData.evolucoes || []).map((evolucao) => (

                        <div
                            key={evolucao.id}
                            className="evolucao-card"
                        >

                            <strong>
                                {evolucao.data}
                            </strong>

                            <p>
                                {evolucao.texto}
                            </p>

                        </div>

                    ))}

                </div>

                <div className="modal-actions">

                    <button onClick={onClose}>
                        Cancelar
                    </button>

                    <button
                        type="button"
                        className="btn-evolucao"
                        onClick={adicionarEvolucao}>
                        + Evolução
                    </button>

                    <button onClick={salvarProntuario}>
                        Salvar
                    </button>

                </div>

            </div>

        </div>

    );
}

export default ProntuarioModal;