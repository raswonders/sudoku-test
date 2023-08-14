import { Header } from "./components/Header";
import { Button } from "./components/Button";
import Board from "./components/board";

export default function Home() {
  return (
    <main className="px-4 py-6 w-full h-full flex justify-center">
      <div className="w-full h-full max-w-screen-lg flex flex-col justify-between items-center">
        <Header appMode="solver" title="Fill in your challenge" />
        <div>
          <Board />
          <div className="space-x-8 mt-6 flex justify-center">
            <Button variant="filled">Solve</Button>
            <Button variant="outlined">Clear</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
