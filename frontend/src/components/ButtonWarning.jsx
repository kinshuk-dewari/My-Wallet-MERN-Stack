import { Link } from 'react-router-dom';

const ButtonWarning = ({ text, button, to }) => {
  return (
    <div className="text-sm text-center text-neutral-600 dark:text-neutral-400">
      {text}
      <Link
        to={to}
        className="pl-1 font-medium text-blue-500 hover:underline"
      >
        {button}
      </Link>
    </div>
  );
};

export default ButtonWarning;
