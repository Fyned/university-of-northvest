// Logoyu import ediyoruz
import logoHorizontal from './assets/images/logo-horizontal.png';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="text-center space-y-8 max-w-2xl px-4">
        {/* Metin yerine Logo Görseli */}
        <img 
          src={logoHorizontal} 
          alt="University of NorthWest Logo" 
          className="h-24 md:h-32 mx-auto" // Yüksekliği ayarladık, mobilde biraz daha küçük
        />
        
        <p className="text-xl text-neutral-600 font-light font-sans">
          Establishing a legacy of excellence in higher education.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-3 bg-primary-900 text-white rounded font-medium hover:bg-primary-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            View Programmes
          </button>
          <button className="px-8 py-3 bg-white text-primary-900 border border-primary-900 rounded font-medium hover:bg-neutral-50 transition-colors">
            Contact Us
          </button>
        </div>
        <div className="pt-8 text-sm text-neutral-400">
          Phase 0: Architecture & Branding Ready
        </div>
      </div>
    </div>
  )
}

export default App