// src/controllers/CriarLogoController.tsx

import React from 'react';
import CriarLogoView from './CriarLogoView';
import Api from '../Api';


const CriarLogoController: React.FC = () => {
  const handleLogoCreate = (data: any) => {
    // Lógica para lidar com os dados do formulário
    if (data.tipoOrganizacao && data.ramoAtuacao && data.diferenciais) {
      //NAO DEU PARA TESTAR, POIS O BACK ESTA ERRADO, ELE ESTA RECEBENDO UM PROJETO
      // E NA VDD ELE RECEBERA AS INFORMACOES PARA A CRIACAO DA LOGO
      try {
        const url = 'logo/'
  
        const headers = {
            'Content-Type': 'application/json'
        }
        Api.post(url, { tipoOrganizacao: data.tipoOrganizacao, ramoAtuacao: data.ramoAtuacao,
          diferenciais: data.diferenciais, cores: data.cores, elementos: data.elementos }, { headers }).then(response => {
            console.log(response)
            alert('Informacao recebida com succ pelo back');
        }).catch(error => {
          alert('Algo deu errado...');
        });
        } catch (error) {
          
          console.log(error)
          
        }

    }else{
      alert('Preencha todos os campos obrigatórios!')
    }
    console.log('Dados do formulário:', data);
  };

  return <CriarLogoView onSubmit={handleLogoCreate} />;
};

export default CriarLogoController;
