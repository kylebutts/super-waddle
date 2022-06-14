const Abstract = ({ children, ...props }) => {
  return (
    <div
      className={`dark:shadow-none' overflow-hidden relative mt-2 mb-8 cursor-pointer lg:rounded-lg pb-2 bg-mine-shaft-200/30 shadow-md border-y-2 lg:border-x-2 border-mine-shaft-700 dark:bg-mine-shaft-800`}
    >
      <h2 className="py-4 px-4 text-md tracking-wider font-normal text-coral-600 dark:text-coral-500 underline decoration-2 decoration-coral-600 dark:decoration-coral-500 border-b-2 border-mine-shaft-700 bg-mine-shaft-200 dark:bg-mine-shaft-600 dark:border-mine-shaft-800 ">Abstract</h2>
      {children}
    </div>
  );
};

export default Abstract;
