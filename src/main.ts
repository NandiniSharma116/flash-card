import './style.css';

const langText = <HTMLSpanElement>document.querySelector("#langText");
const Card = <HTMLDivElement>document.querySelector("#Card");

interface CardItem {
  text: string;
  translation: string;
}

const words: CardItem[] = [
  {
    text: "Кот",
    translation: "Cat",
  },
  {
    text: "кровать",
    translation: "Bed",
  },
  {
    text: "Привет",
    translation: "Hello",
  },
  {
    text: "Врач",
    translation: "Doctor",
  },
];
