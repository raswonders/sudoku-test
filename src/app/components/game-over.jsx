import { Fira_Sans } from "next/font/google";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function GameOverModal({ game, time, won }) {
  return (
    <>
      <button className="btn" onClick={() => window.my_modal_2.showModal()}>
        open modal
      </button>
      <dialog id="my_modal_2" className="modal">
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

          <p className="mt-8">board {game}</p>
          <p className="mt-1">
            {won ? "solved" : "lost"} in {time}
          </p>

          <div className="modal-action justify-center mt-8">
            {won ? (
              <>
                <button className="btn bg-white text-blue-500 hover:border-blue-100 hover:bg-blue-100">
                  New game
                </button>
                <button className="btn btn-outline !ml-6 text-white border-white hover:border-blue-100 hover:bg-blue-100 hover:text-blue-500">
                  Leaderboard
                </button>
              </>
            ) : (
              <>
                <button className="btn btn-outline text-white border-white hover:border-blue-100 hover:bg-blue-100 hover:text-blue-500">
                  New game
                </button>
                <button className="btn bg-white !ml-6 text-blue-500 hover:border-blue-100 hover:bg-blue-100">
                  Try again
                </button>
              </>
            )}
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default GameOverModal;
