const variantStyles = {
  dark: "bg-text border-primary shadow-[2px_2px_5px_rgba(0,0,0,1)]",
  light: "bg-white border-primary shadow-[2px_2px_5px_rgba(255,255,255,1)]",
};

function BarDivider({
  width = "w-45",
  height = "h-2.5",
  variant = "dark",
  className = "", // 👈 allow custom styles
}) {
  return (
    <div
      className={`
        border-2 rounded-xs
        ${height} ${width}
        ${variantStyles[variant]}
        ${className}
      `}
    />
  );
}

export default BarDivider;
