import "./Servicos.css";

function Servicos() {
  return (
    <div className="servicos-page">

      <div className="page-header">
        <h1>Serviços</h1>
      </div>

      <div className="servicos-grid">

        <div className="servico-card">
          <h2>RPG</h2>

          <p>
            <strong>Duração:</strong> 60 min
          </p>

          <p>
            <strong>Valor:</strong> R$ 120,00
          </p>

          <p>
            Reeducação Postural Global para correção postural,
            alívio de dores e melhora da mobilidade.
          </p>
        </div>

        <div className="servico-card">
          <h2>Fisioterapia Ortopédica</h2>

          <p>
            <strong>Duração:</strong> 60 min
          </p>

          <p>
            <strong>Valor:</strong> R$ 100,00
          </p>

          <p>
            Tratamento de lesões musculares,
            articulares e pós-operatórias.
          </p>
        </div>

        <div className="servico-card">
          <h2>Acupuntura Sistêmica</h2>

          <p>
            <strong>Duração:</strong> 50 min
          </p>

          <p>
            <strong>Valor:</strong> R$ 110,00
          </p>

          <p>
            Técnica terapêutica baseada na medicina
            tradicional chinesa.
          </p>
        </div>

        <div className="servico-card">
          <h2>Auriculoterapia</h2>

          <p>
            <strong>Duração:</strong> 40 min
          </p>

          <p>
            <strong>Valor:</strong> R$ 80,00
          </p>

          <p>
            Estimulação de pontos específicos da orelha
            para tratamento complementar.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Servicos;