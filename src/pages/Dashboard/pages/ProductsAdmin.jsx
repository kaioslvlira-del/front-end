import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../../../services/api";
import ProductModal from "../../../components/interface/Modal/ProductModal";

const ProductsAdmin = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const loadProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Deseja deletar este produto?");
    if (!confirmDelete) return;

    await deleteProduct(id);
    loadProducts();
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="w-full h-screen flex flex-col justify-center bg-black">
      <div className="my-[100px] mx-[50px] flex flex-col gap-5">
        {/* Header */}
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-[20px] text-[#F2F2F2]">
            Bem-vindo de volta,{" "}
            <span className="font-extrabold text-[#948327]">ADMIN</span>.
          </h1>
          <p className="text-[14px] text-[#BFBFBF]">
            Aqui você encontrará os produtos criados para o marketplace.
          </p>
        </div>

        <div className="w-full bg-[#1a1a1a] rounded-[10px] border border-[#666666]/40">
          <div className="p-10 flex flex-col gap-5">
            {/* Top */}
            <div className="flex gap-5">
              <div className="w-[60px] h-[60px] bg-[#948327] border border-[#F7DA04]/40 rounded-[10px] flex items-center justify-center">
                <span className="text-yellow-400 font-bold">📦</span>
              </div>

              <div>
                <h1 className="text-white font-semibold">Produtos</h1>
                <p className="text-zinc-400 text-sm">
                  Veja os produtos do marketplace.
                </p>
              </div>
            </div>

            {/* Conteúdo */}
            <div className="flex flex-col gap-5">
              {/* Busca + botão */}
              <div className="flex justify-between flex-row gap-5">
                <input
                  type="text"
                  placeholder="Pesquise um Produto..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-[#262626] border border-[#666666]/40 rounded-lg text-zinc-300 outline-none py-2 px-3"
                />

                <button
                  onClick={() => setOpen(true)}
                  className="py-2 px-4 flex justify-center items-center bg-green-950 border border-green-700/40 rounded-lg cursor-pointer text-green-500"
                >
                  +
                </button>
              </div>

              {/* Lista */}
              <div className="w-full h-[400px] overflow-y-auto bg-[#262626] border border-[#666666]/40 rounded-lg p-4 flex flex-col gap-3">
                {filteredProducts.length === 0 ? (
                  <span className="text-zinc-500 text-center">
                    Nenhum produto encontrado
                  </span>
                ) : (
                  filteredProducts.map((p) => (
                    <div
                      key={p._id}
                      className="flex justify-between items-center bg-[#1f1f1f] p-3 rounded-lg border border-[#666]/20"
                    >
                      <div>
                        <h3 className="text-white font-semibold">{p.name}</h3>
                        <p className="text-zinc-400 text-sm">{p.category}</p>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="text-xs text-zinc-500 text-right">
                          <p>${p.prices?.monthly}/m</p>
                          <p>${p.prices?.quarterly}/3m</p>
                          <p>${p.prices?.lifetime} lifetime</p>
                        </div>

                        <button
                          onClick={() => handleDelete(p._id)}
                          className="text-red-500 hover:text-red-400 text-sm"
                        >
                          Deletar
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <ProductModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onCreated={loadProducts}
      />
    </div>
  );
};

export default ProductsAdmin;
