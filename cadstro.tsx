import React, { useState } from 'react';

const Cadastro: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [estado, setEstado] = useState('');
  const [pais, setPais] = useState('');

  const handleCadastro = () => {
    // Lógica para enviar os dados para o backend ou realizar validações
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome completo" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
      <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Senha" />
      <input type="date" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} placeholder="Data de Nascimento" />
      <input type="text" value={estado} onChange={(e) => setEstado(e.target.value)} placeholder="Estado" />
      <input type="text" value={pais} onChange={(e) => setPais(e.target.value)} placeholder="País" />
      <button onClick={handleCadastro}>Cadastrar</button>
    </div>
  );
}

export default Cadastro;
