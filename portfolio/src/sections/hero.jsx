import H1 from "../components/H1";
import Text from "../components/Text";
import Button from "../components/Button";
import { Download, Play } from "lucide-react";
import bannerImg from "../assets/banner.png";
import Provider from "../components/Provider";

export default function Hero() {
  return (
    <Provider className="bg-background-primary">
      <section
        id="home"
        className="pt-40 pb-20 grid lg:grid-cols-2 gap-12 items-center"
      >
        <div className=" flex flex-col justify-center gap-12 pr-2">
          <div>
            <H1 className="text-white">Hi, I'm ADHI!</H1>
            <H1 className="text-white">
              CREATIVE <span className="text-highlight">CODER</span>
            </H1>
          </div>

          <Text>
            I'm a passionate UI/UX designer with a mission to create delightful
            and intuitive digital experiences. With a strong foundation in
            design principles and a keen eye for detail, I specialize in
            translating complex ideas into user-friendly interfaces that
            captivate and engage.
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

        {/* Banner Image - Hexagonal Frame with Segmented Border */}
        <div className="flex items-center justify-center relative">
          <div className="hexagon-banner relative">
            <img
              src={bannerImg}
              alt="ADHI Portfolio Banner"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
    </Provider>
  );
}
