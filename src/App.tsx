import { Routes, Route } from "react-router-dom";
import RootLayout from "./app/Layout";
import Home from "./app/Page";
import ProductsPage from './app/ProductsPage';
import ProductDetail from './app/ProductDetail';

const App = () => {
  return (
      <RootLayout >
        {/* Your app content goes here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
        
      </RootLayout >
  );
};

export default App;
