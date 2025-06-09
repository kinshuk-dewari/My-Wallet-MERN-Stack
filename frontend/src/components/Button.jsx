const Button = ({ label, onClick }) => {
  return (
    <div className="w-full px-6 py-2">
      
      <button
        onClick={onClick}
        className="w-full rounded-md bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm font-medium text-white transition duration-200"
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
