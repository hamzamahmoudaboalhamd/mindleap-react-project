import { BsFillChatQuoteFill } from "react-icons/bs";
import reviewl from "/src/assets/review1.webp";
import review2 from "/src/assets/review2.webp";
import { motion } from "framer-motion";
import { FadeIn } from "/src/Utilis/animation.js";

const Testimonials = [
  {
    name: "Jane Doe",
    location: "New York, NY",
    review:
      "This service has been life-changing for me. The mental wellness resources and personalized support have made a huge difference in my daily life. Highly recommended!",
    image: reviewl,
  },
  {
    name: "John Smith",
    location: "Los Angeles, CA",
    review:
      " I've tried many wellness programs, but this one stands out. The expert webinars and one-on-one coaching have been incredibly valuable. I feel more balanced and focused than ever before.",
    image: review2,
  },
];

const TestimonialsComponent = () => {
  return (
    <div id="testimonials" className="bg-[#f7f8fc] py-12">
      <div className="container mx-auto">
        <motion.div
          variants={FadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-center text-heroBg my-12"
        >
          <h2 className="text-4xl font-bold font-secondary mb-3 ">
            What Our Clients Say
          </h2>
          <p className="text-lg mb-12  md:w-1/2 mx-auto">
            Hear from some of our satisfied clients about how our services have
            positively impacted their lives and well-being
          </p>
        </motion.div>
        <motion.div
          variants={FadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:w-5/6 mx-auto md:gap-12 gap-5 "
        >
          {Testimonials.map((testimonial, index) => (
            <div
              className="relative bg-white rounded-lg p-6 flex-1 mx-12 md:mx-auto "
              key={index}
            >
              <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
                <BsFillChatQuoteFill className="size-12 text-primary" />
              </div>
              <div className="flex flex-col space-y-3  mb-4">
                <p className="text-lg mb-2  text-heroBg">
                  {testimonial.review}
                </p>
                <div className="flex gap-1">
                  <img
                    src={testimonial.image}
                    alt=""
                    className="size-12  rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold text-heroBg">
                      {testimonial.name}
                    </p>

                    <p className="text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialsComponent;
