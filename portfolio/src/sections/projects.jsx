import Provider from "../components/Provider";
import H2 from "../components/H2";
import H3 from "../components/H3";
import H4 from "../components/H4";
import Text from "../components/Text";
import Button from "../components/Button";
import { Globe } from "lucide-react";
import ExclusiveImg from "../assets/exclusive.png";
import ExclusiveQR from "../assets/Exclusive QR.png";
import FlowQR from "../assets/flowqr.png";
import PathflowImg from "../assets/flow.png";
import Reveal from "../components/Reveal";

export default function Projects() {
  return (
    <Provider className="bg-background-primary">
      <section id="projects" className="py-20">
        <Reveal>
          <div className="flex flex-col items-center">
            <H4 className="text-center text-highlight">Projects</H4>
            <H2 className="text-center text-white">My recent works</H2>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-18 not-first:">
          <Reveal transition={{ delay: 0.2 }}>
            <Exclusive />
          </Reveal>
          <Reveal transition={{ delay: 0.4 }}>
            <Pathflow />
          </Reveal>
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
        Exclusive is a modern e-commerce frontend application built with
        Next.js, Redux, and Tailwind CSS. It features a fully responsive,
        scalable design system optimized for performance and usability. The
        application is backend-agnostic and ready to integrate seamlessly with
        any API or service.
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
    <div className="flex flex-col items-start mt-24 pr-2 opacity-90">
      <H3 className="text-white">
        <span className="font-bold">Flow</span>
      </H3>

      <Text className="mt-8">
        Flow is a habit and task management application under development
        powered by with React JS, TypeScript, and Firebase. It features a
        minimal, shadcn-style responsive UI with real-time data synchronization.
        The app provides a structured system for paths, tasks, and daily
        progress tracking, designed for scalability and consistency.
      </Text>

      <img
        src={PathflowImg}
        alt="exclusive img screenshot"
        className="mt-6 border border-white"
      />

      <a
        href="https://flow-five-alpha.vercel.app/"
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
          src={FlowQR}
          alt="exclusive img screenshot"
          className="border border-white h-20 w-auto"
        />
      </div>
    </div>
  );
}
