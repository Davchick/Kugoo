import Home from "./Home";
import Catalog from "./Catalog";
import Cart from "./Cart";
import Favorites from "./Favorites";
import Compare from "./Compare";

const Tabs = () => {
  return (
    <div className="flex px-2 items-center">
      <Home />
      <Catalog />
      <Cart />
      <Favorites />
      <Compare />
    </div>
  )
}

export default Tabs