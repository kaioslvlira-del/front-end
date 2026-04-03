import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../../services/api";

import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import Banner from "../../assets/images/banner.png";

const ProductPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState("monthly");

  useEffect(() => {
    loadProduct();
  }, [id]);

  const loadProduct = async () => {
    try {
      const data = await getProductById(id);
      setProduct(data);
    } catch (err) {
      console.error(err);
    }
  };

  if (!product) {
    return (
      <div className="w-screen h-screen flex items-center justify-center flex-col">
        <Header />
        <div className="w-full h-full flex items-center justify-center">
          <h1 className="font-bold text-white text-2xl">
            Produto não encontrado
          </h1>
        </div>
        <Footer />
      </div>
    );
  }

  const images =
    Array.isArray(product.images) &&
    product.images.filter((img) => img && img !== "").length > 0
      ? product.images.filter((img) => img && img !== "")
      : [Banner, Banner, Banner];

  const plans = [
    { key: "monthly", label: "Mensal" },
    { key: "quarterly", label: "Trimestral" },
    { key: "lifetime", label: "Lifetime" },
  ];

  return (
    <div className="w-screen flex flex-col">
      <Header />

      <div className="w-full flex justify-center px-3 md:px-0">
        <div className="w-full md:w-[67.71%]">
          <div className="mt-8 md:mt-12.5 mb-8 md:mb-12.5 flex flex-col gap-6 md:gap-12.5">
            {/* VOLTAR */}
            <Link to={`/products`}>
              <div className="cursor-pointer flex flex-row gap-2 md:gap-5 items-center">
                <h1 className="font-normal text-[14px] md:text-[16px] text-[#666666]">
                  Volte aos produtos
                </h1>
              </div>
            </Link>

            <div className="flex flex-col md:flex-row gap-8 md:gap-12.5">
              {/* IMAGENS */}
              <div className="flex flex-col gap-4 md:gap-5 w-full md:w-auto">
                <img
                  src={images[selectedImage]}
                  alt="banner"
                  className="w-full md:w-162.5 h-full sm:h-[350px] md:h-144.75 rounded-lg bg-black"
                />

                <div className="flex flex-row gap-2 md:gap-5 overflow-x-auto">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`min-w-[90px] sm:min-w-[120px] md:w-50.5 h-[80px] sm:h-[100px] md:h-45 rounded-lg overflow-hidden
                      ${
                        selectedImage === index ? "ring-2 ring-yellow-400" : ""
                      }`}
                    >
                      <img src={img} className="w-full h-full bg-black" />
                    </button>
                  ))}
                </div>
              </div>

              {/* INFO */}
              <div className="flex flex-col gap-4 w-full">
                <h1 className="font-bold text-[22px] sm:text-[26px] md:text-[32px] text-[#F2F2F2]">
                  {product.name}
                </h1>

                {/* ENTREGA */}
                <div className="flex flex-row flex-wrap gap-4 md:gap-10 items-center">
                  <div className="flex flex-row gap-1 items-center">
                    <h1 className="font-medium text-[14px] md:text-[16px] text-[#F2F2F2]">
                      5.0
                    </h1>
                  </div>

                  <div className="px-3 md:w-38 h-7.5 rounded-[10px] flex items-center justify-center bg-[#948327]">
                    <h1 className="font-medium text-[11px] md:text-[12px] text-[#F7DA04]">
                      Entrega automatica
                    </h1>
                  </div>
                </div>

                {/* PLANOS */}
                <div className="flex flex-col gap-3 mt-3">
                  <h2 className="text-[#948327] font-semibold text-sm md:text-base">
                    Escolha um plano:
                  </h2>

                  <div className="flex flex-col sm:flex-row gap-2">
                    {plans.map((plan) => (
                      <button
                        key={plan.key}
                        onClick={() => setSelectedPlan(plan.key)}
                        className={`flex justify-between gap-2 px-3 py-2 rounded-lg border w-full
                        ${
                          selectedPlan === plan.key
                            ? "bg-[#2c2c2c] border-[#948327] text-white"
                            : "bg-[#1a1a1a] border-[#666]/30 text-gray-400"
                        }`}
                      >
                        <span>{plan.label}</span>
                        <span>R${product.prices?.[plan.key] || 0}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* BOTÃO */}
                <button className="mt-4 bg-[#948327] hover:bg-[#7a6b1f] text-black font-semibold py-3 rounded-lg w-full">
                  Comprar agora
                </button>

                {/* INFO FINAL */}
                <div className="flex flex-col sm:flex-row gap-2 sm:justify-between mt-2">
                  <span className="text-sm text-gray-400">
                    Categoria: {product.category}
                  </span>
                  <span className="text-sm text-gray-400">
                    Plataforma: Windows
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;
