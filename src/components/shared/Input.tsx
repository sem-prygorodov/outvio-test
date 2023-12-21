import SearchIcon from "../../assets/icons/SearchIcon";

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  withSearchIcon?: boolean;
  type?: "text" | "search" | "number" | "datetime-local";
};

const Input = ({ value, onChange, placeholder, withSearchIcon, type }: InputProps) => {
  return (
    <div className="flex w-64">
      {withSearchIcon && (
        <div className="text-gray-3 h-10 pl-3.5 bg-gray-1 flex items-center">
          <SearchIcon />
        </div>
      )}

      <input
        type={type}
        className="w-full h-10 px-3.5 bg-gray-1 text-xs-plus
                 placeholder:text-gray-3 outline-none"
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default Input;
