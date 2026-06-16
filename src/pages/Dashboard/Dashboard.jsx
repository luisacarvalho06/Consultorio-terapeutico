import { Routes, Route } from "react-router-dom";
import "./Dashboard.css";

import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";

import Agenda from "../Agenda/Agenda";
import Pacientes from "../Pacientes/Pacientes";
import Profissionais from "../Profissionais/Profissionais";
import Servicos from "../Servicos/Servicos";
import Financeiro from "../Financeiro/Financeiro";
import Whatsapp from "../Whatsapp/Whatsapp";
import Atendimentos from "../Atendimentos/Atendimentos";

function Dashboard() {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="main-content">
        <Topbar />

        <div className="page-content">
          <Routes>

            {/* Página inicial do Dashboard */}
            <Route
              index
              element={
                <div className="dashboard-container">
                  <h1>Dashboard</h1>

                  <div className="cards-container">

                    <div className="card">
                      <h3>Pacientes</h3>
                      <p>128</p>
                    </div>

                    <div className="card">
                      <h3>Consultas Hoje</h3>
                      <p>12</p>
                    </div>

                    <div className="card">
                      <h3>Profissionais</h3>
                      <p>2</p>
                    </div>

                    <div className="card">
                      <h3>Faturamento</h3>
                      <p>R$ 5.200</p>
                    </div>

                  </div>
                </div>
              }
            />

            <Route path="agenda" element={<Agenda />} />
            <Route path="pacientes" element={<Pacientes />} />
            <Route path="profissionais" element={<Profissionais />} />
            <Route path="servicos" element={<Servicos />} />
            <Route path="financeiro" element={<Financeiro />} />
            <Route path="whatsapp" element={<Whatsapp />} />
            <Route path="atendimentos" element={<Atendimentos />} />

          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;