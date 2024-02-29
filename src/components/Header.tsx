import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import Logotype from "./Logotype";

const Header = () => {
  return (
    <div>
      {/* OPEN MOBILE BLOCK (TOP)*/}
      <div className="flex items-center justify-between pb-1 border-b border-border">
        
        <div className="flex space-x-3 items-center">
          {/* CONTENT */}
          <img src="./img/icons/favicon.svg" alt="Mobile application icon" width="25"/>
          <div>
            <span>Открыть в приложении</span>
            {/* STARS */}
            <ul className="flex space-x-1 items-center">
              <li><img src="./img/icons/star.svg" alt="" /></li>
              <li><img src="./img/icons/star.svg" alt="" /></li>
              <li><img src="./img/icons/star.svg" alt="" /></li>
              <li><img src="./img/icons/star.svg" alt="" /></li>
              <li><img src="./img/icons/star.svg" alt="" /></li>
              <li className="text-xs text-text-secondary">2K</li>
            </ul>
          </div>
        </div>

        {/* BUTTON */}
        <Link
          className="btn"
          to="https://play.google.com/store/apps/details?id=com.sly13.kugooRussia"
          target="_blank"
        >
          Открыть
        </Link>
      </div>
      {/* MAIN HEADER (BOTTOM)*/}
      <div className="flex items-center justify-between py-4">
        <Logotype/>

        {/* ICONS */}
       <div className="flex space-x-4">
          <Link to="tel:+1234567890">
            <img src="./img/icons/phone.svg" alt="Phone icon" width="18"/>
          </Link>
          <BurgerMenu/>
       </div>

      </div>
    </div>
  );
};

export default Header;
