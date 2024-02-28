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

const showWord = (check: string) => {
  setTimeout(() => {
    console.log(check);
  }, 3000);
};

const game = async () => {
  for (const word of words) {
    langText.innerText = word.text;
    await new Promise((resolve) => setTimeout(resolve, 3000));
    showWord(word.translation);
  }
};

game();
