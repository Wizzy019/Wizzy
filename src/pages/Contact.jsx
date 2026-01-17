import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <section className="min-h-screen px-6 py-12 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto flex flex-col gap-16">
        <div>
          <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
          <form className="flex flex-col gap-4 bg-gray-800 p-6 rounded shadow-md">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white"
              required
            />
            <button
              type="submit"
              className="w-max bg-blue-900 px-6 py-2 rounded hover:bg-blue-800 transition font-semibold"
            >
              Submit
            </button>
          </form>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-6 text-center">Other Ways to Reach Me</h3>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <div className="flex items-center gap-4 bg-gray-800 p-4 rounded shadow-md hover:shadow-xl transition">
              <FontAwesomeIcon icon={faXTwitter} size="2x" className="text-blue-500" />
              <p className="text-lg"><a href="">@arodike_wizzy</a></p>
            </div>

            <div className="flex items-center gap-4 bg-gray-800 p-4 rounded shadow-md hover:shadow-xl transition">
              <FontAwesomeIcon icon={faEnvelope} size="2x" className="text-blue-500" />
              <p className="text-lg">kingwizzyndukwu@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact
