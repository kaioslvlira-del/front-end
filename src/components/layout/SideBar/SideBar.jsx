import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const NavItem = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="flex items-center gap-2.5 text-[#BFBFBF] hover:text-white hover:bg-[#262626] p-2 rounded-lg transition"
  >
    {children}
  </Link>
);

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/auth/me", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then(setUser);
  }, []);

  const getAvatar = () => {
    if (!user.useDiscordAvatar) {
      return "https://via.placeholder.com/120";
    }

    // usuário com avatar
    if (user.avatar && user.discordId) {
      return `https://cdn.discordapp.com/avatars/${user.discordId}/${user.avatar}.png`;
    }

    // usuário sem avatar (default Discord)
    const defaultAvatarIndex = Number(user.discriminator) % 5;
    return `https://cdn.discordapp.com/embed/avatars/${defaultAvatarIndex}.png`;
  };

  if (!user) return null;

  return (
    <>
      {/* BOTÃO MOBILE */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-5 left-5 z-50 w-10 h-10 bg-[#948327] rounded-[10px] flex items-center justify-center"
      >
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
          <path
            d="M4 6H20M4 12H20M4 18H20"
            stroke="#F7DA04"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="md:hidden fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`
          fixed md:static z-50
          top-0 left-0 h-screen
          w-[280px] bg-[#1A1A1A] border-r border-[#666666]/40
          flex flex-col justify-between
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* TOP */}
        <div>
          <div className="mt-[80px] flex flex-col items-center gap-2">
            <img
              src={getAvatar()}
              alt="avatar"
              className="w-16 h-16 rounded-full object-cover"
            />

            <h1 className="text-white font-bold">{user.username}</h1>

            <p className="text-zinc-400 text-sm">{user.email || "Sem email"}</p>
          </div>

          {/* MENU */}
          <div className="mt-10 px-6 flex flex-col gap-8">
            {/* USER */}
            <div>
              <h1 className="text-xs font-bold text-zinc-400 mb-3">USER</h1>

              <div className="flex flex-col gap-2">
                <NavItem to="/dashboard" onClick={() => setOpen(false)}>
                  Meu Perfil
                </NavItem>

                <NavItem
                  to="/dashboard/inventory"
                  onClick={() => setOpen(false)}
                >
                  Inventário
                </NavItem>

                <NavItem
                  to="/dashboard/transactions"
                  onClick={() => setOpen(false)}
                >
                  Transações
                </NavItem>

                <NavItem to="/products" onClick={() => setOpen(false)}>
                  Produtos
                </NavItem>
              </div>
            </div>

            {/* ADMIN */}
            {user.isAdmin && (
              <div>
                <h1 className="text-xs font-bold text-zinc-400 mb-3">ADMIN</h1>

                <div className="flex flex-col gap-2">
                  <NavItem to="/dashboard/users" onClick={() => setOpen(false)}>
                    Usuários
                  </NavItem>

                  <NavItem
                    to="/dashboard/products"
                    onClick={() => setOpen(false)}
                  >
                    Produtos
                  </NavItem>
                  <NavItem to="/dashboard/keys" onClick={() => setOpen(false)}>
                    Keys
                  </NavItem>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex justify-center gap-3 mb-10">
          <Link to={`/`}>
            <button className="cursor-pointer rounded-[10px] w-10 h-10 bg-linear-to-t from-[#262626] to-[#333333] border-2 border-[#666666]/40 flex items-center justify-center">
              <svg width="20" height="19" viewBox="0 0 20 19" fill="none">
                <path
                  d="M8.22873 13.7975L8.62873 13.2641C9.14873 12.5708 10.1887 12.5708 10.7087 13.2641L11.1087 13.7975C11.7515 14.6545 11.14 15.8775 10.0687 15.8775H9.26873C8.19747 15.8775 7.58597 14.6545 8.22873 13.7975Z"
                  fill="#666666"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.50131 5.4114L7.16991 0.876524C8.63078 -0.292175 10.7066 -0.292175 12.1675 0.876525L17.8361 5.4114C18.9676 6.31665 19.5211 7.76309 19.2829 9.19247L18.2258 15.5351C17.9043 17.4638 16.2355 18.8775 14.2802 18.8775H5.05719C3.10184 18.8775 1.43308 17.4638 1.11162 15.5351L0.0545149 9.19247C-0.183715 7.76309 0.369756 6.31664 1.50131 5.4114Z"
                  fill="#666666"
                />
              </svg>
            </button>
          </Link>

          <Link to={`/`}>
            <button className="cursor-pointer rounded-[10px] w-10 h-10 bg-linear-to-t from-[#942727] to-[#2E0C0C] border-2 border-[#F70404]/40 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M5.83333 1.875C3.64721 1.875 1.875 3.64721 1.875 5.83333V14.1667C1.875 16.3528 3.64721 18.125 5.83333 18.125H7.5C9.22589 18.125 10.625 16.7259 10.625 15"
                  fill="#F70404"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideBar;
