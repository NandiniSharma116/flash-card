import "./style.css"
import wordsdata from "./russian_words.json";

let words: wordObj[] = wordsdata

const Card = <HTMLDivElement>document.querySelector("#Card");
const langText = <HTMLSpanElement>document.querySelector("#langText");
const correct = <HTMLButtonElement>document.querySelector("#correct");
const wrong = <HTMLButtonElement>document.querySelector("#wrong");
const start = <HTMLButtonElement>document.querySelector("#start");

type wordObj = {
  text: string,
  translation: string
}

const fetchWord = (): wordObj => {
  const n: number = parseInt(String(Math.random() * words.length));
  const word: wordObj = words[n];
  return word
}

let word = fetchWord();
const updateWord = () => {
  langText.innerText = word['text'];
  setTimeout(() => { showCard() }, 5000)
}

const showCard = () => {
  Card.classList.remove("from-amber-500", "to-pink-400", "bg-gradient-to-br")
  Card.classList.add("bg-pink-300")
  langText.classList.remove("text-white")
  langText.classList.add("text-black")
  langText.innerText = word['translation']
  wrong.classList.remove("hidden")
  correct.classList.remove("hidden")
}

correct.onclick = () => {
  changeCard();
  word = fetchWord();
  updateWord();
  words = words.filter((w:wordObj)=>{
    if (w['text'] !== word['text'])
    return w;
  })
};
wrong.onclick = () => {
  changeCard();
  word = fetchWord();
  updateWord();
};

const changeCard = () => {
  Card.classList.remove("bg-pink-300")
  Card.classList.add("from-amber-500", "to-pink-400", "bg-gradient-to-br")
  langText.classList.add("text-black")
  langText.classList.remove("text-white")
  langText.innerText = word['text']
  wrong.classList.add("hidden")
  correct.classList.add("hidden")
}

start.onclick = ()=>{
  start.classList.add("hidden");
  updateWord();
}