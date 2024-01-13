import { useState } from "react";
import styles from "./RandomQuote.module.css";
import reload from "../Assets/refresh.png";
import gitHub from "../Assets/github.png";

const RandomQuote = () => {
  //
  let quotes = [];
  async function loadQuotes() {
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
  }
  //
  const random = () => {
    const select = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(select);
  };

  const [quote, setQuote] = useState({
    text: "Get Start with men learning programming ",
    author: "Boyqul Abdullayev Programmer",
  });

  loadQuotes();
  return (
    <div className={styles["container"]}>
      <div className={styles["quote"]}>{quote.text}</div>
      <div>
        <div className={styles["line"]}></div>
        <div className={styles["bottom"]}>
          <div className={styles["author"]}>{quote.author.split(" , ")[0]}</div>
          <div className={styles["icons"]}>
            <img
              src={reload}
              onClick={() => {
                random();
              }}
              alt=""
            />
            <a href="https://github.com/Boyqul">
              {" "}
              <img src={gitHub} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;
