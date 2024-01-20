type SelectInputProps<T> = {
  value: string;
  onChange: (value: T) => void;
  placeholder: string;
  options: string[];
};

const SelectInput = <T,>({ value, onChange, options }: SelectInputProps<T>) => (
  <div className="flex w-64 px-3.5 bg-gray-1">
    <select
      className="w-full h-10 bg-gray-1 text-xs-plus
                 placeholder:text-gray-3 outline-none"
      onChange={(e) => onChange(e.target.value as T)}
      value={value}
    >
      {options.map((x) => (
        <option key={x} value={x}>
          {x}
        </option>
      ))}
    </select>
  </div>
);

export default SelectInput;
