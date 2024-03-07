import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <nav className="nav-menu">
      <NavLink to="/about">О магазине</NavLink>
      <NavLink to="/delivery">Доставка и оплата</NavLink>
      <NavLink to="/test-drive">Тест-драйв</NavLink>
      <NavLink to="/blog">Блог</NavLink>
      <NavLink to="/contacts">Контакты</NavLink>
      <NavLink to="/sales">Акции</NavLink>
    </nav>
  );
};

export default NavMenu;
