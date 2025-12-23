export default function Text({ children, className = "", as = "p" }) {
  const Component = as;

  return (
    <Component
      className={`font-[Poppins,sans-serif] text-base font-medium leading-[27.2px] text-start text-text ${className}`}
    >
      {children}
    </Component>
  );
}
