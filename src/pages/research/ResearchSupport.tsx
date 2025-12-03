import { useState } from 'react';
import { Container } from '../../components/common/Container';
import { Section, SectionTitle } from '../../components/common/Section';
import { SmartImage } from '../../components/common/SmartImage';
import { Microscope, Search, Beaker, BookOpen } from 'lucide-react';

// Görsel
import researchImg from '../../assets/images/research-lab.jpg'; 

export const ResearchSupport = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Orijinal Siteden Alınan TAM LİSTE
  const researchAreas = [
    "Analytical Chemistry – MPhil, PhD",
    "Animal and Environmental Sciences – MPhil, PhD",
    "Applied Linguistics – DProf",
    "Art and Design – MPhil, PhD",
    "Audiology and Hearing Disability Research – MPhil, PhD",
    "Biomedical Science – MPhil, PhD",
    "Biotechnology – MPhil, PhD",
    "Built Environment – MPhil, PhD",
    "Business Management – MPhil, PhD",
    "Children’s Book Illustration – MPhil, PhD",
    "Computer Science – MPhil, PhD",
    "Creative Writing – MPhil, PhD",
    "Criminology – MPhil, PhD",
    "Doctor of Medicine by Research – MD (Res)",
    "Dramatherapy – MPhil, PhD, MA",
    "Engineering and Tribology – MPhil, PhD",
    "English Language and Intercultural Communication – MPhil, PhD",
    "English Language and Linguistics – MPhil, PhD",
    "English Literature – MPhil, PhD",
    "Equine Science – MPhil, PhD",
    "Film and Television Production – MPhil, PhD",
    "Film Studies and Media Studies – MPhil, PhD",
    "Fine Art – MPhil, PhD",
    "Forensic Science – MPhil, PhD",
    "Graphic Design and Typography – MPhil, PhD",
    "History – MPhil, PhD",
    "International Relations – MPhil, PhD",
    "Law – MPhil, PhD",
    "Mechanical Engineering – MPhil, PhD",
    "Medical Engineering – MPhil, PhD",
    "Molecular Biology – MPhil, PhD",
    "Early Childhood Education – MA",
    "Musicology – MPhil, PhD",
    "Music Technology, Sonic Arts and Composition – MPhil, PhD",
    "Music Therapy – MPhil, PhD",
    "Optometry and Vision Sciences – MPhil, PhD",
    "Philosophy – MPhil, PhD",
    "Professional Doctorate in Business and Management – DBA",
    "Professional Doctorate in Education – EdD",
    "Professional Doctorate in Health and Social Care – DProf",
    "Professional Doctorate in Laws – DProf",
    "Psychology – MPhil, PhD",
    "Publishing – MPhil, PhD",
    "Science and Technology – DProf",
    "Sociology – MPhil, PhD",
    "Sound Engineering – MPhil, PhD",
    "Sport and Exercise Sciences – MPhil, PhD",
    "Sustainability – MPhil, PhD",
    "Telecommunications – MPhil, PhD",
    "Theatre and Performance – MPhil, PhD",
    "Vision and Eye Research Unit – MPhil, PhD",
    "Zoology – MPhil, PhD"
  ];

  const filteredAreas = researchAreas.filter(area => 
    area.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-neutral-50 min-h-screen font-sans">
      
      {/* Header */}
      <Section bg="navy" className="py-20">
        <SectionTitle align="center" subtitle="Innovation & Discovery">Research Support</SectionTitle>
        <p className="text-center text-neutral-300 max-w-2xl mx-auto text-lg">
          Explore the wide range of research areas where University of NorthWest offers supervision and support for postgraduate researchers.
        </p>
      </Section>

      <Container className="-mt-16 relative z-10 pb-24">
        
        {/* GİRİŞ & ARAMA */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-card border border-neutral-100 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
               <h2 className="text-2xl font-serif font-bold text-primary-900 mb-4">Supported Research Areas</h2>
               <p className="text-neutral-600 leading-relaxed mb-8">
                 We offer MPhil, PhD, and Professional Doctorate supervision across a diverse range of disciplines. 
                 Use the search tool to find your area of interest.
               </p>
               
               <div className="relative">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 w-5 h-5" />
                 <input 
                   type="text" 
                   placeholder="Search research topics..." 
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   className="w-full pl-12 pr-4 py-3 rounded-lg border border-neutral-200 bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 transition-all"
                 />
               </div>
             </div>
             <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
               <SmartImage 
                 src={researchImg} 
                 alt="Research Laboratory" 
                 className="h-full w-full"
                 placeholderText="Research Facility"
                 aspectRatio="video"
               />
             </div>
          </div>
        </div>

        {/* ARAŞTIRMA ALANLARI LİSTESİ */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-neutral-100">
          <div className="flex items-center mb-8 pb-4 border-b border-neutral-100">
             <Microscope className="w-8 h-8 text-secondary-600 mr-3" />
             <h3 className="text-2xl font-bold text-primary-900">Available Disciplines</h3>
             <span className="ml-auto bg-primary-50 text-primary-900 px-3 py-1 rounded-full text-sm font-bold">
               {filteredAreas.length} Areas
             </span>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {filteredAreas.map((area, index) => (
              <div key={index} className="flex items-start group p-2 rounded hover:bg-neutral-50 transition-colors">
                <div className="mt-1 mr-3 flex-shrink-0">
                  {area.includes("Science") || area.includes("Chemistry") || area.includes("Biology") ? (
                    <Beaker className="w-4 h-4 text-secondary-500" />
                  ) : (
                    <BookOpen className="w-4 h-4 text-primary-400" />
                  )}
                </div>
                <span className="text-sm text-neutral-700 font-medium group-hover:text-primary-900">
                  {area}
                </span>
              </div>
            ))}
          </div>

          {filteredAreas.length === 0 && (
            <div className="text-center py-12 text-neutral-500">
              <p>No research areas found matching "{searchQuery}".</p>
            </div>
          )}
        </div>

      </Container>
    </div>
  );
};