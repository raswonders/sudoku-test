import { Fira_Sans } from "next/font/google";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function DifficultyModal({ setGame, setDifficulty }) {
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

export function TestModal({ setGame, setDifficulty }) {
  function handleClick(difficulty) {
    setDifficulty(difficulty);
    setGame("on");
  }

  return <h1>test modal</h1>;
}

export default DifficultyModal;
