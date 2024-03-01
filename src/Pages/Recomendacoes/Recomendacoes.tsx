
import React from 'react';

interface Jogo {
  nome: string;
  categoria: string;
  avaliado: boolean;
}

const jogosExemplo: Jogo[] = [ 
  {
    nome: 'Jogo 1',
    categoria: 'Strategy',
    avaliado: false
  },
  {
    nome: 'Jogo 2',
    categoria: 'Shooter',
    avaliado: true
  },
 
];

const Recomendacoes: React.FC<{ usuarioAvaliacoes: Jogo[] }> = ({ usuarioAvaliacoes }) => {
 
  const jogosNaoAvaliados = jogosExemplo.filter(jogo => !usuarioAvaliacoes.some(avaliacao => avaliacao.nome === jogo.nome));

  
  const jogosRecomendados = jogosNaoAvaliados;

  return (
    <div>
      <h2>Recomendações de Jogos</h2>
      <ul>
        {jogosRecomendados.map((jogo, index) => (
          <li key={index}>
            <strong>{jogo.nome}</strong> - {jogo.categoria}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recomendacoes;