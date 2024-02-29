import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Tabs from "./(tabs)/_layout";

const Layout = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="container flex flex-col">
        {/* HEADER & MAIN */}
        <div className="flex-[1_0_auto] pt-2">
          <Header />
          <main>
            <Outlet />
          </main>
        </div>
      </div>
      {/* FOOTER */}
      {(window.innerWidth <= 768) ? <Tabs/> : <Footer />}
    </div>
  );
};

export default Layout;
