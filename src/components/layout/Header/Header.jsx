import { useState } from "react";
import logo from "../../../assets/images/logotipo.png";
import LoginButton from "../../interface/Buttons/LoginButton";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-screen h-20 bg-[#0D0D0D] border-b-2 border-[#666666]/40 flex items-center justify-center relative">
      <div className="w-[90%] md:w-[67.71%] h-full flex items-center">
        {/* LOGO */}
        <div className="flex flex-1">
          <a href="/">
            <img
              src={logo}
              alt="logo"
              className="w-20 md:w-26 transition-transform duration-500 hover:scale-102"
            />
          </a>
        </div>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ol className="flex flex-row gap-5">
            <a href="/">
              <li className="font-medium text-[16px] text-[#707070] hover:font-semibold hover:text-[#909090] transition-all duration-500">
                Inicio
              </li>
            </a>
            <a href="/products">
              <li className="font-medium text-[16px] text-[#707070] hover:font-semibold hover:text-[#909090] transition-all duration-500">
                Produtos
              </li>
            </a>
            <a href="/terms">
              <li className="font-medium text-[16px] text-[#707070] hover:font-semibold hover:text-[#909090] transition-all duration-500">
                Termos
              </li>
            </a>
            <a href="/faq">
              <li className="font-medium text-[16px] text-[#707070] hover:font-semibold hover:text-[#909090] transition-all duration-500">
                FAQ
              </li>
            </a>
          </ol>
        </nav>

        {/* LOGIN DESKTOP */}
        <div className="hidden md:flex flex-1 justify-end">
          <LoginButton />
        </div>

        {/* BOTÃO MOBILE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center justify-center w-[40px] h-[35px] bg-[#948327] rounded-[8px]"
        >
          <div className="flex flex-col gap-1">
            <span className="w-5 h-[2px] bg-[#F7DA04]"></span>
            <span className="w-5 h-[2px] bg-[#F7DA04]"></span>
            <span className="w-5 h-[2px] bg-[#F7DA04]"></span>
          </div>
        </button>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#0D0D0D] border-t border-[#666]/30 flex flex-col items-center py-6 gap-6 md:hidden z-50">
          <a
            href="/"
            className="text-[#707070] hover:font-semibold hover:text-[#909090] transition-all duration-500"
          >
            Inicio
          </a>
          <a
            href="/products"
            className="text-[#707070] hover:font-semibold hover:text-[#909090] transition-all duration-500"
          >
            Produtos
          </a>
          <a
            href="/terms"
            className="text-[#707070] hover:font-semibold hover:text-[#909090] transition-all duration-500"
          >
            Termos
          </a>
          <a
            href="/faq"
            className="text-[#707070] hover:font-semibold hover:text-[#909090] transition-all duration-500"
          >
            FAQ
          </a>

          {/* LOGIN NO MOBILE */}
          <LoginButton />
        </div>
      )}
    </header>
  );
};

export default Header;
