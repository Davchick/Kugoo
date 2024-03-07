import { NavLink } from "react-router-dom";
import Telegram from "./(icons)/Telegram";
import Whatsapp from "./(icons)/Whatsapp";
import Viber from "./(icons)/Viber";

const ContactsMenu = () => {
  return (
    <nav className="flex flex-wrap gap-8 px-4 justify-center">
      <NavLink to="">Сервис</NavLink>
      <NavLink to="">Сотрудничество</NavLink>
      <NavLink to="">Заказать звонок</NavLink>
      <p className="flex space-x-3 items-center">
        <span>Online чат:</span>
        <Viber
          w={window.innerWidth <= 768 ? 22 : ""}
          h={window.innerWidth <= 768 ? 22 : ""}
        />
        <Whatsapp
          w={window.innerWidth <= 768 ? 22 : ""}
          h={window.innerWidth <= 768 ? 22 : ""}
        />
        <Telegram
          w={window.innerWidth <= 768 ? 22 : ""}
          h={window.innerWidth <= 768 ? 22 : ""}
        />
      </p>
    </nav>
  );
};

export default ContactsMenu;
