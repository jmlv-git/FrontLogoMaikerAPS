// src/components/CriarLogoView.tsx

import React, { useEffect, useState } from 'react';

interface CriarLogoViewProps {
  onSubmit: (data: any) => Promise<string>;
  logoSrc?: string;//blob
}

const CriarLogoView: React.FC<CriarLogoViewProps> = ({ onSubmit, logoSrc }) => {
  const [formData, setFormData] = useState({
    tipoOrganizacao: '',
    ramoAtuacao: '',
    diferenciais: '',
    cores: '',
    elementos: '',
  });

  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const imageUrl = await onSubmit(formData);
      setImageSrc(imageUrl);
    } catch (error) {
      console.error('Erro ao criar a logo:', error);
    }
  };

  useEffect(() => {
    if (logoSrc) {
      // Se o logoSrc for fornecido, exiba a imagem
      setImageSrc(logoSrc);
    }
  }, [logoSrc]);

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
      <h1>Logo Gerada:</h1>
      <div>
        
      {imageSrc && <img src={imageSrc} alt="Logo" />}
      </div>
    </div>
  );
};

export default CriarLogoView;
