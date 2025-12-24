export default function Provider({ children, className = "" }) {
  return <div className={`px-5 md:px-20 ${className}`}>{children}</div>;
}
