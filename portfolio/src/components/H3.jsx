export default function H3({ children, className = "" }) {
  return (
    <h3
      className={`font-[Poppins,sans-serif] text-[40px] font-medium leading-[48px] text-start ${className}`}
    >
      {children}
    </h3>
  );
}
