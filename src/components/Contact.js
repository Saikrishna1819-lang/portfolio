import React, { useRef } from 'react';
import Title from './layouts/Title';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_63wi80h',       // your service ID
      'template_dwu525r',      // your template ID
      form.current,
      'QwdZ7PgjjtJy570a4'      // your public key (user ID)
    ).then(
      (result) => {
        alert('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        alert('Failed to send message. Please try again later.');
        console.error(error.text);
      }
    );
  };

  return (
    <section id="contact" className="w-full py-10 md:py-12 xl:py-20  border-b-[1px] border-b-black">
      <Title title="Contact" />

      <div className="flex flex-col justify-between w-full gap-10 mt-10 lg:flex-row">
        {/* Left Side Contact Info */}
        <div className="flex flex-col flex-1 gap-6">
          <h3 className="text-2xl font-bold">Let’s Connect</h3>
          <p className="text-gray-400">
            I’m open to opportunities, collaborations, or just a friendly hello. Fill the form or reach me directly.
          </p>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-designColor" />
            <span className="text-gray-300">krishnasai69219@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-designColor" />
            <span className="text-gray-300">+91 7995858373</span>
          </div>
        </div>

        {/* Right Side Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col flex-1 gap-6 md:px-28 lg:px-0 "
        >
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="bg-[#2c2c2c] text-white px-4 py-3 rounded-md outline-none"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="bg-[#2c2c2c] text-white px-4 py-3 rounded-md outline-none"
            required
          />
          <input
            name="title"
            type="text"
            placeholder="Subject"
            className="bg-[#2c2c2c] text-white px-4 py-3 rounded-md outline-none"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Message"
            className="bg-[#2c2c2c] text-white px-4 py-3 rounded-md outline-none"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 font-semibold text-white transition-all duration-300 rounded-md bg-designColor hover:opacity-90"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
