import Text from "../Text";

export default function SkillBlock({ skill, rating }) {
  return (
    <div className="bg-background-header">
      <Text className="text-white px-10 py-4">{skill}</Text>

      <div
        className="h-1.5 bg-highlight"
        style={{ width: `${(rating / 10) * 100}%` }}
      ></div>
    </div>
  );
}
