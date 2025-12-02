import { Button } from '../common/Button';
import { Container } from '../common/Container';
import { ArrowRight, BookOpen, Users, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center bg-primary-900 overflow-hidden">
      
      {/* Arka Plan Görseli */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="University Campus" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-900/90 to-transparent" />
      </div>

      {/* İçerik */}
      <Container className="relative z-10 pt-20">
        <div className="max-w-3xl space-y-8">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-secondary-600/10 border border-secondary-600/20 rounded-full px-4 py-2"
          >
            <span className="flex h-2 w-2 rounded-full bg-secondary-600 animate-pulse"></span>
            <span className="text-secondary-500 text-sm font-medium tracking-wide uppercase">
              Admissions Open for 2026
            </span>
          </motion.div>

          {/* Başlık */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight"
          >
            Shaping the Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-500 to-white">
              Global Education
            </span>
          </motion.h1>

          {/* Açıklama (British English) */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-neutral-300 font-light leading-relaxed max-w-2xl font-sans"
          >
            Join a prestigious community of innovators and leaders. With over 478 accredited programmes and a presence in 25 countries, University of NorthWest is dedicated to your academic excellence.
          </motion.p>

          {/* Butonlar (Virtual Tour kaldırıldı) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="group">
              Explore Programmes
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* Alt İstatistik Şeridi */}
      <div className="absolute bottom-0 w-full border-t border-white/10 bg-primary-900/50 backdrop-blur-md">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-6 text-white">
            <StatItem number="478+" label="Accredited Programmes" icon={BookOpen} />
            <StatItem number="9,458" label="Successful Graduates" icon={Users} />
            <StatItem number="25" label="Global Campuses" icon={Globe} />
            <StatItem number="ISO" label="Certified Institution" icon={BookOpen} />
          </div>
        </Container>
      </div>
    </div>
  );
};

// Yardımcı Alt Bileşen
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StatItem = ({ number, label, icon: Icon }: { number: string, label: string, icon: any }) => (
  <div className="flex items-center space-x-4 group cursor-default">
    <div className="p-3 rounded-lg bg-white/5 group-hover:bg-secondary-600/20 transition-colors">
      <Icon className="w-6 h-6 text-secondary-500" />
    </div>
    <div>
      <div className="text-2xl font-bold font-serif">{number}</div>
      <div className="text-xs text-neutral-400 uppercase tracking-wider font-sans">{label}</div>
    </div>
  </div>
);