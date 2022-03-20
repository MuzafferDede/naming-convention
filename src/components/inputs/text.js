import { memo } from "react";

const Text = ({ ref, ...rest }) => {
  return <input type="text" ref={ref} {...rest} />;
};

export default memo(Text);
