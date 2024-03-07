import Home from "./Home";
import Catalog from "./Catalog";
import Cart from "./Cart";
import Favorites from "./Favorites";
import Compare from "./Compare";

const Tabs = () => {
  return (
    <nav className="flex px-2 py-1 items-center justify-between w-full sticky bg-bg bottom-0">
      <Home />
      <Catalog />
      <Cart />
      <Favorites />
      <Compare />
    </nav>
  )
}

export default Tabs