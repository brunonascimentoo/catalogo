import './styles.css';
import { ButtonIcon } from '../../components/ButtonIcon/ButtonIcon';
import MainImage from '../../assets/images/main-image.svg';
import { Link } from 'react-router-dom';

export function Home() {
  return (
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
          <div>
            <Link to="/products">
              <ButtonIcon text="Inicie agora a sua busca" />
            </Link>
          </div>
        </div>
        <div className="home-image-container">
          <img src={MainImage} />
        </div>
      </div>
    </div>
  );
}
