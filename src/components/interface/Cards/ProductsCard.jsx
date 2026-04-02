import CardBanner from "../../../assets/images/banner1.png";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  if (!product) return null;

  const firstPrice = product.prices?.monthly || 0;
  const lastPrice = product.prices?.lifetime || 0;

  return (
    <Link to={`/product/${product._id}`}>
      <div className="w-[90vw] sm:w-[300px] md:w-78.5 h-auto md:h-93 rounded-[10px] flex flex-col bg-linear-to-r from-[#2B2601]/25 to-[#1A1A1A]/40">
        <img
          src={CardBanner}
          alt="cardbanner"
          className="w-full h-[180px] md:h-55 object-cover rounded-t-[10px]"
        />

        <div className="w-full flex flex-col">
          <div className="mt-5 ml-5 mr-5 flex flex-col gap-1">
            <h1 className="font-bold text-[16px] md:text-[18px] text-[#F2F2F2]">
              {product.name}
            </h1>

            <div className="flex flex-row justify-between md:gap-10 mt-2">
              <div className="flex flex-col leading-4">
                <h1 className="font-medium text-[12px] md:text-[14px] text-[#948327]">
                  Plataforma:
                </h1>
                <h2 className="font-medium text-[12px] md:text-[14px] text-[#BFBFBF]">
                  Windows
                </h2>
              </div>

              <div className="flex flex-col leading-4">
                <h1 className="font-medium text-[12px] md:text-[14px] text-[#948327]">
                  Entrega:
                </h1>
                <h2 className="font-medium text-[12px] md:text-[14px] text-[#BFBFBF]">
                  Automatica
                </h2>
              </div>
            </div>

            <div className="mt-3">
              <h1 className="font-bold text-[16px] md:text-[18px] text-[#948327]">
                R$ {firstPrice} - R$ {lastPrice}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
