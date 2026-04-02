import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";

const Terms = () => {
  return (
    <>
      <Header />
      <main className="w-screen min-h-[47.917vw] flex items-center justify-center">
        <div className="w-[67.71%] h-full flex flex-col gap-5">
          <div className="mt-12.5 mb-12.5">
            <div className="flex flex-col gap-2.5">
              <h1 className="font-bold text-[20px] text-[#F2F2F2]">
                Termos e Diretrizes{" "}
                <span className="font-extrabold text-[#948327]">
                  Royal Solutions
                </span>
              </h1>
              <div className="flex flex-col gap-0.5">
                <p className="font-bold text-[14px] text-[#BFBFBF]">
                  <span className="text-[#948327]">1. </span>
                  Para utilizar nossos serviços, você deve obrigatoriamente
                  concordar com nossos termos independentemente do serviço.
                </p>
                <p className="font-bold text-[14px] text-[#BFBFBF]">
                  <span className="text-[#948327]">2. </span>
                  Você concorda que as compras até então realizadas são
                  condicionados apenas em produtos virtuais, não sendo
                  contemplado com produtos físicos ou entregas domiciliares.
                </p>
                <p className="font-bold text-[14px] text-[#BFBFBF]">
                  <span className="text-[#948327]">3. </span>
                  Ao utilizar nossos serviços, você concorda com nossos Termos e
                  Políticas de Uso, podendo ser impedido de uso em caso de
                  descumprimento das mesmas.
                </p>
                <p className="font-bold text-[14px] text-[#BFBFBF]">
                  <span className="text-[#948327]">4. </span>
                  Você pode ser impedido de utilizar nossos serviços em caso de
                  descumprimento deste termo ou em caso de estar bloqueado e/ou
                  banido de nosso servidor.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <h1 className="font-bold text-[20px] text-[#F2F2F2]">
                Politica de reembolso e informações adicionais
              </h1>
              <div className="flex flex-col gap-0.5">
                <p className="font-bold text-[14px] text-[#BFBFBF]">
                  <span className="text-[#948327]">1. </span>O reembolso dos
                  valores monetários e serviços contratados poderão ser
                  solicitados na seguinte condição:
                </p>
                <p className="font-bold text-[14px] text-[#BFBFBF]">
                  <span className="text-[#948327]">2. </span>
                  Caso o valor tenha sido debitado ou o devido valor tenha sido
                  pago e não tenha recebido os produtos corretamente.
                </p>
                <p className="font-bold text-[14px] text-[#BFBFBF]">
                  <span className="text-[#948327]">3. </span>
                  Em caso de algum problema no software que impeça o
                  funcionamento/uso para todos.
                </p>
                <p className="font-bold text-[14px] text-[#BFBFBF]">
                  <span className="text-[#948327]">4. </span>
                  Solicitações de reembolso por mal uso/problema
                  individual/gosto pessoal (algo no software não te agradou)
                  serão negadas.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <h1 className="font-bold text-[20px] text-[#F2F2F2]">
                Responsabilidades da{" "}
                <span className="font-extrabold text-[#948327]">
                  Royal Solutions{" "}
                </span>
                com você:
              </h1>
              <div className="flex flex-col gap-0.5">
                <p className="font-bold text-[14px] text-[#BFBFBF]">
                  <span className="text-[#948327]">1. </span>A Royal Solutions
                  reserva-se o direito de preservar suas informações como sua
                  aplicação, a partir do momento que houver utilização dos
                  serviços da Royal Solutions.
                </p>
                <p className="font-bold text-[14px] text-[#BFBFBF]">
                  <span className="text-[#948327]">2. </span>A equipe da Royal
                  Solutions não se responsabiliza pela perda dos produtos
                  (exemplo: che4ts, byp4ss...), sendo de total responsabilidade
                  sua guardar os produtos.
                </p>
                <p className="font-bold text-[14px] text-[#BFBFBF]">
                  <span className="text-[#948327]">3. </span>
                  Apenas reiterando o termo 3, a Royal Soluttions possui
                  sistemas robustos de backup, porém em caso de falha global, a
                  responsabilidade do produto entregue é sua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Terms;
