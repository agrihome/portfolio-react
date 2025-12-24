import GCP from "../assets/gcp.jpeg";
import Js from "../assets/js certiicate.jpg";
import React from "../assets/react certificate.jpg";
import Typescript from "../assets/typescript certificate.jpg";
import Provider from "../components/Provider";
import H4 from "../components/H4";
import H2 from "../components/H2";

const certificates = [
  {
    img: GCP,
    course: "Google Cloud Digital Leader",
  },
  {
    img: Js,
    course: "Java script",
  },
  {
    img: React,
    course: "React",
  },
  {
    img: Typescript,
    course: "Typescript",
  },
];

export default function Certificates() {
  return (
    <Provider className="bg-background-secondary">
      <section id="certificates" className="py-20 flex flex-col items-start">
        <H4 className="text-center text-highlight">My certificates</H4>
        <H2 className="mt-2 text-white">Courses that made me what I'm</H2>

        <div className="flex justify-between gap-8 overflow-scroll w-full mt-18 hide-scrollbar">
          {certificates.map((certificate) => {
            return <CertificateBlock {...certificate} />;
          })}
        </div>
      </section>
    </Provider>
  );
}
function CertificateBlock({ img, course }) {
  return (
    <div className="flex flex-col gap-6 w-max min-w-max items-start">
      <H4 className="text-white font-semibold">{course}</H4>
      <img
        src={img}
        alt={course}
        className="w-auto h-[400px] object-cover"
      ></img>
    </div>
  );
}
