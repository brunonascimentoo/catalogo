import './styles.css';
import ComputerImg from '../../assets/images/computer.png';
import { ProductPrice } from '../../components/ProductPrice/ProductPrice';

export function ProductCard() {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={ComputerImg} />
      </div>
      <div className="card-bottom-container">
        <h6>Nome do produto</h6>
        <ProductPrice />
      </div>
    </div>
  );
}
