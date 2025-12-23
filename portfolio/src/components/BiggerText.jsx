export default function BiggerText({ children, className = "", as = "p" }) {
  const Component = as;

  return (
    <Component
      className={`font-[Poppins,sans-serif] text-[18px] font-normal leading-[30.6px] text-center ${className}`}
    >
      {children}
    </Component>
  );
}
