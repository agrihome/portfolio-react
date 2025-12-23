export default function H4({ children, className = "" }) {
  return (
    <h4
      className={`font-[Poppins,sans-serif] text-[20px] font-medium tracking-[1px] leading-[24px] text-center uppercase ${className}`}
    >
      {children}
    </h4>
  );
}
