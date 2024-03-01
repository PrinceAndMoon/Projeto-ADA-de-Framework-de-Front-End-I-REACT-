
import React, { useState } from 'react';

interface Jogo {
  nome: string;
  categoria: string;
  urlJogo: string;
  urlVideo?: string;
  descricao: string;
  imagem: string;
}

const CadastroJogo: React.FC = () => {
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [urlJogo, setUrlJogo] = useState('');
  const [urlVideo, setUrlVideo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');

  const [jogos, setJogos] = useState<Jogo[]>([]);

  const handleCadastroJogo = () => {
    const novoJogo: Jogo = {
      nome,
      categoria,
      urlJogo,
      urlVideo,
      descricao,
      imagem
    };

    setJogos([...jogos, novoJogo]);

    console.log('Jogo cadastrado:', novoJogo);
  };

  return (
    <div>
      <h2>Cadastro de Jogo</h2>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome do Jogo" />
      <input type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)} placeholder="Categoria" />
      <input type="text" value={urlJogo} onChange={(e) => setUrlJogo(e.target.value)} placeholder="URL do Jogo" />
      <input type="text" value={urlVideo} onChange={(e) => setUrlVideo(e.target.value)} placeholder="URL do Vídeo (opcional)" />
      <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Descrição" />
      <input type="text" value={imagem} onChange={(e) => setImagem(e.target.value)} placeholder="URL da Imagem Ilustrativa" />
      <button onClick={handleCadastroJogo}>Cadastrar Jogo</button>

      <h2>Jogos Cadastrados</h2>
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

export default CadastroJogo;
