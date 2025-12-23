import H4 from "../components/H4";
import H2 from "../components/H2";
import Experience from "../components/blocks/Experience";
import SkillBlock from "../components/blocks/SkillBlock";

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
    <section className="py-20 bg-background-primary">
      <H4 className="text-center text-highlight">Experience & Skill</H4>
      <H2>
        Showcasing your talent <br /> amplifying your impact
      </H2>
      <div className="mt-20 grid grid-cols-2" id="experience">
        <Experience
          startYear={"Mar"}
          endYear={"Nov 2025"}
          text="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem"
          role="Software developer intern"
        />
      </div>

      <div className="grid grid-cols-2 mt-20 gap-y-12 gap-x-5" id="skills">
        {skills.map((skill) => (
          <SkillBlock skill={skill.skill} rating={skill.rating} />
        ))}
      </div>
    </section>
  );
}
