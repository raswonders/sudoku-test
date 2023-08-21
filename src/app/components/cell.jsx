export default function Cell({ value }) {
  return (
    <div
      className="flex justify-center items-center bg-white ring-inset focus:outline-none focus:bg-blue-100"
      tabIndex={0}
    >
      {value > 0 ? value : ""}
    </div>
  );
}
