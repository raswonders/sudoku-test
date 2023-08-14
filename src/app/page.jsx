import { Header } from "./components/Header"
import { Button } from "./components/Button"
import Board from "./components/board"

export default function Home() {
  return (
    <main>
      <Header appMode="solver" title="Fill in your challenge"/>
      <Board />
      <div className="space-x-8 flex justify-center mt-8">
        <Button variant="filled">Solve</Button>
        <Button variant="outlined">Clear</Button>
      </div>
    </main>
  )
}
