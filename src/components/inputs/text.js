const Text = ({ ref, ...rest }) => {
  return <input type="text" ref={ref} {...rest} />;
};

export default Text;
