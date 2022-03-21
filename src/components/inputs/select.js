const Select = ({ options = [], defaultValue, placeholder, ref, ...rest }) => {
  return (
    <select {...rest} ref={ref}>
      <option value="">{placeholder}</option>
      {options.map((option, index) => {
        return (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
