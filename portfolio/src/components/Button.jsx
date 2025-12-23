export default function Button({
  children,
  className = "",
  onClick,
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`common_btn inline-flex px-10 py-5 justify-center items-center gap-[10px] bg-highlight text-text-dark font-medium transition-all duration-300 hover:bg-background-header hover:text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
