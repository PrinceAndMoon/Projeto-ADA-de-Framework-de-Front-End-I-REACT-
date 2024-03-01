import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import AlteracaoDados from './Pages/AteracaoDados/AlteracaoDados';
import AvaliacaoJogo from './Pages/AvaliacaoJogo/AvaliacaoJogo';
import BuscaJogo from './Pages/BuscaJogo/BuscaJogo';
import Cadastro from './Pages/Cadastro/Cadastro';
import CadastroJogos from './Pages/CadastroJogos/CadastroJogos';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Recomendacoes from './Pages/Recomendacoes/Recomendacoes';
import VisualizacaoAvaliacoes from './Pages/VisualizacaoAvaliacoes/VisualizacaoAvaliacoes';

const router: React.FC = () => {
  return (
    <Router>
        <Route path="/" element={<Home />} />
        <Route path="/alteracao-dados" element={<AlteracaoDados />} />
        <Route path="/avaliacao-jogo" element={<AvaliacaoJogo />} />
        <Route path="/busca-jogo" element={<BuscaJogo />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastro-jogos" element={<CadastroJogos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recomendacoes" element={<Recomendacoes />} />
        <Route path="/visualizacao-avaliacoes" element={<VisualizacaoAvaliacoes />} />
    </Router>
  );
};

export default router;


