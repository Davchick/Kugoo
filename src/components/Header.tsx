import { useState } from "react";
import { Link } from "react-router-dom";
import ContactsMenu from "./ContactsMenu";
import BurgerMenu from "./BurgerMenu";
import Logotype from "./Logotype";
import NavMenu from "./NavMenu";

const Header = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const toggleMenu = () => {
    setIsBurgerActive(!isBurgerActive);
  };

  if (isBurgerActive) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return (
    <div className="relative py-2">
      {/* SIGN IN INTO THE ACCOUNT */}
      <div className="flex items-center justify-between pb-2 border-b border-border">
        <p>Войдите в аккаунт</p>

        {/* BUTTON */}

        <Link className="btn" to="/profile">
          Profile
        </Link>

        <Link className="btn" to="/login">
          Войти
        </Link>
      </div>

      {/* MIDDLE HEADER */}
      <div className="flex items-center justify-between py-4">
        <Logotype />

        {/* ICONS */}
        <div className="flex space-x-4">
          <Link to="tel:+1234567890">
            <img src="./img/icons/phone.svg" alt="Phone icon" width="18" />
          </Link>
          <BurgerMenu isActive={isBurgerActive} toggleMenu={toggleMenu} />
        </div>
      </div>

      {/* BOTTOM HEADER */}
      <div
        className={`mobile-menu ${isBurgerActive ? "block" : "hidden"}`}
        onClick={() => toggleMenu()}
      >
        <NavMenu />
        <ContactsMenu />
      </div>
    </div>
  );
};

export default Header;
