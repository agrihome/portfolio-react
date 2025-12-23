import Text from "../Text";

export default function Experience({ startYear, endYear, role, text }) {
  return (
    <div>
      <div className="border border-highlight text-highlight w-max px-[24px] py-[11px]">
        {startYear} - {endYear}
      </div>
      <div className="text-[30px] font-semibold mt-5 mb-[10px] text-white">
        {role}
      </div>

      <Text>{text}</Text>
    </div>
  );
}
