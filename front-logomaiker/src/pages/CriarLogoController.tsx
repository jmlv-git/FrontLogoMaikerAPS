// src/controllers/CriarLogoController.tsx

import React from 'react';
import CriarLogoView from './CriarLogoView';
import Api from '../Api';


const CriarLogoController: React.FC = () => {
  let urlImg:string="https://i.pinimg.com/originals/20/c9/b7/20c9b70a173c712abc4d5b0a4149f533.jpg";
  const handleLogoCreate = async (data: any): Promise<string> => {
  try {
    // Lógica para lidar com os dados do formulário
    if (data.tipoOrganizacao && data.ramoAtuacao && data.diferenciais) {
      const url = 'logo/';
      const headers = {
        'Content-Type': 'application/json',
      };

      const response = await Api.post(
        url,
        {
          tipoOrganizacao: data.tipoOrganizacao,
          ramoAtuacao: data.ramoAtuacao,
          diferenciais: data.diferenciais,
          cores: data.cores,
          elementos: data.elementos,
        },
        { headers }
      );

      console.log(response);

      // Suponhamos que a URL da imagem esteja na propriedade 'imagem' da resposta
      const blob = response.data.imagem;
      
      let urlImg = "https://i.pinimg.com/originals/20/c9/b7/20c9b70a173c712abc4d5b0a4149f533.jpg";

      
      urlImg = blob;
        
      

      console.log('Informação recebida com sucesso pelo back');
      return urlImg;
    } else {
      alert('Preencha todos os campos obrigatórios!');
      throw new Error('Campos obrigatórios não preenchidos');
    }
  } catch (error) {
    console.error('Algo deu errado:', error);
    throw error;
  }
};

  return <CriarLogoView onSubmit={handleLogoCreate} logoSrc ={urlImg}  />;
};

export default CriarLogoController;
