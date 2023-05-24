import "./App.css";
// import Content from "./components/Content";
import mobile from "./images/illustration-woman-online-mobile.svg";
import desktop from "./images/illustration-woman-online-desktop.svg";
import SingleQuestion from "./components/SingleQuestion";
import { useState } from "react";
import { questions } from "./components/Questions";

function App() {
  const [question, setQuestion] = useState(questions);
  console.log(question);

  return (
    <div className="container">
      <article>
        <picture>
          <source media="(min-width: 768px)" srcSet={desktop}></source>
          <img src={mobile} alt="" />
        </picture>
      </article>

      <article>
        <h1>FAQ</h1>
        {question.map((quest) => (
          <SingleQuestion
            question={quest.question}
            answer={quest.answer}
            key={quest.id}
          />
        ))}
      </article>
    </div>
  );
}

export default App;
