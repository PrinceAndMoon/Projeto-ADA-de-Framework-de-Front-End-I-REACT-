
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Bem-vindo ao BestBrowserGames</h1>
      <p>Descubra os melhores jogos diretamente do seu navegador!</p>
      <p>Se você já é cadastrado, faça login abaixo:</p>
      <Link to="/login">
        <button>Faça Login</button>
      </Link>
      <p>Se é sua primeira vez aqui, faça o cadastro agora mesmo:</p>
      <Link to="/cadastro">
        <button>Faça o Cadastro</button>
      </Link>
    </div>
  );
}

export default Home;
