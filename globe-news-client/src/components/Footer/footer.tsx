import './styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Outra Coisa</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur recusandae dicta modi sequi ullam at, voluptatibus, dolore doloremque.</p>
        </div>
        <div className="footer-section">
          <h3>Qualquer coisa</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit rerum delectus blanditiis consequatur reprehenderit libero minima quibusdam.</p>
        </div>
        <div className="footer-section">
          <h3>Faz o pix</h3>
          <p>Ajude com o desenvolvimento do nosso site e faça um pix para ryancastelli16@gmail.com.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-logo">NOSSA LOGO</span>
        <div className="footer-links">
          <a href="#">Sobre nós</a>
          <a href="#">Suporte</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
