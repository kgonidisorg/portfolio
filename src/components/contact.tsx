"use client";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useForm, ValidationError } from "@formspree/react";
import { useRef } from "react";

const Contact: React.FC = () => {
    const [state, handleSubmit] = useForm("xldblpya");
    const formRef = useRef<HTMLFormElement>(null);

    if (state.succeeded) {
        // clear the form fields
        formRef.current?.reset();
    }

    return (
        <section
            id="contact"
            className="min-h-screen text-white px-6 py-30 flex flex-col items-center"
        >
            <h2 className="text-4xl font-bold text-accent mb-12">Contact Me</h2>

            {/* Contact Links */}
            <div className="flex gap-10 mb-16 text-sky-400">
                <a
                    href="mailto:kiron@kirongonidis.com"
                    className="hover:scale-110 transition-transform"
                    aria-label="Email"
                >
                    <MdEmail size={32} />
                </a>
                <a
                    href="https://www.linkedin.com/in/kiron-gonidis-754658112/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin size={32} />
                </a>
                <a
                    href="https://x.com/kebrones"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                    aria-label="Twitter"
                >
                    <FaTwitter size={32} />
                </a>
                <a
                    href="https://github.com/kgonidis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                    aria-label="GitHub"
                >
                    <FaGithub size={32} />
                </a>
            </div>

            {/* Email Form */}
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full max-w-lg bg-slate-800 text-white shadow-xl rounded-xl p-8 space-y-6"
            >
                {state.succeeded && (
                    <div className="bg-green-500 text-white p-4 rounded-md">
                        Thank you for your message! I will get back to you soon.
                    </div>
                )}

                <div>
                    <label className="block text-sm font-medium text-slate-300">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="mt-1 px-3 py-1 block w-full rounded-md bg-slate-700 border border-slate-600 text-white shadow-sm focus:border-sky-400 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                        required
                    />
                    <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-300">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="mt-1 px-3 py-1 block w-full rounded-md bg-slate-700 border border-slate-600 text-white shadow-sm focus:border-sky-400 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                        required
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-300">
                        Message
                    </label>
                    <textarea
                        name="message"
                        rows={5}
                        className="mt-1 px-3 py-1 block w-full rounded-md bg-slate-700 border border-slate-600 text-white shadow-sm focus:border-sky-400 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                        required
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-sky-500 text-white font-semibold rounded-md shadow-md hover:bg-sky-600 transition cursor-pointer"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default Contact;
