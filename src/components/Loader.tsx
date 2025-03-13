const Loader = () => {
  return (
    <div
      className="mx-auto w-full md:w-1/2  rounded-md border border-slate-200 p-6 my-2"
      data-testid="shimmer"
    >
      <div className="flex animate-pulse space-x-4">
        <div className="size-20 rounded-full bg-gray-200"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 rounded bg-gray-200"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 h-2 rounded bg-gray-200"></div>
              <div className="col-span-1 h-2 rounded bg-gray-200"></div>
            </div>
            <div className="h-2 rounded bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
