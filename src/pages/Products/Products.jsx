import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";

import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import ProductCard from "../../components/interface/Cards/ProductsCard";

import Banner from "../../assets/images/banner.png";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const categories = [
    "FiveM External",
    "FiveM Bypass",
    "FiveM Spoofer",
    "Outros",
  ];

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  const normalize = (text) => text?.toLowerCase().replace(/-/g, " ").trim();

  const contarProdutos = (categoria) => {
    return products.filter(
      (p) => normalize(p.category) === normalize(categoria),
    ).length;
  };

  const filteredProducts = products.filter((product) => {
    const matchName = product.name
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      !category || normalize(product.category) === normalize(category);

    return matchName && matchCategory;
  });

  return (
    <>
      <Header />

      <main>
        {/* BANNER */}
        <div className="w-screen h-[200px] md:h-70 flex items-center justify-center relative">
          <img
            src={Banner}
            alt="banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* CONTEÚDO */}
        <div className="w-screen flex justify-center px-3 md:px-0">
          <div className="w-full md:w-[67.71%] flex flex-col md:flex-row gap-5 mt-5 mb-5">
            {/* SIDEBAR */}
            <div className="flex flex-col gap-5 w-full md:w-auto">
              {/* SEARCH */}
              <div className="w-full md:w-75 h-15 bg-[#1A1A1A] rounded-[10px] border-2 border-[#666666]/10 flex items-center justify-center">
                <input
                  type="text"
                  placeholder="Pesquisar produtos..."
                  className="w-[90%] md:w-69 h-8.75 bg-[#242424] rounded-[10px] font-medium text-[#666666] text-[12px] outline-none pl-2.5"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              {/* CATEGORIAS */}
              <div className="bg-[#1A1A1A] border-2 border-[#666666]/10 rounded-[10px]">
                <div className="flex flex-col gap-5 m-5">
                  <h1 className="font-medium text-[#f2f2f2] text-[16px]">
                    Categorias
                  </h1>

                  <div className="flex flex-col gap-2.5">
                    <button
                      onClick={() => setCategory("")}
                      className={`flex justify-between items-center px-3 py-2 rounded-lg
                      ${
                        category === ""
                          ? "bg-[#2c2c2c] text-white"
                          : "text-gray-400 hover:bg-[#242424]"
                      }`}
                    >
                      <span>Todas</span>
                      <span className="text-xs text-gray-500">
                        {products.length}
                      </span>
                    </button>

                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`flex justify-between items-center px-3 py-2 rounded-lg
                        ${
                          category === cat
                            ? "bg-[#2c2c2c] text-white"
                            : "text-gray-400 hover:bg-[#242424]"
                        }`}
                      >
                        <span>{cat}</span>
                        <span className="text-xs text-gray-500">
                          {contarProdutos(cat)}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* PRODUTOS */}
            <div className="flex-1 flex flex-wrap justify-center md:justify-start gap-5">
              {filteredProducts.length === 0 ? (
                <span className="text-zinc-500">Nenhum produto encontrado</span>
              ) : (
                filteredProducts.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Products;
