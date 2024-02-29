import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cooperation from "./pages/Cooperation";
import TestDrive from "./pages/TestDrive";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";
import Delivery from "./pages/Delivery";
import Contacts from "./pages/Contacts";
import Service from "./pages/Service";
import Compare from "./pages/Compare";
import Catalog from "./pages/Catalog";
import Thanks from "./pages/Thanks";
import Layout from "./components/Layout";
import Sales from "./pages/Sales";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Blog from "./pages/Blog";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/cooperation" element={<Cooperation />} />
          <Route path="/test-drive" element={<TestDrive />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/service" element={<Service />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="/about" element={<About />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
