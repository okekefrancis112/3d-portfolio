import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaWhatsapp, FaGithub, FaTwitter, FaEnvelope, FaPaperPlane } from "react-icons/fa";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-6 h-6" />,
      url: import.meta.env.VITE_LINKEDIN,
      color: "bg-blue-600 hover:bg-blue-700",
      text: "Connect on LinkedIn",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="w-6 h-6" />,
      url: import.meta.env.VITE_WHATSAPP,
      color: "bg-green-500 hover:bg-green-600",
      text: "Chat on WhatsApp",
    },
    {
      name: "Email",
      icon: <FaEnvelope className="w-6 h-6" />,
      url: `mailto:${import.meta.env.VITE_TO_EMAIL || ""}`,
      color: "bg-red-500 hover:bg-red-600",
      text: "Send Direct Email",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: form.name.trim(),
          to_name: import.meta.env.VITE_TO_NAME || "Recipient",
          from_email: form.email.trim(),
          to_email: import.meta.env.VITE_TO_EMAIL || "recipient@email.com",
          message: form.message.trim(),
        },
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        alert("Thank you! I will get back to you as soon as possible.");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        console.error("Email sending error:", error);
        alert("Something went wrong. Please try again or use direct email.");
      });
  };

  const openSocialLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* Social Media Links Section */}
        <div className="mt-6 mb-8">
          <h4 className="text-white font-medium mb-4 text-lg">Connect with me</h4>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((social, index) => (
              <motion.button
                key={social.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openSocialLink(social.url)}
                className={`${social.color} text-white px-4 py-3 rounded-xl flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg`}
              >
                {social.icon}
                <span className="hidden sm:inline">{social.name}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name *</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                required
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-primary transition-all"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email *</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                required
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-primary transition-all"
              />
            </label>
          </div>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message *</span>
            <textarea
              rows="6"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              required
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none focus:ring-2 focus:ring-primary transition-all"
            />
          </label>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${
              loading ? "bg-gray-600" : "bg-tertiary hover:bg-tertiary/80"
            } py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl flex items-center gap-2 transition-all disabled:cursor-not-allowed`}
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Sending...
              </>
            ) : (
              <>
                <FaPaperPlane />
                Send Message
              </>
            )}
          </motion.button>

          <p className="text-secondary text-sm">
            * Required fields. You can also reach me directly via the social links above.
          </p>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");