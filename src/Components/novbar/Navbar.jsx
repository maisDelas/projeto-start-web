import logo from '../../assets/Logomaroon.svg'





function EU() {
    return (
      <header className="header">
        <div className="nav">
        <img src={logo} alt="" />
          <nav>
            <ul>
              <li><a href="#about">Sobre nós</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#testimonials">Depoimentos</a></li>
              <li><a href="#contact">Fale Conosco</a></li>
              <li><a href="#join">Junte-se a +Delas</a></li>
            </ul>
          </nav>
          <button className="Button">
            <MdAccountCircle className="Icons" /> Entrar
          </button>
        </div>
      </header>
    );
  }
  
  export default EU;
  