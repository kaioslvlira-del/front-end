import { useEffect, useState } from "react";
import { getProfile, updateProfile } from "../../../services/api";

// 🔥 FORA DO COMPONENTE (resolve o bug)
const InputField = ({ label, value, onChange, disabled }) => (
  <div className="flex flex-col gap-1">
    <h1 className="font-bold text-zinc-400">{label}</h1>

    <input
      value={value || ""}
      onChange={onChange}
      disabled={disabled}
      className="w-full px-3 py-3 outline-none bg-[#262626] border-2 border-[#666666]/40 rounded-[10px] text-[#f2f2f2]"
    />
  </div>
);

const MyProfile = () => {
  const [user, setUser] = useState({
    discordId: "",
    avatar: "",
    discriminator: "0",
    username: "",
    fullName: "",
    birthDate: "",
    email: "",
    cpf: "",
    isPrivate: false,
    useDiscordAvatar: true,
    isAdmin: false,
  });

  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const load = async () => {
      const data = await getProfile();
      if (data) setUser(data);
    };
    load();
  }, []);

  const handleSave = async () => {
    try {
      await updateProfile(user);
      setEditing(false);
      alert("Perfil atualizado!");
    } catch (err) {
      console.error(err);
    }
  };

  // 🔥 FORMATADORES

  const formatCPF = (value) => {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return value;
  };

  const formatDate = (value) => {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "$1/$2");
    value = value.replace(/(\d{2})(\d)/, "$1/$2");
    return value;
  };

  const formatName = (value) => {
    return value.replace(/\b\w/g, (l) => l.toUpperCase());
  };

  const getAvatar = () => {
    if (!user.useDiscordAvatar) {
      return "https://via.placeholder.com/120";
    }

    if (user.avatar && user.discordId) {
      return `https://cdn.discordapp.com/avatars/${user.discordId}/${user.avatar}.png`;
    }

    const index = Number(user.discriminator) % 5;
    return `https://cdn.discordapp.com/embed/avatars/${index}.png`;
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-black">
      <div className="my-10 sm:my-16 md:my-[100px] px-4 sm:px-6 md:px-10 lg:px-[50px] flex flex-col gap-5">
        {/* Header */}
        <div className="flex flex-col gap-1 text-center sm:text-left">
          <h1 className="font-bold text-[18px] sm:text-[20px] text-[#F2F2F2]">
            Bem-vindo de volta,{" "}
            <span className="font-extrabold text-[#948327]">
              {user.username}
            </span>
            .
          </h1>
          <p className="text-[14px] text-[#BFBFBF]">
            Aqui você encontrará as informações da sua conta.
          </p>
        </div>

        {/* PERFIL */}
        <div className="w-full bg-[#1a1a1a] rounded-[10px] border-2 border-[#666666]/40 p-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src={getAvatar()}
              alt="avatar"
              className="w-16 h-16 rounded-full object-cover"
            />

            <div>
              <h1 className="text-white text-xl font-bold">{user.username}</h1>

              <div className="flex gap-2 mt-2">
                <span className="px-2 py-1 bg-[#948327] text-white rounded">
                  MEMBRO
                </span>

                {user.isAdmin && (
                  <span className="px-2 py-1 bg-red-600 text-white rounded">
                    ADMIN
                  </span>
                )}
              </div>
            </div>
          </div>

          {!editing ? (
            <button
              onClick={() => setEditing(true)}
              className="bg-[#948327] px-4 py-2 rounded text-white"
            >
              Editar
            </button>
          ) : (
            <button
              onClick={handleSave}
              className="bg-green-600 px-4 py-2 rounded text-white"
            >
              Salvar
            </button>
          )}
        </div>

        {/* GRID */}
        <div className="flex flex-col lg:flex-row gap-5">
          {/* INFO */}
          <div className="w-full lg:w-1/2 bg-[#1a1a1a] rounded-[10px] border-2 border-[#666666]/40 p-8 flex flex-col gap-5">
            <InputField
              label="NOME COMPLETO"
              value={user.fullName}
              disabled={!editing}
              onChange={(e) =>
                setUser({
                  ...user,
                  fullName: formatName(e.target.value),
                })
              }
            />

            <InputField
              label="DATA DE NASCIMENTO"
              value={user.birthDate}
              disabled={!editing}
              onChange={(e) =>
                setUser({
                  ...user,
                  birthDate: formatDate(e.target.value),
                })
              }
            />

            <InputField
              label="E-MAIL"
              value={user.email}
              disabled={!editing}
              onChange={(e) =>
                setUser({
                  ...user,
                  email: e.target.value,
                })
              }
            />

            <InputField
              label="CPF"
              value={user.cpf}
              disabled={!editing}
              onChange={(e) =>
                setUser({
                  ...user,
                  cpf: formatCPF(e.target.value),
                })
              }
            />
          </div>

          {/* CONFIG */}
          <div className="w-full lg:w-1/2 bg-[#1a1a1a] rounded-[10px] border-2 border-[#666666]/40 p-8 flex flex-col gap-5">
            <h1 className="text-white font-semibold">Configurações</h1>

            <label className="flex justify-between text-white">
              Usar avatar do Discord
              <input
                type="checkbox"
                disabled={!editing}
                checked={user.useDiscordAvatar}
                onChange={(e) =>
                  setUser({
                    ...user,
                    useDiscordAvatar: e.target.checked,
                  })
                }
              />
            </label>

            <label className="flex justify-between text-white">
              Perfil Privado
              <input
                type="checkbox"
                disabled={!editing}
                checked={user.isPrivate}
                onChange={(e) =>
                  setUser({
                    ...user,
                    isPrivate: e.target.checked,
                  })
                }
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
