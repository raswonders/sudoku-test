export function ClearBoardConfirmation({ gridRef }) {
  return (
    <dialog id="clear_confirm" className="modal modal-bottom sm:modal-middle">
      <form
        method="dialog"
        className="modal-box bg-blue-500 text-white max-w-sm"
      >
        <h3 className={`mt-2 text-2xl font-semibold`}>Clear sudoku board</h3>

        <p className="py-4">
          Are you sure you want to clear all values on the Sudoku board? This
          action will erase all your progress, and you won't be able to undo it.
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
