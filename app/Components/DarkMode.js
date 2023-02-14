const Button = ({ children, className, onClick }) => {
  return (
    <button
      class="p-2 rounded-md hover:ring-2 hover:ring-gray-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
