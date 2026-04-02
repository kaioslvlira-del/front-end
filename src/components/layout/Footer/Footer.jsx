import isotipo from "../../../assets/images/isotipo.png";

const Footer = () => {
  return (
    <footer className="w-screen bg-[#0D0D0D] border-t-2 border-[#666666]/40 flex items-center justify-center px-4 py-4">
      <div className="w-full md:w-[67.71%] flex flex-col md:flex-row items-center justify-between gap-3">
        <h1 className="font-medium text-[12px] md:text-[16px] text-[#BFBFBF] text-center md:text-left">
          © 2026 Royal Solutions. - All Rights Reserved
        </h1>

        <a href="/">
          <img
            src={isotipo}
            alt="isotipo"
            className="w-10 md:w-12 transition-transform duration-500 hover:scale-105"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
