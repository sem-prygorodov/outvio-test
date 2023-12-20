type ButtonProps = {
  onClick: () => void;
  title: string;
  isSubmit?: boolean;
};

const Button = ({ onClick, title, isSubmit }: ButtonProps) => {
  return (
    <button
      className="h-10 bg-black text-white px-6 font-semibold text-xs-plus"
      onClick={onClick}
      type={isSubmit ? "submit" : "button"}
    >
      {title}
    </button>
  );
};

export default Button;
