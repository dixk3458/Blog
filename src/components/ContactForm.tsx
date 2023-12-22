'use client';

import { ChangeEvent, FormEvent, useState } from 'react';

type FormData = {
  email: string;
  title: string;
  message: string;
};

const INITIAL_DATA = { email: '', title: '', message: '' };

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(prev => ({ ...prev, [name]: value }));
    console.log(formData);
  };

  return (
    <section>
      <form onSubmit={e => handleSubmit(e)}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={formData.email}
          required
          onChange={e => handleChange(e)}
        />
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          required
          onChange={e => handleChange(e)}
        />
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          required
          onChange={e => handleChange(e)}
          cols={30}
          rows={10}
        />
        <button>Submit</button>
      </form>
    </section>
  );
}
