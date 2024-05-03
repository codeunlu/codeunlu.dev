import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/shared/navbar.tsx";
import NavbarMobile from "@/components/shared/navbar-mobile.tsx";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="relative py-5 max-w-screen-xl mx-auto">
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      {isMenuOpen && <NavbarMobile toggleMenu={toggleMenu} />}
    </header>
  );
};
export default Header;