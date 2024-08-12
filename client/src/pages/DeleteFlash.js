import React, { useState } from "react";
import "./DeleteFlash.css";

function DeleteFlash({ flashcard, all_flash, flipped, setFlipped, flag, setFlag, handlePrevious }) {

    const [response, setResponse] = useState('');
    const [err, setErr] = useState("")

    const handleClick = () => {
        setFlipped(!flipped);
    };

    const onDelete = async () => {

        if(all_flash.length()<=1){
            setErr("Can't delete the flashcard")
            return;
        }

        try {
            const res = await fetch(`http://localhost:8000/flashcard/delete-card/${flashcard.id}`, {
                method: 'DELETE',
            });

            if (!res.ok) {
                setResponse("error");
                throw new Error(`Error in deleting the data: ${res.status}`);
            }
            setResponse("ok");
            handlePrevious()
            setFlag(!flag)
        } catch (err) {
            console.log(err);
            setResponse("error");
        }

    }

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
            {response === "ok" && (
                <p style={{ color: "green", textAlign: "center" }}>Flashcard is deleted successfully</p>
            )}
            {response === "error" && (
                <p style={{ color: "red", textAlign: "center" }}>Error while deleted the Flashcard</p>
            )}
            {err && (
                <p style={{ color: "red", textAlign: "center" }}>{err}</p>
            )}
            <div style={{ marginTop: "30px", textAlign: "center" }}>
                <button className='btn btn-danger' onClick={onDelete}>Delete Flashcard</button>
            </div>
        </div>
    );
}

export default DeleteFlash;
