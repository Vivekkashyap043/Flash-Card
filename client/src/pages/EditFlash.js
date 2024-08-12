import React, { useEffect, useState } from "react";
import "./EditFlash.css";

function EditFlash({ flashcard, flipped, setFlipped }) {
    const [question, setQuestion] = useState(flashcard.question);
    const [answer, setAnswer] = useState(flashcard.answer);
    const [questionErr, setQuestionErr] = useState('');
    const [answerErr, setAnswerErr] = useState('');
    const [response, setResponse] = useState('');

    const handleClick = () => {
        setFlipped(!flipped);
    };

        // Update state when flashcard prop changes
        useEffect(() => {
            setQuestion(flashcard.question);
            setAnswer(flashcard.answer);
        }, [flashcard]);

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

    const onUpdate = async () => {
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
                const res = await fetch(`http://localhost:8000/flashcard/update-card/${flashcard.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ question, answer }),
                });

                if (!res.ok) {
                    setResponse("error");
                    throw new Error(`Error in updating the data: ${res.status}`);
                }
                setResponse("ok");
            } catch (err) {
                console.log(err);
                setResponse("error");
            }
        }
    };

    return (
        <div style={{ width: "100%", height: "100%" }}>
            <div className={`flashcard ${flipped ? "flipped" : ""}`} >
                <div className="flashcard-inner">
                    <div className="flashcard-front">
                        <h2 className='write'>Question</h2>
                        <textarea
                            name="question"
                            id="question"
                            className='text'
                            onChange={handleQuestion}
                            value={question}
                        />
                    </div>
                    <div className="flashcard-back">
                        <h2 className='write'>Answer</h2>
                        <textarea
                            name="answer"
                            id="answer"
                            className='text'
                            onChange={handleAnswer}
                            value={answer}
                        />
                    </div>
                    <button className='btn btn-primary mb-3 flipbtn' onClick={handleClick}>Flip</button>
                </div>
            </div>
            {questionErr && (
                <p style={{ color: "red", textAlign: "center" }}>{questionErr}</p>
            )}
            {answerErr && (
                <p style={{ color: "red", textAlign: "center" }}>{answerErr}</p>
            )}
            {response === "ok" && (
                <p style={{ color: "green", textAlign: "center" }}>Flashcard is updated successfully</p>
            )}
            {response === "error" && (
                <p style={{ color: "red", textAlign: "center" }}>Error while updating the Flashcard</p>
            )}
            <div style={{ marginTop: "30px", textAlign: "center" }}>
                <button className='btn btn-success' onClick={onUpdate}>Update Flashcard</button>
            </div>
        </div>
    );
}

export default EditFlash;
