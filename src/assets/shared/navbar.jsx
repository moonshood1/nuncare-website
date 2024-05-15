import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "font-bold underline" : "";
  };

  return (
    <section className="bg-blueNun p-4 text-white lg:px-32">
      <div className="flex justify-center">
        <img
          src="src/assets/images/main_logo.png"
          alt="main_logo_nuncare"
          className="h-20"
        />
      </div>
      <div className="flex justify-center mt-2">
        <p className="text-sm italic">
          La communauté dediée à soutenir l'ensemble de la profession médicale
        </p>
      </div>

      <div className="mt-6">
        <nav className="">
          <ul className="flex justify-center items-center space-x-10">
            <li className="text-lg">
              <Link to="/" className={isActive("/")}>
                Accueil
              </Link>
            </li>
            <li className="text-lg">
              <Link to="/about" className={isActive("/about")}>
                À propos de Nuncare
              </Link>
            </li>
            <li className="text-lg">
              <Link to="/services" className={isActive("/services")}>
                Services offerts
              </Link>
            </li>
            <li className="text-lg">
              <Link to="/networking" className={isActive("/networking")}>
                Réseaux de medecins
              </Link>
            </li>
            <li className="text-lg">
              <Link
                to="/news-and-events"
                className={isActive("/news-and-events")}
              >
                Actualités et évènements
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
