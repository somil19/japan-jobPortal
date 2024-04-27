export default function Loader() {
  return (
    <div className="animate-pulse flex flex-col items-center gap-4 w-60">
      <div className="flex flex-col items-center gap-2">
        <div className="w-48 h-6 bg-purple-300 rounded-md"></div>
        <div className="w-28 h-4 bg-purple-300 mx-auto mt-3 rounded-md"></div>
      </div>
      <div className="h-7 bg-purple-300 w-full rounded-md"></div>
      <div className="h-7 bg-purple-300 w-full rounded-md"></div>
      <div className="h-7 bg-purple-300 w-full rounded-md"></div>
      <div className="h-7 bg-purple-300 w-1/2 rounded-md"></div>
    </div>
  );
}
