const Inventory = () => {
  return (
    <div className="w-full h-screen flex justify-center flex-col bg-black">
      <div className="my-[100px] mx-[50px] flex flex-col gap-5">
        {/* Header */}
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-[20px] text-[#F2F2F2]">
            Bem-vindo de volta,{" "}
            <span className="font-extrabold text-[#948327]">Kaio Lira</span>.
          </h1>
          <p className="text-[14px] text-[#BFBFBF]">
            Aqui você encontrará os detalhes dos produtos adquiridos.
          </p>
        </div>

        {/* Card */}
        <div className="w-full bg-[#1a1a1a] rounded-[10px] border border-[#666666]/40">
          <div className="p-10 flex flex-col gap-5">
            {/* Top */}
            <div className="flex gap-5">
              <div className="w-[60px] h-[60px] bg-[#948327] border border-[#F7DA04]/40 rounded-[10px] flex items-center justify-center">
                <svg
                  width="24"
                  height="26"
                  viewBox="0 0 24 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.66667 5.33333C7.11438 5.33333 6.66667 5.78105 6.66667 6.33333C6.66667 6.88562 7.11438 7.33333 7.66667 7.33333H15.6667C16.219 7.33333 16.6667 6.88562 16.6667 6.33333C16.6667 5.78105 16.219 5.33333 15.6667 5.33333H7.66667Z"
                    fill="#F7DA04"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 6.33333C0 2.83553 2.83553 0 6.33333 0H13.8878C15.666 0 17.3622 0.747484 18.562 2.05979L21.6742 5.46373C22.7415 6.63109 23.3333 8.15556 23.3333 9.73727V19.6667C23.3333 23.1645 20.4978 26 17 26H6.33333C2.83553 26 0 23.1645 0 19.6667V6.33333ZM21.3333 19.6667C21.3333 21.7157 19.9111 23.4326 18 23.884V21C18 18.975 16.3584 17.3333 14.3333 17.3333H9C6.97496 17.3333 5.33333 18.975 5.33333 21V23.884C3.4222 23.4326 2 21.7157 2 19.6667V6.33333C2 3.9401 3.9401 2 6.33333 2H13.8878C15.1044 2 16.265 2.51144 17.086 3.40933L20.1981 6.81327C20.9284 7.61199 21.3333 8.65504 21.3333 9.73727V19.6667ZM7.33333 21V24H16V21C16 20.0795 15.2538 19.3333 14.3333 19.3333H9C8.07953 19.3333 7.33333 20.0795 7.33333 21Z"
                    fill="#F7DA04"
                  />
                </svg>
              </div>

              <div>
                <h1 className="text-white font-semibold">Inventário</h1>
                <p className="text-zinc-400 text-sm">
                  Veja os itens disponíveis no seu inventário.
                </p>
              </div>
            </div>

            {/* Conteúdo */}
            <div className="w-full h-[400px] bg-[#262626] border border-[#666666]/40 rounded-lg flex items-center justify-center">
              <span className="text-zinc-500">Vazio</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
