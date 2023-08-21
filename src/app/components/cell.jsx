export default function Cell({ value }) {
  return (
    <div className="flex justify-center items-center bg-white">
      {value > 0 ? value : ""}
    </div>
  );
}
