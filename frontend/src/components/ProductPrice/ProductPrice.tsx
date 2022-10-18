import './styles.css';

interface ProductPriceProps {
  price: number;
}

export function ProductPrice({ price }: ProductPriceProps) {
  return (
    <div className="product-price-container">
      <span>R$</span>
      <h3>{price}</h3>
    </div>
  );
}
