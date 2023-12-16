// src/components/CriarLogoView.tsx

import React, { useState } from 'react';

interface CriarLogoViewProps {
  onSubmit: (data: any) => void;
}

const CriarLogoView: React.FC<CriarLogoViewProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    tipoOrganizacao: '',
    ramoAtuacao: '',
    diferenciais: '',
    cores: '',
    elementos: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <div>
      <h1>Criar Logo</h1>
      <div>
        <label>Tipo da Organização:</label>
        <input type="text" name="tipoOrganizacao" onChange={handleChange} />
      </div>
      <div>
        <label>Ramo de Atuação:</label>
        <input type="text" name="ramoAtuacao" onChange={handleChange} />
      </div>
      <div>
        <label>Diferenciais:</label>
        <input type="text" name="diferenciais" onChange={handleChange} />
      </div>
      <div>
        <label>Cores (opcional):</label>
        <input type="text" name="cores" onChange={handleChange} />
      </div>
      <div>
        <label>Elementos (opcional):</label>
        <input type="text" name="elementos" onChange={handleChange} />
      </div>
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
};

export default CriarLogoView;
