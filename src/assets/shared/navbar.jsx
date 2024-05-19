import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, stagger, useAnimate } from "framer-motion";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "font-bold underline" : "";
  };

  const [expandNav, setExpandNav] = useState(false);

  const [scope, animate] = useAnimate();

  const toggleMenu = () => {
    setExpandNav(!expandNav);

    animate(".ul-nav", { opacity: [0, 1] }, { duration: 0.5 });
    animate(
      ".nav-item",
      {
        x: [1000, 0],
        scale: 1,
      },
      {
        duration: 0.7,
        delay: stagger(0.1, { startDelay: 0.15 }),
      }
    );
  };

  return (
    <>
      <section className="bg-blueNun p-4 text-white px-32 hidden md:block">
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1716145195/nuncare-website/images/main_logo_nk8ery.png"
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
      <>
        <section className="flex md:hidden bg-blueNun w-full justify-between p-4">
          <img
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1716145195/nuncare-website/images/main_logo_nk8ery.png"
            alt="main_logo_nuncare"
            className="h-12"
          />
          <ul className="lg:hidden">
            <li>
              <button type="button" onClick={toggleMenu}>
                <img
                  src="https://res.cloudinary.com/dhc0siki5/image/upload/v1716153922/nuncare-website/images/menu_bar_a6ferq_fyfvgi.png"
                  alt="menu_button"
                  className="max-h-8 md:max-h-10"
                />
              </button>
            </li>
          </ul>
        </section>
        <nav
          className={`${
            expandNav ? "block" : "hidden"
          } bg-blueNun bg-opacity-10 h-auto p-4 w-full`}
        >
          <ul className="ul-nav flex flex-col">
            <li className="py-1">
              <Link to="/" className={isActive("/")}>
                Accueil
              </Link>
            </li>
            <li className="py-1">
              <Link to="/about" className={isActive("/about")}>
                À propos de Nuncare
              </Link>
            </li>
            <li className="py-1">
              <Link to="/services" className={isActive("/services")}>
                Services offerts
              </Link>
            </li>
            <li className="py-1">
              <Link to="/networking" className={isActive("/networking")}>
                Réseaux de medecins
              </Link>
            </li>
            <li className="py-1">
              <Link
                to="/news-and-events"
                className={isActive("/news-and-events")}
              >
                Actualités et évènements
              </Link>
            </li>

            <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          </ul>
        </nav>
      </>
    </>
  );
};

export default Navbar;
