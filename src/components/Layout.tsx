import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Tabs from "./(tabs)/_layout";

const Layout = () => {
  console.log(window.innerWidth);
  return (
    <div className="container h-svh flex flex-col justify-between">
      {/* HEADER & MAIN */}
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>

      {/* FOOTER */}
      <div>
        <Footer />
        {window.innerWidth <= 768 && <Tabs />}
      </div>
    </div>
  );
};

export default Layout;
