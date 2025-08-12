import React from "react";
import { ArrowUpRight } from "lucide-react";

const cards = [
  {
    title: "ритейл",
    description: "Делаем цифровой аналог для магазина с интеграциями и аналитикой.",
    align: "left",
    img1: "src/assets/ретейл 1.jpg",
    img2: "src/assets/ретейл 2.jpg"
  },
  {
    title: "медицина",
    description: "AI для ранней диагностики и поддержки принятия решений.",
    align: "left",
    img1: "src/assets/медецина 1.jpg",
    img2: "src/assets/медецина 2.jpg"
  },
  {
    title: "персональный бренд",
    description: "Создаём цифровую упаковку и помогаем с продвижением.",
    align: "right",
    img1: "src/assets/персональный 1.jpg",
    img2: "src/assets/персональный 2.jpg"
  }
];

function Card({ card }) {
  return (
    <div className="space-y-4 w-[488px] mx-auto">
      {/* Блок с картинкой */}
      <div className="relative group overflow-hidden rounded-2xl border border-gray-700 h-[400px]">
        {/* Стрелка */}
        <div className="absolute top-3 right-3 z-10 p-2 border border-white rounded-full bg-transparent transition-colors duration-300 group-hover:bg-purple-600">
          <ArrowUpRight className="w-5 h-5 text-white" />
        </div>

        {/* Картинка */}
        <div className="relative w-full h-full">
          <img
            src={card.img1}
            alt={card.title}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-100 group-hover:opacity-0"
          />
          <img
            src={card.img2}
            alt={card.title}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100"
          />
        </div>
      </div>

      {/* Заголовок + описание (заголовок — по старому, описание — с выравниванием) */}
      <div
  className={`flex flex-col gap-1 ${
    card.align === "right" ? "items-end text-right" : "items-start text-left"
  }`}
>
        {/* Заголовок — всегда выравниваем как раньше */}
        <h3 className="text-2xl font-extrabold text-[#DBFE01]">{card.title}</h3>

        {/* Описание — прижимаем как нужно и задаём формат */}
<p
  className={`text-white leading-snug ${
    card.title === "ритейл"
      ? "max-w-[300px]"
      : card.title === "медицина"
      ? "max-w-[260px]"
      : "max-w-[200px] whitespace-nowrap"
  } ${card.title === "персональный бренд" ? "self-start text-left" : "self-end text-right"}`}
>
  {card.title === "ритейл" ? (
    <>
      Делаем цифровой аналог для магазина
      с интеграциями 
    </>
  ) : (
    card.description
  )}
</p>

</div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section className="space-y-16 max-w-[1405px] mx-auto mt-32">
      {/* Заголовок и подзаголовок */}
      <div className="grid grid-cols-2 items-start">
        <p className="text-white text-xl leading-snug max-w-md text-right">
          Любимые кейсы из&nbsp;нескольких сфер.<br />
          Но&nbsp;вообще мы&nbsp;работали с&nbsp;разным:<br />
          от&nbsp;ретейла до&nbsp;медицины
        </p>
        <h2 className="text-[#DBFE01] text-6xl font-extrabold text-center">
          портфолио
        </h2>
      </div>

      {/* Карточки */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Левая колонка */}
        <div className="flex flex-col gap-10">
          <Card card={cards[0]} /> {/* Ритейл */}
          <Card card={cards[1]} /> {/* Медицина */}
        </div>

        {/* Правая колонка */}
<div className="flex flex-col justify-center mt-[260px]">
  <Card card={cards[2]} /> {/* Персональный бренд */}
</div>
      </div>
    </section>
  )
}
