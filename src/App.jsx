

// import * as Sentry from '@sentry/react';
// import Hero from './Components/Hero';
// import Highlights from './Components/Highlights';

import Hero from "./Components/Hero"
import Highlights from "./Components/Highlights"
import Navbar from "./Components/Navbar"

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      {/* <Model />
      <Features />
      <HowItWorks />
      <Footer /> */}
    </main>
  )
}
export default App
// export default Sentry.withProfiler(App);