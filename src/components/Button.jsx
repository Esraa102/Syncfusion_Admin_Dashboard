// eslint-disable-next-line react/prop-types
const Button = ({ color, bgColor, text, borderRadius, size, isFull }) => {
  return (
    <button
      type="button"
      style={{
        backgroundColor: bgColor,
        color,
        borderRadius,
        fontSize: size,
        width: isFull ? "100%" : "fit-content",
      }}
      className="px-4 py-2 hover:drop-shadow-xl block"
    >
      {text}
    </button>
  );
};

export default Button;
