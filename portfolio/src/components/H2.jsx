export default function H2({ children, className = "" }) {
  return (
    <h2
      className={`font-[Poppins,sans-serif] text-[48px] font-semibold leading-[62.4px] text-center text-white${className}`}
    >
      {children}
    </h2>
  );
}
