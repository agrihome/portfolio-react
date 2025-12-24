import StaggerText from "./StaggerText";

export default function H2({ children, className = "" }) {
  return (
    <h2
      className={`font-[Poppins,sans-serif] text-[28px] md:text-[48px] font-semibold md:leading-[62.4px] leading-[35px] text-white${className} pt-5 md:pt-0`}
    >
      <StaggerText>{children}</StaggerText>
    </h2>
  );
}
