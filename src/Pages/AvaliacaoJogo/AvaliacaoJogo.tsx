
import React, { useState } from 'react';

interface Jogo {
  nome: string;
  categoria: string;
  avaliacao?: {
    estrelas: number;
    comentario: string;
  };
}

const AvaliacaoJogo: React.FC<{ jogo: Jogo }> = ({ jogo }) => {
  const [estrelas, setEstrelas] = useState(jogo.avaliacao?.estrelas || 0);
  const [comentario, setComentario] = useState(jogo.avaliacao?.comentario || '');

  const handleAvaliacao = () => {
    
    const novaAvaliacao = { estrelas, comentario };
    console.log('Nova avaliação:', novaAvaliacao);
  };

  return (
    <div>
      <h2>Avaliação de {jogo.nome}</h2>
      <div>
        <label>Estrelas:</label>
        <input type="number" min={1} max={5} value={estrelas} onChange={(e) => setEstrelas(Number(e.target.value))} />
      </div>
      <div>
        <label>Comentário:</label>
        <textarea value={comentario} onChange={(e) => setComentario(e.target.value)} />
      </div>
      <button onClick={handleAvaliacao}>Avaliar</button>
    </div>
  );
}

export default AvaliacaoJogo;
