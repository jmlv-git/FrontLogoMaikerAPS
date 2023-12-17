// SolicitarEdicaoController.tsx
import React from 'react';
import SolicitarEdicaoView from './SolicitarEdicaoView';
import Api from '../Api';

interface SolicitarEdicaoControllerProps {
  imagem: string;
}

const SolicitarEdicaoController: React.FC<SolicitarEdicaoControllerProps> = ({ imagem }) => {
  const handleEnviar = async (descricao: string, prazo: string) => {
    
    try {
        // Lógica para lidar com os dados do formulário
        if (descricao && prazo) {
          const url = 'projeto/';
          const headers = {
            'Content-Type': 'application/json',
          };
    
          const response = await Api.post(
            url,
            {
                loginCliente: 'jao',
                loginDesigner: 'nao implementado',
                idLogo: 'nao implementado',
                msgAlteracao: descricao,
                status: 'Aguardando Orcamento',
                dataSolicitacao: new Date(),
                dataConclusao: prazo
            },
            { headers }
          );
    
          console.log(response);
    
            alert('Solicitação de Edição enviada!')        
          
    
          console.log('Informação recebida com sucesso pelo back');
          
        } else {
          alert('Preencha todos os campos obrigatórios!');
          throw new Error('Campos obrigatórios não preenchidos');
        }
      } catch (error) {
        console.error('Algo deu errado:', error);
        throw error;
      }
    
  };

  return <SolicitarEdicaoView imagem={imagem} onEnviar={handleEnviar} />;
};

export default SolicitarEdicaoController;
