"use client";
import React, { useEffect, useState } from "react";

const APICallExam = () => {
  const [passcode, setPasscode] = useState("your-passcode-value");

  useEffect(() => {
    // Construct the URL with the passcode appended
    const url = `URL?passcode=${passcode}`;

    // Use the 'url' variable in your GET request
    fetch(url)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  }, [passcode]);



   
  return (
    <div>
      {/*component JSX goes here */}
      <div className="flex items-center justify-center">
        <button className="bg-red-100 p-2 rounded-md border border-red-500">
          Submit
        </button>
      </div>
    </div>
  );
};

export default APICallExam;
