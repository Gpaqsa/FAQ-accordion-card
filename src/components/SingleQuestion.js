import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const SingleQuestion = ({ question, answer, id }) => {
  //   const [question, setQuestion] = useState("");
  const [isShowing, setIshowing] = useState(false);

  return (
    <>
      <div className="article-question">
        <article key={id} onClick={() => setIshowing(!isShowing)}>
          <h2 className={isShowing ? "clicked" : " "}>{question}</h2>
          {/* <FaChevronUp /> */}
          {isShowing ? (
            <FaChevronUp className="icon" />
          ) : (
            <FaChevronDown className="icon" />
          )}
        </article>

        {/* <p>{answer}</p> */}
        {isShowing ? <p>{answer}</p> : null}
      </div>
    </>
  );
};

export default SingleQuestion;
