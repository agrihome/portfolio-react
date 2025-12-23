export default function SmallText({ children, className = "", as = "p" }) {
  const Component = as;

  return (
    <Component
      className={`font-[Poppins,sans-serif] text-sm font-normal tracking-[1px] leading-[16.8px] text-start uppercase ${className}`}
    >
      {children}
    </Component>
  );
}
