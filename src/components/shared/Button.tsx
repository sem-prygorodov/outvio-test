type ButtonProps = {
  onClick: () => void;
  title: string;
  isSubmit?: boolean;
  disabled?: boolean;
};

const Button = ({ onClick, title, isSubmit, disabled }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className="h-10 bg-black disabled:bg-gray-3 disabled:cursor-not-allowed
               text-white px-6 font-semibold text-xs-plus"
      onClick={onClick}
      type={isSubmit ? "submit" : "button"}
    >
      {title}
    </button>
  );
};

export default Button;
