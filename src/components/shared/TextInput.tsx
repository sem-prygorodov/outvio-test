import SearchIcon from "../../assets/icons/SearchIcon";

type TextInputProps = {
  onChange: (value: string) => void;
  placeholder: string;
  withSearchIcon?: boolean;
};

const TextInput = ({
  onChange,
  placeholder,
  withSearchIcon,
}: TextInputProps) => {
  return (
    <div className="flex w-64">
      {withSearchIcon && (
        <div className="text-gray-3 h-10 pl-3.5 bg-gray-1 flex items-center">
          <SearchIcon />
        </div>
      )}

      <input
        className="h-10 px-3.5 bg-gray-1 text-xs-plus
                 placeholder:text-gray-3 outline-none"
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
