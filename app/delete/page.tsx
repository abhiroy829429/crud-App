'use client';
import React from 'react'
import Link from 'next/link'
const page = () => {
    function handleClick(){
        localStorage.clear();
    }
  return (
    <div>
        <button> <Link href="/">Home</Link></button>
        <button onClick={handleClick}>Delete</button>
    </div>
  )
}

export default page;
