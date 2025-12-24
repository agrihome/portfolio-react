import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import H1 from "../components/H1";
import Text from "../components/Text";
import Button from "../components/Button";
import { Download, Play } from "lucide-react";
import bannerImg from "../assets/banner.png";
import Provider from "../components/Provider";
import Reveal from "../components/Reveal";

const animatedList = ["DEVELOPER", "CODER", "PLAYER"];

export default function Hero() {
  const [index, setIndex] = useState(0);


  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setIndex((prevIndex) => (prevIndex + 1) % animatedList.length);
  //   }, 1000);
  //   return () => clearInterval(timer);
  // }, []);

  return (
    <Provider className="bg-background-primary">
      <section
        id="home"
        className="pt-40 pb-20 grid lg:grid-cols-2 gap-12 items-center"
      >
        <Reveal>
          <div className=" flex flex-col justify-center gap-12 pr-2">
            <div>
              <H1 className="text-white">Hi, I'm ADHI!</H1>
              <H1 className="text-white flex items-center gap-4 flex-wrap">
                CREATIVE{" "}
                <span className="relative h-[52px] min-w-[250px] flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={animatedList[index]}
                      initial={{ rotateX: 90, opacity: 0 }}
                      animate={{ rotateX: 0, opacity: 1 }}
                      exit={{ rotateX: -90, opacity: 0 }}
                      transition={{
                        duration: 0.8,
                        type: "spring",
                        stiffness: 100,
                        damping: 12,
                      }}
                      style={{
                        transformOrigin: "bottom",
                        display: "inline-block",
                      }}
                      className="text-highlight absolute left-0 font-extrabold"
                    >
                      {animatedList[index]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </H1>
            </div>

            <Text>
              I'm a passionate UI/UX designer with a mission to create
              delightful and intuitive digital experiences. With a strong
              foundation in design principles and a keen eye for detail, I
              specialize in translating complex ideas into user-friendly
              interfaces that captivate and engage.
            </Text>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button>
                Download CV <Download className="w-4 h-4" />
              </Button>

              <button className="bg-background-primary flex gap-2 items-center justify-center px-6 py-3 transition-all duration-300 hover:opacity-80">
                <span className="w-10 h-10 bg-highlight flex items-center justify-center rounded-full">
                  <Play className="w-5 h-5 stroke-background-primary fill-background-primary" />
                </span>
                <Text className="text-white">Watch the video</Text>
              </button>
            </div>
          </div>
        </Reveal>

        {/* Banner Image - Hexagonal Frame with Segmented Border */}
        <Reveal transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}>
          <div className="flex items-center justify-center relative">
            <div className="hexagon-banner relative">
              <img
                src={bannerImg}
                alt="ADHI Portfolio Banner"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </Reveal>
      </section>
    </Provider>
  );
}
