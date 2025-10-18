import { useState } from "react";
import { FaUserAlt, FaEnvelope, FaPhoneAlt, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";
import { FadeIn } from "/src/Utilis/animation.js";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  // ...existing code...
  const handelSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      phone,
      country,
      message,
    };

    const hasEmpty = Object.values(data).some(
      (v) => !v || (typeof v === "string" && v.trim() === "")
    );

    if (hasEmpty) {
      setShowModal2(true);
      return;
    }

    setShowModal1(true);
  };

  const handelCloseModal1 = () => {
    setShowModal1(false);
    setName("");
    setEmail("");
    setPhone("");
    setCountry("");
    setMessage("");
  };
  const handelCloseModal2 = () => {
    setShowModal2(false);
  };

  return (
    <div
      className="bg-heroBg flex items-center justify-center py-28 px-8 "
      id="contact"
    >
      <div className="container mx-auto">
        <div className="md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center md:gap-12  gap-5">
          {/* left side */}
          <motion.div
            variants={FadeIn("rigth", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="space-y-8"
          >
            <h2 className="text-4xl  font-bold font-secondary mb-4  text-white ">
              Make an appointment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
              <div className="flex items-start  gap-4">
                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                  <FaUserAlt className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg  font-medium">24 Hours Services</h3>
                  <p>Lorem ipsum is simply dummy text of the printing</p>
                </div>
              </div>
              <div className="flex items-start  gap-4">
                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                  <FaEnvelope className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg  font-medium">Expert Therapist</h3>

                  <p>Lorem ipsum is simply dummy text of the printing</p>
                </div>
              </div>
              <div className="flex items-start  gap-4">
                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                  <FaPhoneAlt className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg  font-medium">High Quality Care</h3>

                  <p>Lorem Ipsum is simply dummy text of the printing</p>
                </div>
              </div>
              <div className="flex items-start  gap-4">
                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                  <FaGlobe className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg  font-medium">Trusted Clinic</h3>

                  <p>Lorem Ipsum is simply dummy text of the printing</p>
                </div>
              </div>
            </div>
          </motion.div>
          {/* rigth side  */}
          <motion.div
            variants={FadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="space-y-8 p-8 bg-white shadow-xl rounded-md"
          >
            <h3 className="text-2xl font-bold mb-4 text-heroBg ">
              Book Appointment
            </h3>
            <form onSubmit={handelSubmit} className="space-y-8">
              <div className="flex sm:flex-row flex-col gap-4">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Name"
                  className="w-full p-4 text-heroBg  rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 text-heroBg  rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                />
              </div>
              <div className="flex sm:flex-row flex-col gap-4">
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  placeholder="Contact Number "
                  className="w-full p-4 text-heroBg  rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                />
                <input
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  type="text"
                  placeholder="Country"
                  className="w-full text-heroBg p-4  rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                />
              </div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="5"
                placeholder="Write Your Message..."
                className="w-full text-heroBg p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow "
              ></textarea>
              <button
                type="submit"
                className="w-full p-3 bg-primary text-white rounded-md  hover:bg-primary/80"
              >
                Send Massage
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      {showModal1 && (
        <div className="fixed flex inset-0  items-center justify-center bg-black bg-opacity-90">
          <div className="bg-white p-8   rounded-md shadow-lg border-2 border-green-600">
            <h2 className="text-heroBg text-2xl font-bold mb-4">Thank you!</h2>
            <p className="text-heroBg">
              Thank you!, {name}, for submiting your query.
            </p>
            <button
              className="mt-4  px-4 py-2  bg-primary text-white rounded-md"
              onClick={handelCloseModal1}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showModal2 && (
        <div className="fixed flex inset-0  items-center justify-center bg-black bg-opacity-90">
          <div className="bg-white p-8  rounded-md shadow-lg border-2 border-red-600">
            <h2 className="text-red-600 text-2xl font-bold mb-4">
              Please Fill all Fields
            </h2>
            <button
              className="mt-4  px-4 py-2 bg-red-600 text-white rounded-md"
              onClick={handelCloseModal2}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
