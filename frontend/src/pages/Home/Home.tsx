import './styles.css';
import { ButtonIcon } from '../../components/ButtonIcon/ButtonIcon';
import MainImage from '../../assets/images/main-image.svg';
import { Navbar } from '../../components/Navbar/Navbar';

export function Home() {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="base-card home-card">
          <div className="home-content-container">
            <div>
              <h1>Conheça o melhor catálogo de produtos</h1>
              <p>
                Ajudaremos você a encontrar os melhores produtos disponíveis no
                mercado.
              </p>
            </div>
            <ButtonIcon />
          </div>
          <div className="home-image-container">
            <img src={MainImage} />
          </div>
        </div>
      </div>
    </>
  );
}
