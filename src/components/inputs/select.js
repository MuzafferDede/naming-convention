import { memo } from "react";

const Select = ({ options = [], ref, ...rest }) => {
  return (
    <select {...rest} ref={ref}>
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

export default memo(Select);
