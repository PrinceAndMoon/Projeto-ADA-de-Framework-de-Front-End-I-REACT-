
import React, { useState } from 'react';

const AlteracaoDados: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [estado, setEstado] = useState('');
  const [pais, setPais] = useState('');

  const handleAlteracao = () => {
 
    console.log('Dados de alteração:', { nome, email, senha, dataNascimento, estado, pais });
  };

  return (
    <div>
      <h2>Alteração de Dados</h2>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome completo" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
      <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Nova senha" />
      <input type="date" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} placeholder="Nova data de Nascimento" />
      <input type="text" value={estado} onChange={(e) => setEstado(e.target.value)} placeholder="Novo Estado" />
      <input type="text" value={pais} onChange={(e) => setPais(e.target.value)} placeholder="Novo País" />
      <button onClick={handleAlteracao}>Salvar Alterações</button>
    </div>
  );
}

export default AlteracaoDados;
