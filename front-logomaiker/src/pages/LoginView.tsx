import React from 'react';

interface LoginViewProps {
  username: string;
  password: string;
  onUsernameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onLoginClick: () => void;
}

const LoginView: React.FC<LoginViewProps> = ({
  username,
  password,
  onUsernameChange,
  onPasswordChange,
  onLoginClick,
}) => {
  return (
    <div>
      <h2>Tela de Login</h2>
      <label htmlFor="username">Usuário:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={onUsernameChange}
        required
      />

      <label htmlFor="password">Senha:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={onPasswordChange}
        required
      />

      <button type="button" onClick={onLoginClick}>
        Entrar
      </button>
    </div>
  );
};

export default LoginView;
