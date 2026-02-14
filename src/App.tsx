import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Solutions } from './components/sections/Solutions';
import { Method } from './components/sections/Method';
import { Showcase } from './components/sections/Showcase';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Method />
        <Showcase />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;