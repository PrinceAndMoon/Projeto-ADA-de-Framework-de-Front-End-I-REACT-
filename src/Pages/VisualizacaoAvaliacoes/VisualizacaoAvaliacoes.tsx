
import React from 'react';

interface Avaliacao {
  estrelas: number;
  comentario: string;
}

interface Jogo {
  nome: string;
  categoria: string;
  avaliacoes: Avaliacao[];
}

const VisualizacaoAvaliacoes: React.FC<{ jogo: Jogo }> = ({ jogo }) => {
  return (
    <div>
      <h2>Avaliações de {jogo.nome}</h2>
      {jogo.avaliacoes.length > 0 ? (
        <ul>
          {jogo.avaliacoes.map((avaliacao, index) => (
            <li key={index}>
              <strong>Estrelas:</strong> {avaliacao.estrelas} - <strong>Comentário:</strong> {avaliacao.comentario}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhuma avaliação disponível para este jogo.</p>
      )}
    </div>
  );
}

export default VisualizacaoAvaliacoes;
