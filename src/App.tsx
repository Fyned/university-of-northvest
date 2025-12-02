import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Academics } from './pages/Academics';

// Ana Sayfa Bileşeni (Geçici olarak burada, ileride ayırabiliriz)
const Home = () => (
  <>
    <Hero />
    <div className="py-20 text-center text-neutral-400">
      <p className="font-serif italic">Phase 3: Admissions & Faculty (Coming Soon)</p>
    </div>
  </>
);

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/academics" element={<Academics />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App