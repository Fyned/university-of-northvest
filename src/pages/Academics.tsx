import { useState } from 'react';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { programmes } from '../data/programmes';
import type { DegreeLevel } from '../types';
import { Search, BookOpen, Clock, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Academics = () => {
  const [activeTab, setActiveTab] = useState<DegreeLevel | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtreleme Mantığı
  const filteredProgrammes = programmes.filter(prog => {
    const matchesTab = activeTab === 'All' || prog.level === activeTab;
    const matchesSearch = prog.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="bg-neutral-50 min-h-screen py-12 font-sans">
      <Container>
        
        {/* Başlık Alanı */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-6">
            Academic Programmes
          </h1>
          <p className="text-xl text-neutral-600 font-light">
            With over 478 accredited programmes available, find the perfect degree 
            to shape your future at University of NorthWest.
          </p>
        </div>

        {/* Filtreler ve Arama */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          
          {/* Sekmeler (Tabs) */}
          <div className="flex flex-wrap justify-center gap-2">
            {(['All', 'Bachelor', 'Master', 'Doctorate'] as const).map((level) => (
              <button
                key={level}
                onClick={() => setActiveTab(level)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === level 
                    ? 'bg-primary-900 text-white shadow-md' 
                    : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
                }`}
              >
                {level === 'All' ? 'All Programmes' : `${level}'s Degrees`}
              </button>
            ))}
          </div>

          {/* Arama Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search programmes..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 transition-colors"
            />
          </div>
        </div>

        {/* Program Listesi (Grid) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProgrammes.map((prog) => (
            <motion.div 
              key={prog.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-6 rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-4">
                <span className={`px-3 py-1 rounded text-xs font-semibold tracking-wide uppercase ${
                  prog.level === 'Bachelor' ? 'bg-blue-50 text-blue-700' :
                  prog.level === 'Master' ? 'bg-purple-50 text-purple-700' :
                  'bg-secondary-50 text-secondary-700'
                }`}>
                  {prog.level}
                </span>
                <div className="flex items-center text-neutral-400 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {prog.duration}
                </div>
              </div>

              <h3 className="text-xl font-serif font-bold text-primary-900 mb-3 group-hover:text-secondary-600 transition-colors">
                {prog.title}
              </h3>
              
              <p className="text-neutral-600 text-sm mb-6 flex-grow leading-relaxed">
                {prog.description}
              </p>

              <div className="pt-4 border-t border-neutral-100 mt-auto">
                <Button variant="ghost" size="sm" className="w-full justify-between group-hover:bg-primary-50">
                  View Curriculum
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sonuç Bulunamadı */}
        {filteredProgrammes.length === 0 && (
          <div className="text-center py-20 text-neutral-500">
            <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-20" />
            <p>No programmes found matching your criteria.</p>
          </div>
        )}

      </Container>
    </div>
  );
};