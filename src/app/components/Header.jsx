export function Header({ title, appMode }) {
  return (
    <header>
      <div className="flex justify-between uppercase">
        <div className="flex flex-col text-xs">
          <span>Sudoku</span>
          <span>Cruncher</span> 
        </div>
        <div className="flex items-center text-sm">
          <div className={`p-2 border-r-2 border-black ${appMode === "creator" && "text-gray-400"}`}>Solver</div> 
          <div className={`p-2 ${appMode === "solver" && "text-gray-400"}`}>Creator</div> 
        </div>
      </div>

      <h1 className="text-4xl mt-6 lg:text-center">{title}</h1>
    </header>
  )
}