import { createContext, useContext, useState } from "react";

const ClinicaContext = createContext();

export function ClinicaProvider({ children }) {

  const [pacientes, setPacientes] = useState([]);

  const [profissionais] = useState([
    {
      id: 1,
      nome: "Camila Souza",
      especialidade: "Fisioterapia"
    },
    {
      id: 2,
      nome: "Carla Brito",
      especialidade: "Acupuntura"
    }
  ]);

  return (
    <ClinicaContext.Provider
      value={{
        pacientes,
        setPacientes,
        profissionais
      }}
    >
      {children}
    </ClinicaContext.Provider>
  );
}

export function useClinica() {
  return useContext(ClinicaContext);
}