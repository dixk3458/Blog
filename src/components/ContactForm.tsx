'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import Banner, { BannerData } from './Banner';
import { sendContactEmail } from '@/service/contact';

export type FormData = {
  email: string;
  title: string;
  message: string;
};

const INITIAL_DATA = { email: '', title: '', message: '' };

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);

  const [bannerData, setBannerData] = useState<BannerData | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendContactEmail(formData)
      .then(a => {
        setBannerData({
          message: '정상적으로 처리했습니다.',
          state: 'success',
        });
        setFormData(INITIAL_DATA);
      })
      .catch(e => {
        setBannerData({
          message: '메일전송에 실패했습니다.',
          state: 'error',
        });
      })
      .finally(() => {
        setTimeout(() => {
          setBannerData(null);
        }, 3000);
      });
  };
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="w-1/2">
      {bannerData && <Banner bannerData={bannerData} />}
      <form
        id="form"
        className=" bg-slate-700  flex flex-col gap-2 p-4 my-4 rounded-xl text-white"
        onSubmit={e => handleSubmit(e)}
      >
        <label className="font-semibold" htmlFor="email">
          Your Email
        </label>
        <input
          className="text-black p-1"
          type="text"
          name="email"
          id="email"
          value={formData.email}
          required
          placeholder="Enter your email here"
          onChange={e => handleChange(e)}
        />
        <label className="font-semibold" htmlFor="title">
          Title
        </label>
        <input
          className="text-black p-1"
          type="text"
          name="title"
          id="title"
          value={formData.title}
          required
          placeholder="Title"
          onChange={e => handleChange(e)}
        />
        <label className="font-semibold" htmlFor="message">
          Message
        </label>
        <textarea
          className="text-black p-1 resize-none"
          name="message"
          id="message"
          value={formData.message}
          required
          placeholder="Enter your message here"
          onChange={e => handleChange(e)}
          cols={30}
          rows={10}
        />
        <button className="bg-yellow-300 text-black font-bold hover:brightness-75">
          Submit
        </button>
      </form>
    </section>
  );
}
