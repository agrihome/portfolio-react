import Provider from "../components/Provider";
import H2 from "../components/H2";
import H3 from "../components/H3";
import H4 from "../components/H4";
import Text from "../components/TEXT";
import Button from "../components/Button";
import { Globe } from "lucide-react";
import ExclusiveImg from "../assets/exclusive.png";
import ExclusiveQR from "../assets/Exclusive QR.png";
import PathflowImg from "../assets/Pathflow.png";


export default function Projects() {
  return (
    <Provider className="bg-background-primary">
      <section id="projects" className="py-20">
        <H4 className="text-center text-highlight">Projects</H4>
        <H2>My recent works</H2>

        <div className="grid lg:grid-cols-2 gap-18 not-first:">
          <Exclusive />
          <Pathflow />
        </div>
      </section>
    </Provider>
  );
}

function Exclusive() {
  return (
    <div className="flex flex-col items-start mt-24 pr-2">
      <H3 className="text-white">
        <span className="font-bold">Exclusive</span>
      </H3>

      <Text className="mt-8">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit sed thisnquia consequuntur magni dolores eos qui ratione
        voluptatem
      </Text>

      <img
        src={ExclusiveImg}
        alt="exclusive img screenshot"
        className="mt-6 border border-white"
      />

      <a
        href="https://ecom-frontend-opal-ten.vercel.app/"
        target="_blank"
        className="mt-6"
      >
        <Button>
          Visit project <Globe />
        </Button>
      </a>

      <span className="mt-6 pl-16">or</span>

      <div className="flex items-center gap-6  h-max ">
        Scan QR code
        <img
          src={ExclusiveQR}
          alt="exclusive img screenshot"
          className="border border-white h-20 w-auto"
        />
      </div>
    </div>
  );
}

function Pathflow() {
  return (
    <div className="flex flex-col items-start mt-24 pr-2 blur-sm opacity-90">
      <H3 className="text-white">
        <span className="font-bold">Pathflow</span>
      </H3>

      <Text className="mt-8">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit sed thisnquia consequuntur magni dolores eos qui ratione
        voluptatem
      </Text>

      <img
        src={PathflowImg}
        alt="exclusive img screenshot"
        className="mt-6 border border-white"
      />

      <a
        href="https://ecom-frontend-opal-ten.vercel.app/"
        target="_blank"
        className="mt-6"
      >
        <Button>
          Visit project <Globe />
        </Button>
      </a>

      <span className="mt-6 pl-16">or</span>

      <div className="flex items-center gap-6  h-max ">
        Scan QR code
        <img
          src={ExclusiveQR}
          alt="exclusive img screenshot"
          className="border border-white h-20 w-auto"
        />
      </div>
    </div>
  );
}
