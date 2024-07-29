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
  const [formData, setFormData] = useState<User>({ id: '', name: '', price: '' });

  useEffect(() => {

    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formData));
    alert('Data updated and saved to localStorage!');
  };

  return (
    <div className={style.crt}>
      <button><Link href="/">Home</Link></button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">ID</label>
        <input
          type="text"
          name="id"
          id="id"
          value={formData.id}
          onChange={handleChange}
        /> <br />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
        /> <br />
        <label htmlFor="price">Price</label>
        <input
          type="text"
          name="price"
          id="price"
          value={formData.price}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Page;
