import React, { useEffect, useState } from 'react';
import DeleteFlash from './DeleteFlash';
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import "./DeleteCard.css";

function DeleteCard() {

  const [flashcards, setFlashcards] = useState([]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [flag, setFlag] = useState(true)

  const getAllFlashcards = async () => {
    try {
      const res = await fetch("http://localhost:8000/flashcard/get-cards");
      if (!res.ok) {
        throw new Error(`Error in getting the data: ${res.status}`);
      }
      const data = await res.json();
      setFlashcards(data);
      console.log("data 0 is : ", data[index]?.question);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllFlashcards();
  }, [flag]);

  const handlePrevious = () => {
    setIndex(prevIndex => Math.max(prevIndex - 1, 0));
    setFlipped(false)
  };

  const handleNext = () => {
    setIndex(prevIndex => Math.min(prevIndex + 1, flashcards.length - 1));
    setFlipped(false)
  };

  return (
    <div className='entry'>
      <div className='previous' onClick={handlePrevious}>
        <GrLinkPrevious />
      </div>
      <div className='flash'>
        {flashcards.length > 0 && (
          <DeleteFlash 
            flashcard={flashcards[index]} 
            all_flash = {flashcards}
            flipped={flipped} 
            setFlipped={setFlipped}
            flag = { flag }
            setFlag = { setFlag }
            handlePrevious = { handlePrevious }
          />
        )}
      </div>
      <div className='next' onClick={handleNext}>
        <GrLinkNext />
      </div>
    </div>
  );
}

export default DeleteCard;
