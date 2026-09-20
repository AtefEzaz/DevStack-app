export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-4 text-gray-500">
      <span className="loading loading-spinner loading-lg text-primary"></span>
      <p className="text-sm">Loading technologies...</p>
    </div>
  );
}
