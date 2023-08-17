import Board from "./board";

export default function Overlay({ cells, setCells, hasDuplicates, setFocusedCell }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <Board
        cells={cells}
        setCells={setCells}
        hasDuplicates={hasDuplicates}
        setFocusedCell={setFocusedCell}
      />
    </div>
  );
}
