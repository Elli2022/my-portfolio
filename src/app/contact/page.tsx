// src/pages/contact.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Modal from "../components/Modal";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        const data = await response.json();
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal>
      <div className="min-h-screen bg-[#1E415B] text-white flex flex-col justify-center">
        <div className="container mx-auto px-4">
          <div className="absolute top-10 left-14 text-white text-4xl">
            <Link href="/" className="text-white font-bold text-lg">
              Portfolio.
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-10 ml-4">
            <div className="flex-1 max-w-md">
              <div className="text-center mb-10">
                <h1 className="text-4xl font-bold mb-4 text-left mt-12">
                  Contact now
                </h1>
                <p className="mb-12 text-left">
                  Have a project or question? Send me a message. I will reply within 48 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 mr-4">
                <div>
                  <label htmlFor="name" className="block text-sm mt-12 mr-12">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-white border-b border-gray-600 focus:ring-0 text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-white border-b border-gray-600 focus:ring-0 text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-transparent border-white border-b border-gray-600 focus:ring-0 text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm">
                    Write your message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-white border-b border-gray-600 focus:ring-0 text-white"
                    required
                  ></textarea>
                </div>
                <div className="flex-left justify-center mb-4 md:mb-6">
                  <button
                    type="submit"
                    className="py-2 px-8 md:py-2.5 md:px-10 lg:py-3 lg:px-12 text-xs md:text-sm lg:text-base bg-blue-500 text-white uppercase rounded-full cursor-pointer no-underline transition-colors duration-300 ease inline-block mt-5"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Send"}
                  </button>
                </div>
              </form>
            </div>

            <div className="max-w-md mt-auto mb-auto ml-12">
              <div className="bg-white text-gray-900 p-12 rounded-lg shadow-xl">
                <div className="text-left">
                  <p className="mb-12">
                    Email me at <br />
                    <a href="mailto:eleonora.nocentini@gmail.com" className="text-blue-500 font-bold">
                      eleonora.nocentini@gmail.com
                    </a>
                  </p>
                  <p className="mt-12">
                    Call me at <br />
                    <a href="tel:+46724272912" className="text-blue-500 font-bold">
                      +46724272912
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ContactPage;
