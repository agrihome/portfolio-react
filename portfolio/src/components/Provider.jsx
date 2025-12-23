export default function Provider({ children, className = "" }) {
  return <div className={`px-20 ${className}`}>{children}</div>;
}
