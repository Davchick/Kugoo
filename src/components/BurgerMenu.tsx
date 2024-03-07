import React from "react";

interface BurgerProps {
  isActive: boolean;
  toggleMenu: () => void;
}

const BurgerMenu: React.FC<BurgerProps> = ({ isActive, toggleMenu }) => {
  return (
    <div
      className={`burger-icon ${isActive && "burger-pressed"}`}
      onClick={() => toggleMenu()}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerMenu;
