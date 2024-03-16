"use client";
import React, { useEffect, useState } from "react";

const InteractivityExam = ({ list }) => {
  const [word, setWord] = useState("");
  const [newWord, setNewWord] = useState(word);
  return (
    <div>
    
      {word && <div>{word}</div>}
      <input type="text" value={word} onChange={(e) => setWord(e.target.value)} />
    </div>
  );
};
  useEffect(() => {
    setWord((prevName) => prevName.toUpperCase());
  }, [word]);

  const handleNameChange = (event) => {
    setWord(event.target.value);
    getWord();
  };
  const myPasscode = process.env.NEXT_PUBLIC_MY_PASSCODE;
  console.log("MY_PASSCODE:", myPasscode);

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  console.log(newWord);
  return (
    <div>
      {fword.length >= 2 && <div>{fword}</div>}
      <div className="">
        <form onSubmit={handleSubmit} className="">
          <div className="p-2 bg-green-200">
            <label className="px-2">Enter a word</label>
            <input
              type="text"
              placeholder="Enter a word"
              value={word}
              onChange={handleNameChange}
              className="text-center"
            />
          </div>
          <div className="flex item-center justify-center py-2">
            <button
              className="bg-red-100 p-2 rounded-md border border-red-500"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {word === "show list" && (
        <div>
          {list.map((item, index) => (
            <div key={index}>{item.name}</div>
          ))}
        </div>
      )}
    </div>
  );


const interactivityExam = ({ list }) => {
  return (
    <div>
      {list.map((item) => (
        <div key={item.id}>
          {/* Render item content here */}
        </div>
      ))}
    </div>
  );
};


export default InteractivityExam;
