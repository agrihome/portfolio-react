export default function MediumText({ children, className = "", as = "p" }) {
  const Component = as;

  return (
    <Component
      className={`font-[Poppins,sans-serif] text-base font-normal leading-[24px] text-start ${className}`}
    >
      {children}
    </Component>
  );
}
