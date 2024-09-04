import "./styles.css";
import PoliticaImg from "../../assets/halandsiara.jpg";

const TopNews = () => {
  return (
    <div className="container">
      <a href="">
          <div className="main-image-container">
            <img src={PoliticaImg} alt="Imagem Principal" className="boxMain" />
            <div className="overlay"></div>
            <div className="text-overlay">
              <h1>É DO VOZÃO!</h1>
              <ul>
                <li>O craque Norueguês acertou com o maior do estado por...</li>
                <li>Haalando estará no Aeroporto em Fortaleza às:...</li>
              </ul>
            </div>
          </div>
      </a>
      <div className="column">
      <a href="#Pag1">
        <div className="secondary-image-container">
            <img
              src="https://unale.org.br/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-24-at-15.56.15.jpeg"
              alt="Imagem Secundária 1"
              className="box boxSecundary"
              />
          <div className="overlay"></div>
          <div className="text-overlay">
            <h2>Russia x Ucrânia</h2>
          </div>
        </div>
        </a>
        <a href="">
        <div className="secondary-image-container">
          <img
            src="https://www.diariodocentrodomundo.com.br/wp-content/uploads/2024/08/1_elon_musk_e_alexandre_de_moraes-36035485-1.jpg"
            alt="Imagem Secundária 2"
            className="box boxSecundary"
          />
          <div className="overlay"></div>
          <div className="text-overlay">
            <h2>Medo ou Respeito?</h2>
          </div>
        </div>
        </a>
        <a href="">
          <div className="secondary-image-container">
            <img
            src="https://files.sunoresearch.com.br/p/uploads/2018/09/Elon-Musk-2.jpg"
            alt="Imagem Secundária 3"
            className="box boxSecundary"
            />
          <div className="overlay"></div>
          <div className="text-overlay">
            <h2>GIGANTE! GÊNIO!</h2>
          </div>
        </div>
        </a>
      </div>
    </div>
  );
};

export default TopNews;