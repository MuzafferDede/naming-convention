import React, { forwardRef, memo, Suspense, useMemo } from "react";

const Input = forwardRef(({ type = "text", ...rest }, ref) => {
  const OtherComponent = useMemo(() => {
    return React.lazy(() => import(`./inputs/${type}`));
  }, [type]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OtherComponent
        className="border px-4 py-2 rounded text-gray-700 w-full bg-white disabled:opacity-80 outline-none ring-2 ring-transparent focus:ring-blue-400 hover:ring-blue-200"
        {...rest}
        ref={ref}
      />
    </Suspense>
  );
});

export default memo(Input);
