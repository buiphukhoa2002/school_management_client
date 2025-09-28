import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Form */}
        <div className="bg-white shadow rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>

          {submitted && (
            <div className="mb-6 p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg">
              The form is submitted. We will get in touch with you shortly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-sky-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-sky-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: School Info */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">
            School Information
          </h2>
          <p className="text-gray-600">
            If you have any questions or concerns, feel free to reach out to us
            via the contact details below or by filling out the form.
          </p>
          <div>
            <p className="font-medium text-gray-700">📍 Address</p>
            <p className="text-gray-600">123 Nguyễn Trãi, Thanh Xuân, Hà Nội</p>
          </div>
          <div>
            <p className="font-medium text-gray-700">📞 Phone</p>
            <p className="text-gray-600">+84 24 1234 5678</p>
          </div>
          <div>
            <p className="font-medium text-gray-700">📧 Email</p>
            <p className="text-gray-600">contact@nvt.edu.vn</p>
          </div>
        </div>
      </div>
    </div>
  );
}
