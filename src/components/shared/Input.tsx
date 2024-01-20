import SearchIcon from "../../assets/icons/SearchIcon";

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  withSearchIcon?: boolean;
  type?: "text" | "search" | "number" | "datetime-local";
};

const Input = ({ value, onChange, placeholder, withSearchIcon, type }: InputProps) => {
  const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (type === "number") {
      ["e", "E", "+", "-", ",", "."].includes(e.key) && e.preventDefault();
    }
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === "number") {
      onChange(Number(e.target.value) ? e.target.value : "");
    } else {
      onChange(e.target.value);
    }
  };

  return (
    <div className="flex w-64">
      {withSearchIcon && (
        <div className="text-gray-3 h-10 pl-3.5 bg-gray-1 flex items-center">
          <SearchIcon />
        </div>
      )}

      <input
        type={type}
        onKeyDown={keyDownHandler}
        className="w-full h-10 px-3.5 bg-gray-1 text-xs-plus
                 placeholder:text-gray-3 outline-none"
        onChange={onChangeHandler}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default Input;
