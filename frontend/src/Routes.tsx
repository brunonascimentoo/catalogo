import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Catalogo } from './pages/Catalogo/Catalogo';
import { Admin } from './pages/Admin/Admin';
import { ProductDetails } from './pages/ProductDetails/ProductDetails';

export function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/products" exact>
          <Catalogo />
        </Route>
        <Route path="/products/:productId">
          <ProductDetails />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
