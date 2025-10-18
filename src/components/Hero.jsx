import heroImg from "/src/assets/hero.webp";
import { FaArrowCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { FadeIn } from "/src/Utilis/animation.js";

function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-24 bg-heroBg text-white pt-36 md:pt-40 pb-12"
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          {/* Left: content */}
          <motion.div
            variants={FadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            <h1 className="font-secondary font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Start Your Journey to
              <br />
              Mental Wellness
            </h1>
            <p className="mt-5 max-w-xl text-white/70 text-sm sm:text-base">
              We lower our stress levels, we get to know our pain, we connect
              better, we improve our focus, and we&apos;re kinder to ourselves.
              Let us walk you through the basics in our new mindful guide on how
              to meditate.
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md text-sm sm:text-base"
              >
                Get Started
                <FaArrowCircleRight className="inline-block" />
              </a>
            </div>
          </motion.div>

          {/* Right: image with green card background */}
          <div className="relative w-full mx-auto overflow-hidden h-[420px] sm:h-[520px] md:h-[600px] lg:h-[680px]">
            <div className="absolute -right-6 top-8 -z-10 h-80 w-60 sm:h-96 sm:w-72 md:h-[500px] md:w-[360px] lg:h-[560px] lg:w-[380px] bg-gradient-to-b from-emerald-500 to-green-600 rounded-[48px]"></div>
            <motion.img
              variants={FadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              src={heroImg}
              alt="Happy person"
              className="w-full h-full object-cover object-top select-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
