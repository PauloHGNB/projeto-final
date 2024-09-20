import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Elegância, praticidade e estilo para todos os momentos.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">NOSSA LOJA</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="cursor-pointer"
            >
              Início
            </li>
            <li
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="cursor-pointer"
            >
              Sobre nós
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">CONTATO</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <a
                href="https://www.instagram.com/madifeminina"
                target="_blank"
                rel="noopener noreferrer"
              >
                @madifeminina
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
