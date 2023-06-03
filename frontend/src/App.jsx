import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Layout from "./components/Layout";
import axios from "axios";
import UserContextProvider from "./components/UserContext";
import ProfilePage from "./pages/ProfilePage";
import ProductPage from "./pages/ProductPage";
import ProductFormPage from "./pages/ProductFormPage";
import ProduPage from "./pages/ProduPage";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

const App = () => {
  
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<ProfilePage />} />
          <Route path="/account/product" element={<ProductPage />} />
          <Route path="/account/product/new" element={<ProductFormPage />} />
          <Route path="/account/product/:id" element={<ProductFormPage />} />
          <Route path="/product/:id" element={<ProduPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
};

export default App;
