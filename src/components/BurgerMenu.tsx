import { useState } from "react";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`burger-icon ${isOpen && "burger-pressed"}`} onClick={() => setIsOpen(!isOpen)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerMenu;
