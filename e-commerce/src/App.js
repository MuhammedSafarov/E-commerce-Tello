import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import ProductPage from "./pages/productPage/ProductPage";
import Detail from "./pages/detailPage/Detail";
import BasketPage from "./pages/basket/BasketPage";
import LoginPage from "./pages/loginPage/LoginPage";
import SignUp from "./pages/signUpPage/SignUp";
import CreateToken from "./pages/loginPage/CreateToken/CreateToken"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:slug" element={<ProductPage />} />
        <Route path="/products-detail/:id" element={<Detail />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/create-token/:token' element={<CreateToken/>}/>
      </Routes>
    </div>
  );
}

export default App;
