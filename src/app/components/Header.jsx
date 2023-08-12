export function Header() {
  return (
    <div className="flex justify-between uppercase">
      <div className="flex flex-col text-sm">
        <span>Sudoku</span>
        <span>Cruncher</span> 
      </div>
      <div className="flex items-center">
        <div className="p-2 text-[14px] border-r-2 border-black">Solver</div> 
        <div className="p-2 text-[14px] text-gray-400">Creator</div> 
      </div>
    </div>
  )
}