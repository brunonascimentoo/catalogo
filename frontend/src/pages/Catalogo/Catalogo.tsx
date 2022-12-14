import { Product } from '../../types/product';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { Link } from 'react-router-dom';
import { Pagination } from '../../components/Pagination/Pagination';
import { useEffect, useState } from 'react';
import { SpringPage } from '../../types/vendor/spring';
import './styles.css';
import axios from 'axios';
import { AxiosParams } from '../../types/vendor/axios';
import { BASE_URL } from '../../util/requests';

export function Catalogo() {
  const [page, setPage] = useState<SpringPage<Product>>();

  useEffect(() => {
    const params: AxiosParams = {
      method: 'GET',
      url: `${BASE_URL}/products`,
      params: {
        page: 0,
        size: 12,
      },
    };

    axios(params).then((response) => {
      setPage(response.data);
    });
  }, []);

  return (
    <div className="container my-4 catalogo-container">
      <div className="row catalogo-title-container">
        <h1>Catálogo de produtos</h1>
      </div>

      <div className="row">
        {page?.content.map((product) => {
          return (
            <div className="col-sm-6 col-lg-4 col-xl-3" key={product.id}>
              <Link to="/products/1">
                <ProductCard product={product} />
              </Link>
            </div>
          );
        })}

        <div className="row">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
