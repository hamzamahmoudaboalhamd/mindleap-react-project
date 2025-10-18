import { useState } from "react";
import Thumbnail from "/src/assets/video-thumbnail.webp";
import { FaArrowCircleRight, FaPlayCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { FadeIn } from "/src/Utilis/animation.js";
function About() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handelVideoPlay = () => {
    setIsVideoPlaying(true);
  };
  const handelCloseVideo = () => {
    setIsVideoPlaying(false);
  };

  return (
    <div id="About us" className="scroll-mt-24 bg-[#f7f8fc] pb-16 pt-20">
      <motion.div
        variants={FadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="container mx-auto"
      >
        <div className="py-12 px-4 md:h-4/5 mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 w-full">
            <h2 className="font-secondary text-heroBg font-bold leading-tight text-2xl">
              Start Your Journey to Mental Wellness
            </h2>
            <p className="mt-5 max-w-xl text-heroBg text-sm sm:text-base">
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
          </div>
          <div className="md:w-1/2 w-full mb-8 md:mb-0">
            {!isVideoPlaying ? (
              <div className="relative">
                <img
                  src={Thumbnail}
                  alt="Video Thumbnail"
                  className=" w-full md:h-[446px] h-auto rounded-2xl object-cover "
                />
                <button
                  onClick={handelVideoPlay}
                  className="absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 bg-primary p-4 rounded-full shadow-lg cursor-pointer "
                >
                  <FaPlayCircle className="size-8 text-white" />
                </button>
              </div>
            ) : null}
          </div>
        </div>

        {isVideoPlaying && (
          <div className="  fixed inset-0 bg-black bg-opacity-75  flex items-center justify-center z-50">
            <div
              onClick={handelCloseVideo}
              className="relative w-full h-full flex items-center justify-center"
            >
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/bjYjj0dzRfs?si=m9cxELStx-UWXnq6"
                title="YouTube video player"
                // frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                // referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                className="rounded-2xl"
              ></iframe>
              <button
                onClick={handelCloseVideo}
                className="absolute top-4 right-10 text-white text-2xl cursor-pointer"
              >
                x
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default About;
