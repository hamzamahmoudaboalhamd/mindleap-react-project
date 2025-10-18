import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import services1 from "/src/assets/service1.webp";
import services2 from "/src/assets/service2.webp";
import services3 from "/src/assets/service3.webp";
import services4 from "/src/assets/service4.webp";
import { motion } from "framer-motion";
import { FadeIn } from "/src/Utilis/animation.js";

function Services() {
  return (
    <div className="scroll-mt-24 bg-[#f7f8fc]" id="services">
      <div className="pt-28 px-4 container mx-auto">
        <motion.div
          variants={FadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-center space-y-5"
        >
          <h1 className="text-4xl font-bold font-secondary text-heroBg">
            What Can We Do Together
          </h1>
          <p className="md:w-1/2 mx-auto text-heroBg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry, Lorem ipsum hos been the industry is stondord dummy text
            ever since the 1500s
          </p>
        </motion.div>
        {/* services category */}
        <motion.div
          variants={FadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="py-12 md:w-4/5 mx-auto"
        >
          <Tabs>
            <TabList className=" flex flex-wrap justify-center items-center md:gap-8  gap-2">
              <Tab>Couple Counseling</Tab>
              <Tab>Porenting Skills</Tab>
              <Tab>Feeling Stuck</Tab>
              <Tab>Self-Confidence</Tab>
            </TabList>

            <TabPanel>
              <div className="flex flex-col md:flex-col lg:flex-row gap-8 ">
                <div className="md:w-1/1 bg-white rounded-2xl p-12 lg:p-[25px] mt-16 font-secondary ">
                  <h3 className="text-3xl lg:text-2xl  font-semibold font-secondary  text-primary mb-4">
                    Couple Counseling
                  </h3>
                  <p className="mb-8 lg:mb-4 text-heroBg">
                    Lorem ipsam hoe been the industry standard dummy text ever
                    sinc the goos when on unknower printer took a galley of type
                    and ambled it to make a type specimen book
                  </p>
                  <h4 className="text-heroBg font-medium mb-4 text-xl">
                    Benefits
                  </h4>
                  <ul className="list-inside list-disc space-y-3 text-heroBg">
                    <li>Understanding Relationship Dynamics</li>
                    <li>Effective Communication Tec</li>
                    <li>Conflict Resolution shategies </li>
                  </ul>
                </div>
                <div className="md:w-1/1 mt-8 lg:mt-16">
                  <img
                    src={services1}
                    alt=""
                    className="w-[1100px] h-[350px]  rounded-2xl object-cover"
                  />
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="flex flex-col md:flex-col lg:flex-row gap-8 ">
                <div className="md:w-1/1 bg-white rounded-2xl p-12 lg:p-[25px] mt-16 font-secondary ">
                  <h3 className="text-3xl lg:text-2xl  font-semibold font-secondary  text-primary mb-4">
                    Porenting Skills
                  </h3>
                  <p className="mb-8 lg:mb-4 text-heroBg">
                    Lorem ipsam hoe been the industry standard dummy text ever
                    sinc the goos when on unknower printer took a galley of type
                    and ambled it to make a type specimen book
                  </p>
                  <h4 className="text-heroBg font-medium mb-4 text-xl">
                    Benefits
                  </h4>
                  <ul className="list-inside list-disc space-y-3 text-heroBg">
                    <li>Understanding Relationship Dynamics</li>
                    <li>Effective Communication Tec</li>
                    <li>Conflict Resolution shategies </li>
                  </ul>
                </div>
                <div className="md:w-1/1 mt-8 lg:mt-16">
                  <img
                    src={services2}
                    alt=""
                    className="w-[1100px] h-[350px]  rounded-2xl  object-cover"
                  />
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="flex flex-col md:flex-col lg:flex-row gap-8">
                <div className="md:w-1/1 bg-white rounded-2xl p-12 lg:p-[25px] mt-16 font-secondary ">
                  <h3 className="text-3xl lg:text-2xl  font-semibold font-secondary  text-primary mb-4">
                    Feeling Stuck
                  </h3>
                  <p className="mb-8 lg:mb-4 text-heroBg">
                    Lorem ipsam hoe been the industry standard dummy text ever
                    sinc the goos when on unknower printer took a galley of type
                    and ambled it to make a type specimen book
                  </p>
                  <h4 className="text-heroBg font-medium mb-4 text-xl">
                    Benefits
                  </h4>
                  <ul className="list-inside list-disc space-y-3 text-heroBg">
                    <li>Understanding Relationship Dynamics</li>
                    <li>Effective Communication Tec</li>
                    <li>Conflict Resolution shategies </li>
                  </ul>
                </div>
                <div className="md:w-1/1 mt-8 lg:mt-16">
                  <img
                    src={services3}
                    alt=""
                    className="w-[1100px] h-[350px]  rounded-2xl  object-cover"
                  />
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="flex flex-col md:flex-col lg:flex-row gap-8 ">
                <div className="md:w-1/1 bg-white rounded-2xl p-12 lg:p-[25px] mt-16 font-secondary ">
                  <h3 className="text-3xl lg:text-2xl  font-semibold font-secondary  text-primary mb-4">
                    Self-Confidence
                  </h3>
                  <p className="mb-8 lg:mb-4 text-heroBg">
                    Lorem ipsam hoe been the industry standard dummy text ever
                    sinc the goos when on unknower printer took a galley of type
                    and ambled it to make a type specimen book
                  </p>
                  <h4 className="text-heroBg font-medium mb-4 text-xl">
                    Benefits
                  </h4>
                  <ul className="list-inside list-disc space-y-3 text-heroBg">
                    <li>Understanding Relationship Dynamics</li>
                    <li>Effective Communication Tec</li>
                    <li>Conflict Resolution shategies </li>
                  </ul>
                </div>
                <div className="md:w-1/1 mt-8 lg:mt-16">
                  <img
                    src={services4}
                    alt=""
                    className="w-[1100px] h-[350px]  rounded-2xl  object-cover"
                  />
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
