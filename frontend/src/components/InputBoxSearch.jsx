import { IconSearch } from "@tabler/icons-react";
const InputBox = ({ label, placeholder, type = "text" }) => {
  return (
    <div className="w-full relative space-y-1 px-6">
      {label && (
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-400">
          {label}
        </label>
      )}

      <span className="absolute inset-y-0 left-6 pl-3 pt-1 flex items-center pointer-events-none">
        <IconSearch className="h-5 w-5 text-neutral-400" />
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full pl-12 rounded-md border border-gray-300 dark:border-neutral-700 px-3 py-2 bg-white dark:bg-neutral-800 text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default InputBox;
