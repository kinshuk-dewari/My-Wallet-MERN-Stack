const InputBox = ({ label, placeholder, type = "text" }) => {
  return (
    <div className="w-full space-y-1 px-6">
      {label && (
        <label className="block text-sm font-medium text-neutral-700 ">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md border border-neutral-700 px-3 py-2 bg-white text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default InputBox;
