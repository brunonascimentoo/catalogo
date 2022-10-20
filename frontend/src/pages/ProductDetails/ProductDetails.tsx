import './styles.css';
import arrowImg from '../../assets/images/arrow.svg';
import { ProductPrice } from '../../components/ProductPrice/ProductPrice';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Product } from '../../types/product';
import axios from 'axios';
import { BASE_URL } from '../../util/requests';

interface UlrParams {
  productId: string;
}

export function ProductDetails() {
  const { productId } = useParams<UlrParams>();

  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    axios.get(`${BASE_URL}/products/${productId}`).then((response) => {
      setProduct(response.data);
    });
  }, [product]);

  return (
    <div className="product-details-container">
      <div className="product-details-card base-card">
        <Link to="/products">
          <div className="goback-container">
            <img src={arrowImg} />
            <h2>Voltar</h2>
          </div>
        </Link>
        <div className="row">
          <div className="col-xl-6">
            <div className="img-container">
              <img src={product?.imgUrl} alt={product?.name} />
            </div>
            <div className="name-price-container">
              <h1>{product?.name}</h1>
              {product && <ProductPrice price={product?.price} />}
            </div>
          </div>
          <div className="col-xl-6">
            <div className="description-container">
              <h2>Descrição do Produto</h2>
              <p>{product?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
