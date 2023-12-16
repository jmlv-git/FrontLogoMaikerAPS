import React, { useState } from 'react';
import LoginView from './LoginView';
import Api from '../Api';
import { useNavigate } from 'react-router-dom';

const LoginController: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setUsername(e.target.value);

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setPassword(e.target.value);

  const handleLoginClick = () => {


    


    if (username && password) {
      try {
        const url = 'credencial-acesso/'
  
        const headers = {
            'Content-Type': 'application/json'
        }
        Api.post(url, { login: username, senha: password }, { headers }).then(response => {
            console.log(response)
            alert('Login Realizado com sucesso');
            navigate('/home');
        }).catch(error => {
          alert('Credenciais incorretas! Tente novamente.');
        });
        } catch (error) {
          
          console.log(error)
          
        }
    } else {
      alert('Preencha todos os campos!');
    }
  };

  return (
    <LoginView
      username={username}
      password={password}
      onUsernameChange={handleUsernameChange}
      onPasswordChange={handlePasswordChange}
      onLoginClick={handleLoginClick}
    />
  );
};

export default LoginController;
