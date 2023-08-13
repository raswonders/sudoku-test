import { Header } from "./components/Header"
import { Button } from "./components/Button"

export default function Home() {
  return (
    <main>
      <Header appMode="solver" title="Fill in your challenge"/>
      <div className="space-x-8">
        <Button variant="filled">Solve</Button>
        <Button variant="outlined">Clear</Button>
      </div>
    </main>
  )
}
