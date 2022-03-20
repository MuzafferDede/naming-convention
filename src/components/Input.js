import React, { forwardRef, memo, Suspense, useMemo } from "react";

const Input = forwardRef(({ type = "text", ...rest }, ref) => {
  const OtherComponent = useMemo(() => {
    return React.lazy(() => import(`./inputs/${type}`));
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OtherComponent
        className="border px-4 py-2 rounded text-gray-700 w-full"
        {...rest}
        ref={ref}
      />
    </Suspense>
  );
});

export default memo(Input);
