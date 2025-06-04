import { Comparison } from "./components/comparison"
import { Cta } from "./components/cta"
import { Disclaimer } from "./components/disclaimer"
import { Faq } from "./components/faq"
import { Footer } from "./components/footer"
import { Greeting } from "./components/greeting"
import { Header } from "./components/header"

function App() {
  return (
    <div className="font-inter bg-gray-50 min-h-screen px-10 pb-10 font-medium">
      <div className="max-w-[1600px] mx-auto">
        <Header />
        <Greeting />
        <Comparison />
        <Faq />
        <Cta />
        <Disclaimer />
        <Footer />
      </div>
    </div>
  )
}

export default App
