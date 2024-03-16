import { NextResponse } from "next/server";

export async function GET(req, { params: { code } }) {
  const secretCode = process.env.SECRET_CODE;
  return NextResponse.json({ secretCode });
}
import { useState } from 'react';

const APICallExam = () => {
  
  const [secretCode, setSecretCode] = useState(null);

  
  const fetchSecretCode = async () => {
    
    const passcode = 'ehen2rfow';
    
    const url = `https://webdev2-class-demo.vercel.app/api/sampleReqs/?passcode=${passcode}`;

    try {
      
      const response = await fetch(url);
    
      const data = await response.json();
      
      setSecretCode(data.secretCode);
    } catch (error) {
      
      console.error('Error fetching secret code:', error);
    }
  };

  
  return (
    <div>
      
      <button onClick={fetchSecretCode}>Fetch Secret Code</button>
      
      {secretCode && <p>Secret Code: {secretCode}</p>}
    </div>
  );
};

export default APICallExam;
