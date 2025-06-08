const InputBox = ({ label, placeholder, type = "text" }) => {
  return (
    <div className="w-full space-y-1 px-6">
      {label && (
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-400">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md border border-gray-300 dark:border-neutral-700 px-3 py-2 bg-white dark:bg-neutral-800 text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default InputBox;
