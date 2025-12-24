import H4 from "../components/H4";
import H2 from "../components/H2";
import Experience from "../components/blocks/Experience";
import SkillBlock from "../components/blocks/SkillBlock";
import Provider from "../components/Provider";

const skills = [
  {
    skill: "React",
    rating: 9,
  },
  {
    skill: "Javascript",
    rating: 9,
  },
  {
    skill: "Django",
    rating: 8,
  },
  {
    skill: "CSS",
    rating: 9,
  },

  {
    skill: "Tailwind CSS",
    rating: 9,
  },
  {
    skill: "Web Security",
    rating: 8,
  },
  {
    skill: "Git",
    rating: 8,
  },
  {
    skill: "API",
    rating: "9",
  },
];

export default function Skills() {
  return (
    <Provider className="bg-background-primary">
      <section className="py-20" id="experience">
        <H4 className="text-center text-highlight">Experience & Skill</H4>
        <H2>
          Showcasing your talent <br /> amplifying your impact
        </H2>
        <div className="mt-20 grid lg:grid-cols-2">
          <Experience
            startYear={"Mar"}
            endYear={"Nov 2025"}
            text="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem"
            role="Software developer intern"
          />
        </div>

        <div className="grid md:grid-cols-2  mt-20 gap-y-12 gap-x-5" id="skills">
          {skills.map((skill) => (
            <SkillBlock skill={skill.skill} rating={skill.rating} />
          ))}
        </div>
      </section>
    </Provider>
  );
}
