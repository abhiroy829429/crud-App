'use client';

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import style from './page.module.css'

interface User {
  id: string;
  name: string;
  price: string;
}

const Page = () => {
  const [savedData, setSavedData] = useState<User | null>(null); // State for displaying saved data

  
  

  const handleRead = () => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setSavedData(JSON.parse(storedData));
    } else {
      alert('No data found in localStorage.');
    }
  };

  return (
    <div className={style.crt}>
      <button><Link href="/">Home</Link></button> <br />
    
      <button onClick={handleRead}>Read</button>
      {savedData && (
        <div>
          <h3>Saved Data:</h3>
          <p>ID: {savedData.id}</p>
          <p>Name: {savedData.name}</p>
          <p>Price: {savedData.price}</p>
        </div>
      )}
    </div>
  );
};

export default Page;
