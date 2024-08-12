import React from "react";
import "./FlashCard.css";

function Flashcard({ flashcard, flipped, setFlipped }) {

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`flashcard ${flipped ? "flipped" : ""}`} onClick={handleClick}>
      <div className="flashcard-inner">
        <div className="flashcard-front">
        <h2>Question</h2>
          <p>{flashcard.question}</p>
        </div>
        <div className="flashcard-back">
        <h2>Answer</h2>
          <p>{flashcard.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
