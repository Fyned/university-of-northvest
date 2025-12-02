import { Link } from 'react-router-dom';
import { Container } from '../common/Container';
import { Navigation } from './Navigation';
import { Menu } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-40">
      <Container>
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Alanı (Tipografik Placeholder) */}
          <Link to="/" className="flex flex-col">
            <span className="font-serif text-2xl font-bold text-primary-900 tracking-tight">
              University of NorthWest
            </span>
            <span className="text-xs text-neutral-500 uppercase tracking-widest">
              Est. 1999
            </span>
          </Link>

          {/* Ana Navigasyon */}
          <Navigation />

          {/* Mobil Menü Tetikleyici (İşlevsiz, Faz 4'te eklenecek) */}
          <button className="xl:hidden p-2 text-primary-900">
            <Menu className="w-6 h-6" />
          </button>

        </div>
      </Container>
    </header>
  );
};