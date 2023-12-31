import { Fira_Sans } from "next/font/google";
import { useEffect } from "react";
import { getFormattedTime } from "../utils";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

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
          action will erase all your progress, and you won&apos;t be able to
          undo it. Proceed?
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
          progress will be lost. All cells will be cleared, and you won&apos;t
          be able to undo this. Proceed with the restart?
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

export function BoardInErrorModal({ gridRef }) {
  return (
    <dialog id="board_in_error" className="modal">
      <form
        method="dialog"
        className="modal-box bg-blue-500 text-white max-w-sm"
      >
        <h3 className={`mt-2 text-2xl font-semibold`}>
          Correct errors in board
        </h3>

        <p className="py-4">
          Board can be solved only if it does not contain errors. Please fix any
          errors before continuing.
        </p>

        <div className="modal-action justify-start">
          <button className="btn bg-white px-10 text-blue-500 hover:border-blue-100 hover:bg-blue-100">
            Ok
          </button>
        </div>
      </form>
    </dialog>
  );
}

export function GameOverModal({ game, setGame, difficulty, time, gridRef }) {
  const won = game === "won";

  const formattedTime = getFormattedTime(time);

  function handleReset() {
    gridRef.current.resetAll();
    setGame("reset");
  }

  const handleEscKey = () => {
    setGame("off");
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEscKey);

    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  return (
    <dialog id="game_over_modal" className="modal">
      <form
        method="dialog"
        className="modal-box text-center bg-blue-500 text-white max-w-sm"
      >
        <h3 className={`text-2xl`}>
          {won ? "Congratulations," : "No more tries remaining,"}
        </h3>
        <h3 className={`mt-2 text-4xl font-bold`}>
          {won ? "You Won!" : "Game Over"}
        </h3>

        <p className="mt-8">{difficulty}</p>
        <p className="mt-1">
          {won ? "solved" : "lost"} in {formattedTime}
        </p>

        <div className="modal-action justify-center mt-8">
          {won ? (
            <>
              <button
                className="btn bg-white text-blue-500 hover:border-blue-100 hover:bg-blue-100"
                onClick={() => setGame("difficulty")}
              >
                New game
              </button>
              <button
                className="btn btn-outline !ml-6 text-white border-white hover:border-blue-100 hover:bg-blue-100 hover:text-blue-500"
                onClick={() => setGame("off")}
              >
                Back
              </button>
            </>
          ) : (
            <>
              <button
                className="btn btn-outline text-white border-white hover:border-blue-100 hover:bg-blue-100 hover:text-blue-500"
                onClick={() => setGame("difficulty")}
              >
                New game
              </button>
              <button
                className="btn bg-white !ml-6 text-blue-500 hover:border-blue-100 hover:bg-blue-100"
                onClick={handleReset}
              >
                Try again
              </button>
            </>
          )}
        </div>
      </form>
    </dialog>
  );
}

export function DifficultyModal({ setGame, setDifficulty }) {
  function handleClick(difficulty) {
    setDifficulty(difficulty);
    setGame("fetch");
  }

  return (
    <dialog id="diff_modal" className="modal">
      <form
        method="dialog"
        className="modal-box text-center bg-blue-500 text-white max-w-sm"
      >
        <h3 className={`text-2xl`}>Choose your difficulty</h3>

        <div className="modal-action justify-center mt-8">
          <button
            className="btn btn-outline !ml-6 text-white border-white hover:border-blue-100 hover:bg-blue-100 hover:text-blue-500"
            onClick={() => handleClick("easy")}
          >
            Easy
          </button>
          <button
            className="btn btn-outline !ml-6 text-white border-white hover:border-blue-100 hover:bg-blue-100 hover:text-blue-500"
            onClick={() => handleClick("medium")}
          >
            Medium
          </button>
          <button
            className="btn btn-outline !ml-6 text-white border-white hover:border-blue-100 hover:bg-blue-100 hover:text-blue-500"
            onClick={() => handleClick("hard")}
          >
            Hard
          </button>
        </div>
      </form>
    </dialog>
  );
}

export function LoadingSpinner() {
  return (
    <>
      <dialog id="loading_spinner" className="modal">
        <form method="dialog" className="modal-box w-auto">
          <span className="loading loading-spinner loading-lg text-info"></span>
        </form>
      </dialog>
    </>
  );
}
