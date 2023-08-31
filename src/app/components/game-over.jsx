import { Fira_Sans } from "next/font/google";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function GameOverModal({ game, setGame, difficulty, time, gridRef }) {
  const won = game === "won";

  const formattedTime = new Date(time * 1000)
    .toISOString()
    .slice(14, 19)
    .replace(/:/g, "\u00A0:\u00A0"); // use non-breaking space colon

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

        <p className="mt-8">board {difficulty}</p>
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
                Leaderboard
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
                onClick={() => gridRef.current.resetAll()}
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

export default GameOverModal;
