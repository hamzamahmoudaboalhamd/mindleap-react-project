import { motion } from "framer-motion";
import { FadeIn } from "/src/Utilis/animation.js";

const packages = [
  {
    name: "Bronze Package",
    price: "$99",
    description:
      "Ideal for individuals or small businesses looking to get started with mental wellness",
    features: [
      "Access to basic wellness resources",
      "Weekly mental wellness tips",
      "Community support group access",
    ],
  },
  {
    name: "Bronze Package",
    price: "$99",
    description:
      "Ideal for individuals or small businesses looking to get started with mental wellness",
    features: [
      "Access to basic wellness resources",
      "Weekly mental wellness tips",
      "Community support group access",
    ],
  },
  {
    name: "Bronze Package",
    price: "$99",
    description:
      "Ideal for individuals or small businesses looking to get started with mental wellness",
    features: [
      "Access to basic wellness resources",
      "Weekly mental wellness tips",
      "Community support group access",
    ],
  },
];

const Pricing = () => {
  return (
    <div className="bg-[#f7f8fc] text-heroBg pt-32 " id="pricing">
      <div className="container mx-auto px-8  ">
        <motion.div
          variants={FadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-center mb-12 text-heroBg "
        >
          <h2 className="text-4xl font-bold font-secondary mb-3 ">
            Perfect for Small & Large Brands
          </h2>
          <p className="text-base mb-12  md:w-2/3 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vel
            laborum dignissimos animi qui ab? Culpa cupiditate dignissimos sequi
            aliquam provident suscipit!
          </p>
        </motion.div>
        {/* packages */}

        <motion.div
          variants={FadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="flex flex-col lg:w-4/5 mx-auto md:flex-row gap-8"
        >
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-lg  p-6  flex-1 shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4 ">{pkg.name}</h3>
              <hr className="w-24 border  text-primary border-primary" />
              <p className="text-3xl font-bold mb-4">
                {pkg.price} <span className="text-lg font-normal">/mo</span>
              </p>
              <p className="text-lg mb-4"> {pkg.description}</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx}> {feature}</li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md text-sm sm:text-base"
              >
                Get Started
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
