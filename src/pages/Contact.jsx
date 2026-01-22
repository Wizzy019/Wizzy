import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { supabase } from '../lib/supabase';
import Reveal from "../components/Reveal";


function Contact() {

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: '' 
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;

         setFormData((prev) => ({
         ...prev,
        [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const {error} = await supabase.from('contact_messages').insert([formData]);

        if (error) {
            console.log(error.message);
        } else {
            console.log('Message sent successfully!');
        }

        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };



  return (
    <section className="min-h-screen px-6 py-12 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto flex flex-col gap-16">
        <Reveal>
          <div>
            <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
            <form className="flex flex-col gap-4 bg-gray-800 p-6 rounded shadow-md"
              onSubmit={handleSubmit}
              >
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded bg-gray-700 text-white"
                required
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded bg-gray-700 text-white"
                required
                onChange={handleInputChange}
              />
              <textarea
                placeholder="Your Message"
                name="message"
                value={formData.message}
                rows={6}
                className="w-full px-4 py-2 rounded bg-gray-700 text-white"
                required
                onChange={handleInputChange}
              />
              <button
                className="w-max bg-blue-900 px-6 py-2 rounded hover:bg-blue-800 transition font-semibold"
              >
                Submit
              </button>
            </form>
          </div>
        </Reveal>

        <div>
          <h3 className="text-3xl font-bold mb-6 text-center">Other Ways to Reach Me</h3>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Reveal>
              <a href="https://x.com/arodike_wizzy">
              <div className="flex items-center gap-4 bg-gray-800 p-4 rounded shadow-md hover:shadow-xl transition">
                <FontAwesomeIcon icon={faXTwitter} size="2x" className="text-blue-500" />
                <p className="text-lg">@arodike_wizzy</p>
              </div>
              </a>
            </Reveal>

            <Reveal>
              <a href="mailto:kingwizzyndukwu@gmail.com">
              <div className="flex items-center gap-4 bg-gray-800 p-4 rounded shadow-md hover:shadow-xl transition">
                <FontAwesomeIcon icon={faEnvelope} size="2x" className="text-blue-500" />
                <p className="text-lg ">kingwizzyndukwu@gmail.com</p>
              </div>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact
