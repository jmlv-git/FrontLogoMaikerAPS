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

      console.log("chegamos no front", response.data);
      const meuArray = Object.keys(response.data).map(chave => response.data[chave]);
      console.log(meuArray);
      const arr = new Uint8Array(meuArray);
      const blobAux = new Blob([arr]);
      console.log(blobAux);
      console.log(URL.createObjectURL(blobAux));

      const file = new File ( [blobAux], 'logo', {type: blobAux.type} )
      readFile(blobAux)



     
      


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


async function readFile (file: Blob) {
  console.log(file)
  const fr = new FileReader ()
  await fr.readAsDataURL(file)
  console.log(fr.result)

  setTimeout(function () {
    console.log("foi", fr.result)
  }, 20000)


}

export default CriarLogoController;
