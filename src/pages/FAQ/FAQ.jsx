import { useState } from "react";

import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import FAQItem from "../../components/interface/Items/FAQItem";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "O que um bypass realmente faz?",
      answer:
        "A Royal oferece soluções digitais para automatizar processos e melhorar resultados online.",
    },
    {
      question: "Com que rapidez consigo acesso?",
      answer:
        "Basta criar sua conta na plataforma e escolher o plano ideal para sua necessidade.",
    },
    {
      question: "Preciso atualizar por conta própria?",
      answer:
        "Sim. Você pode cancelar diretamente pelo painel do usuário sem burocracia.",
    },
    {
      question: "Existe suporte ao cliente?",
      answer:
        "Sim. Nosso suporte está disponível para ajudar sempre que necessário.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-screen min-h-screen flex flex-col">
      <Header />

      <div className="w-full flex items-center justify-center px-4">
        <div className="w-full max-w-[1200px] flex flex-col items-center justify-center gap-6 py-10">
          {/* HEADER */}
          <div className="flex flex-col items-center text-center gap-2">
            <p className="font-normal text-[12px] text-[#948327]">
              Royal Solutions
            </p>

            <h1 className="font-bold text-[24px] md:text-[32px] text-[#F2F2F2]">
              Perguntas frequentes
            </h1>

            <p className="font-medium text-[12px] text-[#B3B3B3] max-w-[300px] md:max-w-[420px] leading-4">
              Aqui estão algumas questões que você precisa ter conhecimento
              antes de comprar.
            </p>
          </div>

          {/* FAQ LIST */}
          <div className="w-full max-w-[700px] flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;
