import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Terms from "../pages/Terms/Terms";
import DashboardLayout from "../components/layout/Dashboard/DashboardLayout";
import Inventory from "../pages/Dashboard/pages/Inventory";
import MyProfile from "../pages/Dashboard/pages/MyProfile";
import Transactions from "../pages/Dashboard/pages/Transactions";
import Users from "../pages/Dashboard/pages/Users";
import ProductsAdmin from "../pages/Dashboard/pages/ProductsAdmin";
import ProductPage from "../pages/Products/ProductPage";
import FAQ from "../pages/FAQ/FAQ";
import KeysAdmin from "../pages/Dashboard/pages/KeysAdmin";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<MyProfile />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="products" element={<ProductsAdmin />} />
        <Route path="keys" element={<KeysAdmin />} />
        <Route path="users" element={<Users />} />
      </Route>
    </Routes>
  );
}
