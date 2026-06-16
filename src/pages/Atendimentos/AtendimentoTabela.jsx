function AtendimentoTabela({ atendimentos }) {

  return (
    <table className="table">

      <thead>
        <tr>
          <th>Paciente</th>
          <th>Profissional</th>
          <th>Serviço</th>
          <th>Data</th>
          <th>Horário</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>

        {atendimentos.map((atendimento) => (

          <tr key={atendimento.id}>

            <td>{atendimento.paciente}</td>
            <td>{atendimento.profissional}</td>
            <td>{atendimento.servico}</td>
            <td>{atendimento.data}</td>
            <td>{atendimento.horario}</td>
            <td>{atendimento.status}</td>

          </tr>

        ))}

      </tbody>

    </table>
  );
}

export default AtendimentoTabela;