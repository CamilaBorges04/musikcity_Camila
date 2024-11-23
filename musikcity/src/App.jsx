import React, { useState } from "react";
import "./index.css";
import musicalNotesImage from "./assets/notas-musicais.png"; // Importe a imagem

// Importando as imagens diretamente
import gravacoesImg from "./assets/gravacoes.png";
import composicaoImg from "./assets/composicao.png";
import consultoriaImg from "./assets/consultoria.png";
import producaoImg from "./assets/producao.png";

import projeto1Img from "./assets/projeto1.png";
import projeto2Img from "./assets/projeto2.png";
import projeto3Img from "./assets/projeto3.png";

function App() {
  // Estado para controlar o tamanho da fonte
  const [fontSize, setFontSize] = useState(16); // Tamanho inicial da fonte

  // Estado para controlar o tema (modo claro ou escuro)
  const [darkMode, setDarkMode] = useState(false);

  // Funções para aumentar e diminuir o tamanho da fonte
  const increaseFontSize = () => setFontSize((prevSize) => prevSize + 2);
  const decreaseFontSize = () => setFontSize((prevSize) => prevSize - 2);

  // Função para alternar o modo escuro/claro
  const toggleDarkMode = () => setDarkMode((prevMode) => !prevMode);

  return (
    <div
      style={{ fontSize: `${fontSize}px` }}
      className={darkMode ? "dark-mode" : "light-mode"}
    >
      {/* Cabeçalho */}
      <header className="header">
        <div className="container">
          <div className="header-left">
            <h1 className="logo">MusikCity</h1>
          </div>
          <div className="header-center">
            <input
              type="text"
              className="search-bar"
              placeholder="Digite aqui..."
            />
          </div>
          <div className="header-right">
            <button className="accessibility-btn" onClick={increaseFontSize}>
              A+
            </button>
            <button className="accessibility-btn" onClick={decreaseFontSize}>
              A-
            </button>
            <button
              className="accessibility-btn contrast-toggle"
              onClick={toggleDarkMode}
            >
              {darkMode ? "🌙" : "🌞"}
            </button>
          </div>
        </div>
      </header>

      {/* Menu */}
      <nav className="menu">
        <ul className="menu-list">
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#servicos">Serviços</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>
      <hr className="divider" />

      {/* Seção Sobre */}
      <section id="sobre" className="section sobre-section">
        <div className="sobre-container">
          <div className="sobre-text">
            <h2>Sobre MusikCity</h2>
            <p>
              MusikCity é uma plataforma musical criada pelo maestro e
              produtor Hugo Bellard em 1997, dedicada a conectar novos talentos
              com o mercado musical brasileiro. Através de uma rede de contatos
              com gravadoras, rádios e profissionais do setor, a MusikCity
              oferece serviços de arranjos, gravações e consultoria. Nosso
              objetivo é promover a visibilidade de músicos e compositores,
              ajudando-os a alcançar o sucesso e a monetizar suas criações nos
              principais meios de comunicação.
            </p>
            <a href="#" className="ver-mais-link">
              Ver mais
            </a>
          </div>
          <div className="sobre-image">
            <img
              src={musicalNotesImage}
              alt="Notas musicais"
              className="sobre-img"
            />
          </div>
        </div>
        <hr className="divider" />
      </section>

      {/* Seção Serviços */}
      <section id="servicos" className="section servicos-section">
        <h2 className="projetos-titulo">Serviços</h2>
        <div className="servicos-container">
          {/* Card 1 */}
          <div className="servico-card">
            <div className="servico-icon">
              <img src={gravacoesImg} alt="Ícone de Gravações e Arranjos" />
            </div>
            <h3 className="servico-titulo">Gravações e Arranjos</h3>
            <p className="servico-descricao">
              Transformamos suas ideias em produções de alta qualidade. Com
              expertise em arranjos musicais e gravações, trabalhamos com músicos
              e compositores para criar sons únicos e profissionais.
            </p>
          </div>

          {/* Card 2 */}
          <div className="servico-card">
            <div className="servico-icon">
              <img src={composicaoImg} alt="Ícone de Composição" />
            </div>
            <h3 className="servico-titulo">Consultoria Musical</h3>
            <p className="servico-descricao">
              Ajudamos a criar músicas originais com base nas suas ideias e
              sentimentos. Nosso processo criativo resulta em composições que se
              conectam profundamente com o público.
            </p>
          </div>

          {/* Card 3 */}
          <div className="servico-card">
            <div className="servico-icon">
              <img src={producaoImg} alt="Ícone de Consultoria Musical" />
            </div>
            <h3 className="servico-titulo">Divulgação e Parcerias</h3>
            <p className="servico-descricao">
              Oferecemos orientação personalizada para músicos e compositores,
              ajudando-os a desenvolver suas habilidades e a navegar pela
              indústria musical.
            </p>
          </div>

          {/* Card 4 */}
          <div className="servico-card">
            <div className="servico-icon">
              <img src={consultoriaImg} alt="Ícone de Produção Musical" />
            </div>
            <h3 className="servico-titulo">Parceria para Letristas</h3>
            <p className="servico-descricao">
              Da pré-produção à finalização, cuidamos de todos os detalhes para
              criar a música que você sempre imaginou, com uma produção
              profissional e criativa.
            </p>
          </div>
        </div>
        <hr className="divider" />
      </section>

      {/* Seção de Projetos */}
      <section id="projetos" className="section projetos-section">
        <h2 className="projetos-titulo">Projetos</h2>
        <div className="projetos-container">
          <div className="projeto-card">
            <img src={projeto1Img} alt="Projeto 1" />
            <div className="projeto-info">
              <h3 className="projeto-titulo">Produções de Sucesso</h3>
            </div>
          </div>
          <div className="projeto-card">
            <img src={projeto2Img} alt="Projeto 2" />
            <div className="projeto-info">
              <h3 className="projeto-titulo">Destaques da Carreira</h3>
            </div>
          </div>
          <div className="projeto-card">
            <img src={projeto3Img} alt="Projeto 3" />
            <div className="projeto-info">
              <h3 className="projeto-titulo">Galeria de Colaborações</h3>
            </div>
          </div>
        </div>
        <hr className="divider" />
      </section>


      {/* Seção de Contato */}
      <section id="contato" className="section contato-section">
        <div className="contato-header">
          <h2 className="contato-titulo">Contato</h2>
          <p className="contato-descricao">Oi tudo bem? Fale com a gente!</p>
        </div>

        <form className="contato-form">
          <div className="form-field">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite seu nome"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="exemplo@gmail.com"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="telefone">Telefone</label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              placeholder="(XX) XXXX-XXXX"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="cep">CEP</label>
            <input
              type="text"
              id="cep"
              name="cep"
              placeholder="XXXXX-XXX"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="endereco">Endereço</label>
            <input
              type="text"
              id="endereco"
              name="endereco"
              placeholder="Rua, número"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="bairro">Bairro</label>
            <input
              type="text"
              id="bairro"
              name="bairro"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="cidade">Cidade</label>
            <input
              type="text"
              id="cidade"
              name="cidade"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="estado">Estado</label>
            <input
              type="text"
              id="estado"
              name="estado"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              name="mensagem"
              placeholder="Mensagem"
              required
            />
            <span className="erro" id="mensagem-erro">A mensagem não pode estar vazia!</span>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-btn">Enviar formulário</button>
          </div>
        </form>

        <div className="contato-info">
          <p>musicity@gmail.com</p>
          <p>Telefone: (11) 5571-2751</p>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <h1 className="footer-logo">MusikCity</h1>
          <p>© 2024 MusikCity. Todos os direitos reservados.</p>
        </div>
      </footer>




    </div>
  );
}

export default App;
