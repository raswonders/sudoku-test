export function ClearBoardConfirmation({ gridRef }) {
  return (
    <dialog id="clear_confirm" className="modal">
      <form
        method="dialog"
        className="modal-box bg-blue-500 text-white max-w-sm"
      >
        <h3 className={`mt-2 text-2xl font-semibold`}>Clear sudoku board</h3>

        <p className="py-4">
          Are you sure you want to clear all values on the Sudoku board? This
          action will erase all your progress, and you won&apos;t be able to undo it.
          Proceed?
        </p>

        <div className="modal-action justify-center mt-8">
          <button className="btn bg-white text-blue-500 hover:border-blue-100 hover:bg-blue-100">
            Abort
          </button>
          <button
            className="btn btn-outline !ml-6 text-white border-white hover:border-blue-100 hover:bg-blue-100 hover:text-blue-500"
            onClick={() => gridRef.current.resetAll()}
          >
            Clear board
          </button>
        </div>
      </form>
    </dialog>
  );
}

export function RestartGameConfirmation({ setGame }) {
  return (
    <dialog id="restart_confirm" className="modal">
      <form
        method="dialog"
        className="modal-box bg-blue-500 text-white max-w-sm"
      >
        <h3 className={`mt-2 text-2xl font-semibold`}>Restart sudoku game</h3>

        <p className="py-4">
          Are you sure you want to restart the Sudoku game? This action will
          restart the game with a new board of same difficulty, and your
          progress will be lost. All cells will be cleared, and you won&apos;t be
          able to undo this. Proceed with the restart?
        </p>

        <div className="modal-action justify-center mt-8">
          <button className="btn bg-white text-blue-500 hover:border-blue-100 hover:bg-blue-100">
            Keep playing
          </button>
          <button
            className="btn btn-outline !ml-6 text-white border-white hover:border-blue-100 hover:bg-blue-100 hover:text-blue-500"
            onClick={() => setGame("fetch")}
          >
            Restart game
          </button>
        </div>
      </form>
    </dialog>
  );
}
