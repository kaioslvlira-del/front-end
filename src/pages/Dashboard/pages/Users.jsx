import { useEffect, useState } from "react";
import { getUsers, toggleAdmin } from "../../../services/api";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchUsers = async () => {
    try {
      const data = await getUsers(search, page);

      setUsers(data.users);
      setTotalPages(data.totalPages);
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggleAdmin = async (id) => {
    await toggleAdmin(id);
    fetchUsers();

    if (selectedUser && selectedUser._id === id) {
      setSelectedUser({
        ...selectedUser,
        isAdmin: !selectedUser.isAdmin,
      });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [search, page]);

  const formatDate = (date) => {
    if (!date) return "Não informado";
    return new Date(date).toLocaleDateString("pt-BR");
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-black">
      <div className="my-[100px] mx-[50px] flex flex-col gap-5">
        {/* Header */}
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-[20px] text-[#F2F2F2]">
            Bem-vindo de volta,{" "}
            <span className="font-extrabold text-[#948327]">ADMIN</span>.
          </h1>
          <p className="text-[14px] text-[#BFBFBF]">
            Aqui você encontrará os usuários ativos na plataforma.
          </p>
        </div>

        <div className="w-full bg-[#1a1a1a] rounded-[10px] border border-[#666666]/40">
          <div className="p-10 flex flex-col gap-5">
            {/* Search */}
            <input
              type="text"
              placeholder="Pesquise um Usuário..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1); // reset pagina
              }}
              className="w-full bg-[#262626] border border-[#666666]/40 rounded-lg text-zinc-400 outline-none py-2 px-3"
            />

            {/* Lista */}
            <div className="w-full h-[400px] overflow-y-auto bg-[#262626] border border-[#666666]/40 rounded-lg p-4 flex flex-col gap-3">
              {users.length === 0 ? (
                <span className="text-zinc-500 text-center">
                  Nenhum usuário encontrado
                </span>
              ) : (
                users.map((user) => (
                  <div
                    key={user._id}
                    onClick={() => setSelectedUser(user)}
                    className="flex justify-between items-center bg-[#1a1a1a] border border-[#666666]/40 rounded-lg px-4 py-3 cursor-pointer hover:bg-[#222]"
                  >
                    <span className="text-white font-semibold">
                      {user.username}
                    </span>

                    <div className="flex items-center gap-3">
                      <span
                        className={`text-xs px-2 py-1 rounded-md ${
                          user.isAdmin ? "bg-green-600" : "bg-zinc-600"
                        } text-white`}
                      >
                        {user.isAdmin ? "ADMIN" : "MEMBRO"}
                      </span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleToggleAdmin(user._id);
                        }}
                        className="px-3 py-1 bg-[#948327] text-[#F7DA04] rounded-md text-sm"
                      >
                        {user.isAdmin ? "Remover Admin" : "Tornar Admin"}
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* PAGINAÇÃO */}
            <div className="flex justify-center gap-3 mt-4">
              <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className="px-3 py-1 bg-[#262626] text-white rounded disabled:opacity-50"
              >
                Anterior
              </button>

              <span className="text-white">
                Página {page} de {totalPages}
              </span>

              <button
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
                className="px-3 py-1 bg-[#262626] text-white rounded disabled:opacity-50"
              >
                Próxima
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL (mantido igual) */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <div className="bg-[#1a1a1a] w-[500px] rounded-[10px] p-6">
            <h1 className="text-white text-lg font-bold mb-4">
              {selectedUser.username}
            </h1>

            <div className="flex flex-col gap-2 text-sm text-zinc-300">
              <span>ID Discord: {selectedUser.discordId}</span>
              <span>Email: {selectedUser.email}</span>
              <span>Nome: {selectedUser.fullName}</span>
              <span>CPF: {selectedUser.cpf}</span>
              <span>Nascimento: {selectedUser.birthDate}</span>
              <span>Criado em: {formatDate(selectedUser.createdAt)}</span>
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => handleToggleAdmin(selectedUser._id)}
                className="px-4 py-2 bg-[#948327] text-[#F7DA04] rounded"
              >
                {selectedUser.isAdmin ? "Remover Admin" : "Tornar Admin"}
              </button>

              <button
                onClick={() => setSelectedUser(null)}
                className="px-4 py-2 bg-red-600 text-white rounded"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
