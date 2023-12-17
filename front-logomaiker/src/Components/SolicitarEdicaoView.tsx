// SolicitarEdicaoView.tsx
import React, { useState, ChangeEvent } from 'react';

interface SolicitarEdicaoViewProps {
  imagem: string;
  onEnviar: (texto1: string, texto2: string) => void;
}

const SolicitarEdicaoView: React.FC<SolicitarEdicaoViewProps> = ({ imagem, onEnviar }) => {
  const [texto1, setTexto1] = useState<string>('');
  const [texto2, setTexto2] = useState<string>('');

  const handleTexto1Change = (event: ChangeEvent<HTMLInputElement>) => {
    setTexto1(event.target.value);
  };

  const handleTexto2Change = (event: ChangeEvent<HTMLInputElement>) => {
    setTexto2(event.target.value);
  };

  const handleEnviarClick = () => {
    onEnviar(texto1, texto2);
  };

  return (
    <div>
        
      <img src={imagem} alt="Imagem" />
      <h3>Solicitar Edição</h3>
      <div>
        <label>Descrição da Edição:</label>
        <input type="text" value={texto1} onChange={handleTexto1Change} />
      </div>
      <div>
        <label>Prazo para entrega: (dd/mm/yyyy)</label>
        <input type="text" value={texto2} onChange={handleTexto2Change} />
      </div>
      <button onClick={handleEnviarClick}>Enviar</button>
    </div>
  );
};

export default SolicitarEdicaoView;
