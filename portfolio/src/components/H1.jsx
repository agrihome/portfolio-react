export default function H1({ children, className = "" }) {
  return (
    <h1
      className={`font-[Poppins,sans-serif] md:text-[60px] text-[50px] font-bold md:leading-[72px] leading-[60px] text-start uppercase ${className}`}
    >
      {children}
    </h1>
  );
}
