import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />

      {/* HERO */}
      <main className="w-screen min-h-[700px] flex items-center justify-center px-4">
        <div className="w-full md:w-[67.71%] flex flex-col justify-center gap-10">
          {/* TAG */}
          <div className="w-75 h-10 bg-[#948327] border-[#F7DA04]/40 border-2 rounded-full flex items-center justify-center gap-2.5">
            <p className="font-medium text-[12px] md:text-[14px] text-[#F2F2F2] text-center px-2">
              Confiado por mais de 10k de players.
            </p>
          </div>

          {/* TEXTO */}
          <div className="flex flex-col gap-2.5">
            <h1 className="font-extrabold text-[32px] sm:text-[40px] md:text-[60px] text-[#F2F2F2] leading-tight md:leading-14 max-w-full md:w-150">
              Leve a sua <b className="text-[#948327]">jogabilidade</b> para
              outro <b className="text-[#948327]">patamar</b>.
            </h1>

            <p className="font-bold text-[18px] sm:text-[22px] md:text-[32px] text-[#BFBFBF] leading-tight md:leading-9 max-w-full md:max-w-225">
              Descubra a plataforma definitiva de ferramentas para aprimoramento
              de jogos. Segura, confiável e projetada para o jogador moderno.
            </p>
          </div>

          {/* BOTÕES */}
          <div className="flex flex-col md:flex-row gap-5 w-full md:w-[75%]">
            <button className="w-full h-12.5 bg-[#948327] hover:bg-[#ae9b2e] transition-all duration-500 rounded-[10px] font-bold text-[16px] text-[#F2F2F2]">
              Junte-se a comunidade
            </button>

            <button className="w-full h-12.5 border-2 border-[#948327] hover:bg-[#948327] transition-all duration-500 rounded-[10px] font-bold text-[16px] text-[#948327] hover:text-[#F2F2F2]">
              Ver demonstração
            </button>
          </div>
        </div>
      </main>

      {/* FEATURES */}
      <section className="w-screen flex items-center justify-center px-4">
        <div className="w-full md:w-[67.71%] flex flex-col mt-5 mb-5 gap-5">
          <div className="flex flex-col items-center text-center">
            <h1 className="font-bold text-[24px] md:text-[32px] text-[#F2F2F2]">
              Funcionalidades
            </h1>
            <p className="text-[#B3B3B3] text-[12px] max-w-xs">
              Recursos avançados que colocam você sempre um passo à frente.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-5">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="w-full sm:w-[48%] lg:w-105 h-56 bg-[#1A1A1A] border border-[#666666]/15 rounded-[10px]"
              >
                <div className="m-6 md:m-10 flex flex-col gap-5">
                  <h1 className="font-bold text-[18px] md:text-[20px] text-[#F2F2F2]">
                    Segurança de ponta
                  </h1>
                  <p className="text-[12px] md:text-[14px] text-[#B3B3B3]">
                    Limpo, seguro e invisível.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="w-screen flex justify-center px-4">
        <div className="w-full md:w-[67.71%] flex flex-col gap-5">
          <div className="flex flex-col items-center text-center">
            <h1 className="font-bold text-[24px] md:text-[32px] text-[#F2F2F2]">
              Conheça nosso time
            </h1>
          </div>

          <div className="flex flex-wrap justify-center gap-5">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-full sm:w-[48%] lg:w-105 h-67.25 bg-[#1A1A1A] border border-[#666666]/15 rounded-[10px] flex flex-col items-center justify-center"
              >
                <div className="w-24 md:w-37.5 h-24 md:h-37.5 bg-[#262626] rounded-full"></div>

                <div className="text-center mt-3">
                  <h1 className="text-white font-bold">Kaio Lira</h1>
                  <p className="text-[#B3B3B3] text-sm">Founder</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-screen flex justify-center px-4 mt-10 mb-10">
        <div className="w-full md:w-[67.71%] flex justify-center">
          <div className="w-full md:w-200 bg-[#1A1A1A] border border-[#666666]/40 rounded-[10px] flex flex-col items-center gap-5 p-6 text-center">
            <h1 className="text-[24px] md:text-[48px] font-extrabold text-[#F2F2F2] max-w-[500px]">
              Pronto para ser indetectável?
            </h1>

            <div className="flex flex-col md:flex-row gap-5 w-full md:w-auto">
              <a href="/products" className="w-full">
                <button className="w-full md:w-58.75 h-12 md:h-15 bg-[#948327] rounded-[10px] text-white font-bold">
                  Comprar Agora
                </button>
              </a>

              <a href="#" className="w-full">
                <button className="w-full md:w-58.75 h-12 md:h-15 border-2 border-[#948327] rounded-[10px] text-[#948327] hover:bg-[#948327] hover:text-white transition">
                  Fale conosco
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
