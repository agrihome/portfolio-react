export default function H4({ children, className = "" }) {
  return (
    <h4
      className={`font-[Poppins,sans-serif] text-[20px] tracking-[1px] leading-[24px] text-center ${className}`}
    >
      {children}
    </h4>
  );
}
