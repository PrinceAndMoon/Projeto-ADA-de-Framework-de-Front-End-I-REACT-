
import React, { useState } from 'react';

interface Jogo {
  nome: string;
  categoria: string;
  urlJogo: string;
  urlVideo?: string;
  descricao: string;
  imagem: string;
}

const BuscaJogo: React.FC = () => {
  const jogosExemplo: Jogo[] = [
    {
      nome: 'Jogo 1',
      categoria: 'Strategy',
      urlJogo: 'https://www.jogo1.com',
      descricao: 'Descrição do Jogo 1',
      imagem: 'imagem1.jpg'
    },
    {
      nome: 'Jogo 2',
      categoria: 'Shooter',
      urlJogo: 'https://www.jogo2.com',
      descricao: 'Descrição do Jogo 2',
      imagem: 'imagem2.jpg'
    },
   
  ];

  const [termoBusca, setTermoBusca] = useState('');
  const [categoriaBusca, setCategoriaBusca] = useState('');
  const [jogos, setJogos] = useState<Jogo[]>(jogosExemplo);

  const handleBusca = () => {
    let jogosFiltrados = jogosExemplo;

   
    if (termoBusca) {
      jogosFiltrados = jogosFiltrados.filter(jogo => jogo.nome.toLowerCase().includes(termoBusca.toLowerCase()));
    }

    
    if (categoriaBusca) {
      jogosFiltrados = jogosFiltrados.filter(jogo => jogo.categoria.toLowerCase() === categoriaBusca.toLowerCase());
    }

    setJogos(jogosFiltrados);
  };

  return (
    <div>
      <h2>Busca de Jogos</h2>
      <input type="text" value={termoBusca} onChange={(e) => setTermoBusca(e.target.value)} placeholder="Buscar por nome" />
      <input type="text" value={categoriaBusca} onChange={(e) => setCategoriaBusca(e.target.value)} placeholder="Buscar por categoria" />
      <button onClick={handleBusca}>Buscar</button>

      <h2>Resultados da Busca</h2>
      <ul>
        {jogos.map((jogo, index) => (
          <li key={index}>
            <strong>{jogo.nome}</strong> - {jogo.categoria}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BuscaJogo;
