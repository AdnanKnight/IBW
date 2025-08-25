import React from "react";

const Contact = () => {
  return (
    <main className="bg-gradient-to-b from-white to-gray-100 min-h-screen text-gray-800">
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            We’d love to hear from you. Reach out for product inquiries, bulk
            orders, or collaborations.
          </p>
        </div>

        {/* Contact Info + Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-2">Our Office</h2>
              <p className="text-gray-600">
                Islamic Book World (IBW) <br />
                123 Crescent Road, Green Park <br />
                New Delhi, India 110016
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-2">Phone</h2>
              <p className="text-gray-600">+91 98765 43210</p>
              <p className="text-gray-600">+91 91234 56789</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-2">Email</h2>
              <p className="text-gray-600">info@ibwbooks.com</p>
              <p className="text-gray-600">support@ibwbooks.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Send us a message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full mt-1 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-1 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full mt-1 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="Type your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-5 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

      </section>
    </main>
  );
};

export default Contact;
