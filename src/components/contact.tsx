"use client";
import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message submitted! (form handling not wired to backend yet)");
  };

  return (
    <section id="contact" className="min-h-screen bg-dark text-white px-6 py-30 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-white mb-12">Contact Me</h2>

      {/* Contact Links */}
      <div className="flex gap-10 mb-16 text-sky-400">
        <a href="mailto:kiron@kirongonidis.com" className="hover:scale-110 transition-transform" aria-label="Email">
          <MdEmail size={32} />
        </a>
        <a href="https://www.linkedin.com/in/kiron-gonidis-754658112/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" aria-label="LinkedIn">
          <FaLinkedin size={32} />
        </a>
        <a href="https://x.com/kebrones" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" aria-label="Twitter">
          <FaTwitter size={32} />
        </a>
        <a href="https://github.com/kgonidis" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" aria-label="GitHub">
          <FaGithub size={32} />
        </a>
      </div>

      {/* Email Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-slate-800 text-white shadow-xl rounded-xl p-8 space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-300">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md bg-slate-700 border border-slate-600 text-white shadow-sm focus:border-sky-400 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md bg-slate-700 border border-slate-600 text-white shadow-sm focus:border-sky-400 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="mt-1 block w-full rounded-md bg-slate-700 border border-slate-600 text-white shadow-sm focus:border-sky-400 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-sky-500 text-white font-semibold rounded-md shadow-md hover:bg-sky-600 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
