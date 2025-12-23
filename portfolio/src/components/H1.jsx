export default function H1({ children, className = "" }) {
  return (
    <h1
      className={`font-[Poppins,sans-serif] text-[60px] font-bold leading-[72px] text-start uppercase ${className}`}
    >
      {children}
    </h1>
  );
}
