const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="w-full rounded-[10px] bg-[#1A1A1A] border-2 border-[#666666]/15">
      <button
        className="flex items-center justify-between w-full p-4 md:p-5 gap-3 text-left"
        onClick={onClick}
      >
        <span className="font-bold text-[14px] md:text-[16px] text-[#BFBFBF] leading-relaxed">
          {question}
        </span>

        <svg
          className={`transition-transform duration-300 shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M17.0888 8.00385C17.3434 7.7492 17.3609 7.31719 17.1279 7.03892C16.8949 6.76065 16.4995 6.7415 16.2449 6.99615L11.9353 11.3058C10.8723 12.3687 9.128 12.3687 8.06509 11.3058L3.75544 6.99615C3.50079 6.7415 3.10545 6.76065 2.87242 7.03892C2.63939 7.31719 2.65692 7.7492 2.91156 8.00385L7.22121 12.3135C8.7618 13.8541 11.2386 13.8541 12.7791 12.3135L17.0888 8.00385Z"
            fill="#666666"
          />
        </svg>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-4 md:px-5 pb-4 md:pb-5 text-[13px] md:text-[14px] text-zinc-400 leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
