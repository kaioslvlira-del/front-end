import { useEffect, useState } from "react";
import { createKey, getProducts } from "../../../services/api";

export default function KeyModal({ isOpen, onClose, onCreated }) {
  const [products, setProducts] = useState([]);

  const [form, setForm] = useState({
    productId: "",
    type: "monthly",
    quantity: 1,
  });

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    if (!form.productId) return;

    await createKey({
      productId: form.productId,
      type: form.type,
      quantity: Number(form.quantity) || 1,
    });

    onCreated();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="w-[350px] bg-[#1a1a1a] border border-[#666]/30 rounded-xl p-5 flex flex-col gap-4">
        <h2 className="text-white font-semibold text-lg">Criar Key</h2>

        <select
          name="productId"
          value={form.productId}
          onChange={handleChange}
          className="bg-[#262626] border border-[#666]/30 rounded-lg px-3 py-2 text-white outline-none"
        >
          <option value="">Selecione o produto</option>
          {products.map((p) => (
            <option key={p._id} value={p._id}>
              {p.name}
            </option>
          ))}
        </select>

        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="bg-[#262626] border border-[#666]/30 rounded-lg px-3 py-2 text-white outline-none"
        >
          <option value="monthly">Mensal</option>
          <option value="quarterly">Trimestral</option>
          <option value="lifetime">Lifetime</option>
        </select>

        <input
          name="quantity"
          type="number"
          placeholder="Quantidade"
          value={form.quantity}
          onChange={handleChange}
          className="bg-[#262626] border border-[#666]/30 rounded-lg px-3 py-2 text-white outline-none"
        />

        <div className="flex gap-2 mt-2">
          <button
            onClick={handleSubmit}
            className="w-full bg-green-900 border border-green-700/40 text-green-400 rounded-lg py-2 hover:bg-green-800"
          >
            Criar
          </button>

          <button
            onClick={onClose}
            className="w-full bg-red-900 border border-red-700/40 text-red-400 rounded-lg py-2 hover:bg-red-800"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
