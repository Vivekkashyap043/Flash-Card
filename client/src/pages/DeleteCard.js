import React, { useState } from 'react';
import "./AddCard.css";

function DeleteCard() {
  
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [questionErr, setQuestionErr] = useState('');
  const [answerErr, setAnswerErr] = useState('');
  const [response, setResponse] = useState('');

  const onSubmit = async () => {
    let valid = true;

    // Validate inputs
    if (!question) {
      setQuestionErr("Question cannot be empty");
      valid = false;
    } else {
      setQuestionErr('');
    }

    if (!answer) {
      setAnswerErr("Answer cannot be empty");
      valid = false;
    } else {
      setAnswerErr('');
    }

    if (valid) {
      try {
        const res = await fetch('http://localhost:8000/flashcard/add-card', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ question, answer }),
        });

        if (!res.ok) {
          setResponse("error");
          throw new Error(`Error in inserting the data: ${res.status}`);
        }

        setResponse("ok");
        setQuestion('');
        setAnswer('');
      } catch (err) {
        console.log(err);
        setResponse("error");
      }
    }
  };

  const handleQuestion = (e) => {
    setQuestion(e.target.value);
    if (e.target.value) {
      setQuestionErr('');
    } else {
      setQuestionErr("Question cannot be empty");
    }
  };

  const handleAnswer = (e) => {
    setAnswer(e.target.value);
    if (e.target.value) {
      setAnswerErr('');
    } else {
      setAnswerErr("Answer cannot be empty");
    }
  };

  return (
    <div className='add'>
      <div className='addcont'>
        <div className="flashcard rounded" style={{ border: "1px solid black" }}>
          <div className="flashcard-inner" style={{ border: "1px solid black" }}>
            <h2 className='write'>Enter Question</h2>
            <textarea
              name="question"
              id="question"
              className='text'
              onChange={handleQuestion}
              value={question}
            />
            {questionErr && (
              <p style={{ color: "red", textAlign: "center" }}>{questionErr}</p>
            )}
          </div>
        </div>
        <div className="flashcard rounded" style={{ border: "1px solid black" }}>
          <div className="flashcard-inner" style={{ border: "1px solid black" }}>
            <h2 className='write'>Enter Answer</h2>
            <textarea
              name="answer"
              id="answer"
              className='text'
              onChange={handleAnswer}
              value={answer}
            />
            {answerErr && (
              <p style={{ color: "red", textAlign: "center" }}>{answerErr}</p>
            )}
          </div>
        </div>
      </div>
      {response === "ok" && (
        <p style={{ color: "green", textAlign: "center" }}>Flashcard is added successfully</p>
      )}
      {response === "error" && (
        <p style={{ color: "red", textAlign: "center" }}>Error while adding the Flashcard</p>
      )}
      <div className='insert'>
        <button className='btn btn-success' onClick={onSubmit}>Insert Flashcard</button>
      </div>
    </div>
  );
}

export default DeleteCard;
