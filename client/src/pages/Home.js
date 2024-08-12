import React, { useEffect, useState } from 'react';
import Flashcard from './FlashCard';
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import "./Home.css";

function Home() {
  const [flashcards, setFlashcards] = useState([]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

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
  }, []);

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
          <Flashcard 
            flashcard={flashcards[index]} 
            flipped={flipped} 
            setFlipped={setFlipped}
          />
        )}
      </div>
      <div className='next' onClick={handleNext}>
        <GrLinkNext />
      </div>
    </div>
  );
}

export default Home;
