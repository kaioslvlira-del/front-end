import { useState } from "react";
import { createProduct } from "../../../services/api";
import { categories, categoryLabels } from "../../../constants/categories";

export default function ProductModal({ isOpen, onClose, onCreated }) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    monthly: "",
    quarterly: "",
    lifetime: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.category) return;

    const payload = {
      name: form.name,
      category: form.category,
      prices: {
        monthly: Number(form.monthly) || 0,
        quarterly: Number(form.quarterly) || 0,
        lifetime: Number(form.lifetime) || 0,
      },
    };

    await createProduct(payload);
    onCreated();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="w-[350px] bg-[#1a1a1a] border border-[#666]/30 rounded-xl p-5 flex flex-col gap-4">
        <h2 className="text-white font-semibold text-lg">Criar Produto</h2>

        <input
          name="name"
          placeholder="Nome do produto"
          value={form.name}
          onChange={handleChange}
          className="bg-[#262626] border border-[#666]/30 rounded-lg px-3 py-2 text-white outline-none"
        />

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="bg-[#262626] border border-[#666]/30 rounded-lg px-3 py-2 text-white outline-none"
        >
          <option value="">Selecione a categoria</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {categoryLabels[cat]}
            </option>
          ))}
        </select>

        <div className="flex gap-2">
          <input
            name="monthly"
            type="number"
            placeholder="Mensal"
            value={form.monthly}
            onChange={handleChange}
            className="w-full bg-[#262626] border border-[#666]/30 rounded-lg px-2 py-2 text-white outline-none"
          />
          <input
            name="quarterly"
            type="number"
            placeholder="Trimestral"
            value={form.quarterly}
            onChange={handleChange}
            className="w-full bg-[#262626] border border-[#666]/30 rounded-lg px-2 py-2 text-white outline-none"
          />
        </div>

        <input
          name="lifetime"
          type="number"
          placeholder="Lifetime"
          value={form.lifetime}
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
