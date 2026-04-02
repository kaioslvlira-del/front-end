const UserModal = ({ user, onClose, onToggleAdmin }) => {
  if (!user) return null;

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

  const formatDate = (date) => {
    if (!date) return "Não informado";
    return new Date(date).toLocaleDateString("pt-BR");
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-[#1a1a1a] w-[500px] rounded-lg p-6 border border-[#666666]/40">
        {/* HEADER */}
        <div className="flex items-center gap-4 mb-5">
          <img
            src={getAvatar()}
            className="w-16 h-16 rounded-full object-cover"
          />

          <div>
            <h1 className="text-white text-xl font-bold">{user.username}</h1>
            <span className="text-zinc-400 text-sm">ID: {user.discordId}</span>
          </div>
        </div>

        {/* DADOS */}
        <div className="flex flex-col gap-2 text-sm">
          <span className="text-white">
            Email: {user.email || "Não informado"}
          </span>
          <span className="text-white">
            Nome: {user.fullName || "Não informado"}
          </span>
          <span className="text-white">CPF: {user.cpf || "Não informado"}</span>
          <span className="text-white">
            Nascimento: {user.birthDate || "Não informado"}
          </span>
          <span className="text-white">
            Conta criada em: {formatDate(user.createdAt)}
          </span>
        </div>

        {/* AÇÕES */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => onToggleAdmin(user._id)}
            className="px-4 py-2 bg-[#948327] text-[#F7DA04] rounded"
          >
            {user.isAdmin ? "Remover Admin" : "Tornar Admin"}
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
