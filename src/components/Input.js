import React, { forwardRef, memo, Suspense, useMemo } from "react";

const Input = forwardRef(({ type = "text", ...rest }, ref) => {
  const OtherComponent = useMemo(() => {
    return React.lazy(() => import(`./inputs/${type}`));
  }, [type]);

  return (
    <Suspense fallback={<Loading />}>
      <OtherComponent
        className="px-4 py-2 rounded text-gray-700 w-full bg-white disabled:opacity-80 outline-none ring-2 ring-transparent focus:ring-blue-400 hover:ring-blue-200 h-10"
        {...rest}
        ref={ref}
      />
    </Suspense>
  );
});

const Loading = () => {
  return (
    <div
      type="text"
      className="px-4 py-2 rounded w-full bg-gray-100 h-10 animate-pulse"
    ></div>
  );
};

export default memo(Input);
