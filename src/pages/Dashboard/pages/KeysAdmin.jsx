import { useEffect, useState } from "react";
import { getKeys, toggleKey, deleteKey } from "../../../services/api";
import KeyModal from "../../../components/interface/Modal/KeyModal";

// 🔥 IMPORTANTE
import { categories, categoryLabels } from "../../../constants/categories";

const KeysAdmin = () => {
  const [keys, setKeys] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [open, setOpen] = useState(false);

  const loadKeys = async () => {
    try {
      const data = await getKeys();
      console.log("KEYS:", data); // 🔥 DEBUG
      setKeys(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadKeys();
  }, []);

  const handleToggle = async (id) => {
    await toggleKey(id);
    loadKeys();
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Deseja deletar esta key?");
    if (!confirm) return;

    await deleteKey(id);
    loadKeys();
  };

  const formatDate = (date) => {
    if (!date) return "Não informado";
    return new Date(date).toLocaleDateString("pt-BR");
  };

  // 🔥 FILTRO CORRETO
  const filteredKeys = keys.filter((k) => {
    const matchSearch = k.code?.toLowerCase().includes(search.toLowerCase());

    const matchCategory = category === "" || k.product?.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div className="w-full h-screen flex flex-col justify-center bg-black">
      <div className="my-[100px] mx-[50px] flex flex-col gap-5">
        {/* HEADER */}
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-[20px] text-[#F2F2F2]">
            Bem-vindo de volta,{" "}
            <span className="font-extrabold text-[#948327]">ADMIN</span>.
          </h1>

          <p className="text-[14px] text-[#BFBFBF]">
            Gerencie todas as keys do sistema.
          </p>
        </div>

        <div className="w-full bg-[#1a1a1a] rounded-[10px] border border-[#666666]/40">
          <div className="p-10 flex flex-col gap-5">
            {/* TOP */}
            <div className="flex gap-5">
              <div className="w-[60px] h-[60px] bg-[#948327] border border-[#F7DA04]/40 rounded-[10px] flex items-center justify-center">
                🔑
              </div>

              <div>
                <h1 className="text-white font-semibold">Keys</h1>
                <p className="text-zinc-400 text-sm">
                  Controle total das keys.
                </p>
              </div>
            </div>

            {/* SEARCH + FILTRO + BOTÃO */}
            <div className="flex justify-between flex-row gap-5">
              {/* SEARCH */}
              <input
                type="text"
                placeholder="Pesquisar key..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-[#262626] border border-[#666666]/40 rounded-lg text-zinc-300 outline-none py-2 px-3"
              />

              {/* FILTRO CATEGORIA */}
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-[#262626] border border-[#666666]/40 rounded-lg text-zinc-300 px-3 outline-none"
              >
                <option value="">Todas categorias</option>

                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {categoryLabels[cat]}
                  </option>
                ))}
              </select>

              {/* BOTÃO */}
              <button
                onClick={() => setOpen(true)}
                className="py-2 px-4 flex justify-center items-center bg-green-950 border border-green-700/40 rounded-lg cursor-pointer text-green-500"
              >
                +
              </button>
            </div>

            {/* LISTA */}
            <div className="w-full h-[400px] overflow-y-auto bg-[#262626] border border-[#666666]/40 rounded-lg p-4 flex flex-col gap-3">
              {filteredKeys.length === 0 ? (
                <span className="text-zinc-500 text-center">
                  Nenhuma key encontrada
                </span>
              ) : (
                filteredKeys.map((k) => (
                  <div
                    key={k._id}
                    className="flex justify-between items-center bg-[#1f1f1f] p-3 rounded-lg border border-[#666]/20"
                  >
                    {/* INFO */}
                    <div>
                      <h3 className="text-white font-semibold">{k.code}</h3>

                      <p className="text-zinc-400 text-sm">{k.product?.name}</p>

                      {/* 🔥 LABEL BONITA */}
                      <p className="text-xs text-yellow-400">
                        {categoryLabels[k.product?.category]}
                      </p>

                      <p className="text-xs text-zinc-500">
                        Criada em: {formatDate(k.createdAt)}
                      </p>
                    </div>

                    {/* AÇÕES */}
                    <div className="flex items-center gap-3">
                      {/* STATUS */}
                      <span
                        className={`text-xs px-2 py-1 rounded ${
                          k.active
                            ? "bg-green-600 text-white"
                            : "bg-zinc-600 text-white"
                        }`}
                      >
                        {k.active ? "ATIVA" : "INATIVA"}
                      </span>

                      {/* TOGGLE */}
                      <button
                        onClick={() => handleToggle(k._id)}
                        className="text-yellow-400 text-sm"
                      >
                        {k.active ? "Desativar" : "Ativar"}
                      </button>

                      {/* DELETE */}
                      <button
                        onClick={() => handleDelete(k._id)}
                        className="text-red-500 text-sm"
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

      {/* MODAL */}
      <KeyModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onCreated={loadKeys}
      />
    </div>
  );
};

export default KeysAdmin;
