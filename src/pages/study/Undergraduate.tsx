import { useState } from 'react';
import { Container } from '../../components/common/Container';
import { Section, SectionTitle } from '../../components/common/Section';
import { SmartImage } from '../../components/common/SmartImage';
import { Check, Search, BookOpen } from 'lucide-react';

// Görsel
import studentLifeImg from '../../assets/images/student-life.jpg';

export const Undergraduate = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Orijinal siteden alınan TAM LİSTE (Birebir İçerik)
  const degrees = [
    "Accounting and Finance – BSc (Hons)",
    "Accounting and Financial Management (Top-Up) – BSc (Hons)",
    "Archaeology and Landscape History – BA (Hons)",
    "Architectural Technology – BSc (Hons)",
    "Architecture – BSc (Hons)",
    "Audio and Music Technology – BSc (Hons)",
    "Banking and Finance – BSc (Hons)",
    "Banking and Finance (Top-Up) – BSc (Hons)",
    "Biomedical Science – BSc (Hons)",
    "Bioscience – FdSc",
    "Building Surveying – BSc (Hons)",
    "Business Administration (Top-Up) – BSc (Hons)",
    "Business and Finance (Top-Up) – BSc (Hons)",
    "Business and Human Resource Management – BSc (Hons)",
    "Business Economics – BSc (Hons)",
    "Business Information Systems – BSc (Hons)",
    "Business Management – BA (Hons)",
    "Business Management – BSc (Hons)",
    "Business Management and Finance – BSc (Hons)",
    "Business Management and Leadership – BSc (Hons)",
    "Civil Engineering – BSc (Hons)",
    "Civil Engineering – BEng (Hons)",
    "Civil Engineering – FdSc",
    "Coaching for Performance in Football – BSc (Hons)",
    "Community Specialist Practitioner (District Nursing) – BSc (Hons)",
    "Computer Games Art – BA (Hons)",
    "Computer Gaming Technology – BSc (Hons)",
    "Computer Gaming Technology with Foundation Year – BSc (Hons)",
    "Computer Science – FdSc",
    "Computer Science – BSc (Hons)",
    "Computing and Information Systems – BSc (Hons)",
    "Construction – FdSc",
    "Construction Management – BSc (Hons)",
    "Construction Management (Top-Up) – BSc (Hons)",
    "Counselling (Child and Young Person) – DipHE",
    "Creative Music Technology – BA (Hons)",
    "Criminology and Sociology – BA (Hons)",
    "Decontamination Sciences – FdSc",
    "Drama – BA (Hons)",
    "Drama and English Literature – BA (Hons)",
    "Drama and Film Studies – BA (Hons)",
    "Early Childhood Professional Studies – BA (Hons)",
    "Early Childhood Professional Studies (Top-Up) – BA (Hons)",
    "Early Years, Playwork and Education – FdA",
    "Early Years Professional Practice (Top-up) – BA (Hons)",
    "Education and Childhood Studies – BA (Hons)",
    "Education Studies – BA (Hons)",
    "Education (Top-Up) – BA (Hons)",
    "Electronics – BEng (Hons)",
    "Engineering – FdSc",
    "English Language and English Language Teaching – BA (Hons)",
    "English Language and Linguistics – BA (Hons)",
    "English Language Studies (For Non-native Speakers of English) – BA (Hons)",
    "English Literature – BA (Hons)",
    "Equine Science with Rehabilitation Therapies – BSc (Hons)",
    "Equine Science with Rehabilitation Therapies – FdSc",
    "Fashion Design – BA (Hons)",
    "Film and Television Production – BA (Hons)",
    "Film Studies – BA (Hons)",
    "Film Studies and Media Studies – BA (Hons)",
    "Finance and Economics – BSc (Hons)",
    "Fine Art – BA (Hons)",
    "Forensic Science – BSc (Hons)",
    "Forensic Science with Foundation Year – BSc (Hons)",
    "Graphic Design – BA (Hons)",
    "Graphic Design – FdA",
    "Health and Social Care – FdSc",
    "Healthcare Science – BSc (Hons)",
    "Hearing Aid Audiology – FdSc",
    "History – BA (Hons)",
    "History and English – BA (Hons)",
    "History and Sociology – BA (Hons)",
    "Illustration – BA (Hons)",
    "Illustration and Animation – BA (Hons)",
    "Integrated Engineering (Top-Up) – BEng (Hons)",
    "Interior Design – BA (Hons)",
    "International Business English (Non-native Speakers) – BA (Hons)",
    "International Business Management – BSc (Hons)",
    "International Business Management (Accelerated) – BSc (Hons)",
    "International Nursing Studies (with option of Overseas Nursing Programme) – BSc (Hons)",
    "Journalism (Multimedia) – BA (Hons)",
    "Leadership and Management in Health and Social Care – FdSc",
    "Leading Business Change – University Diploma",
    "Leading Business Development – University Diploma",
    "Management – BA (Hons)",
    "Management – FdA",
    "Management and Leadership in Health and Social Care (Top up) – BSc (Hons)",
    "Management of Social and Affordable Housing – FdSc",
    "Management (Work-Based) – FdA",
    "Marine Biology with Biodiversity and Conservation – BSc (Hons)",
    "Marketing – BA (Hons)",
    "Mechanical Engineering – BEng (Hons)",
    "Media Studies – BA (Hons)",
    "Medical Science – BSc (Hons)",
    "Midwifery – BSc (Hons)",
    "Motorsport Engineering – FdSc",
    "Music – BA (Hons)",
    "Network Infrastructure and Security – BSc (Hons)",
    "Nursing – Adult – BSc (Hons)",
    "Nursing – Child – BSc (Hons)",
    "Nursing – Mental Health – BSc (Hons)",
    "Nutrition – BSc (Hons)",
    "Performing Arts – BA (Hons)",
    "Philosophy and English Literature – BA (Hons)",
    "Photography – BA (Hons)",
    "Politics – BA (Hons)",
    "Popular Music – BA (Hons)",
    "Primary and Community Care (Top-Up) – BSc (Hons)",
    "Professional Practice in International Trade – FdA",
    "Psychology – BSc (Hons)",
    "Public Health – BSc (Hons)",
    "Public Service – FdA",
    "Quantity Surveying – BSc (Hons)",
    "Social Policy – BA (Hons)",
    "Social Work – BA (Hons)",
    "Sociology – BA (Hons)",
    "Specialist Community Public Health Nursing (Top-Up) – BSc (Hons)",
    "Sports Coaching and Physical Education – BSc (Hons)",
    "Sports Coaching and Physical Education with Foundation Year – BSc (Hons)",
    "Sports Journalism – FdA",
    "Sports Science – BSc (Hons)",
    "Sports Science with Foundation Year – BSc (Hons)",
    "Tourism Management – BSc (Hons)",
    "Writing and English Literature – BA (Hons)",
    "Writing and Film Studies – BA (Hons)"
  ];

  // Arama Filtresi
  const filteredDegrees = degrees.filter(degree => 
    degree.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-neutral-50 min-h-screen">
      
      {/* Header */}
      <Section bg="navy" className="py-20">
        <SectionTitle align="center" subtitle="Start Your Journey">Undergraduate Study</SectionTitle>
        <p className="text-center text-neutral-300 max-w-2xl mx-auto text-lg">
          In the United States of America undergraduate refers to those who are studying for a bachelor's degree.
        </p>
      </Section>

      {/* Tanıtım & Arama Alanı */}
      <Container className="-mt-16 relative z-10 pb-12">
        <div className="bg-white rounded-xl shadow-card border border-neutral-100 overflow-hidden mb-12">
          <div className="grid md:grid-cols-2">
            
            {/* Sol Taraf: Görsel */}
            <div className="relative h-64 md:h-auto min-h-[300px]">
              <SmartImage 
                src={studentLifeImg} 
                alt="Students on Campus" 
                className="h-full w-full"
                placeholderText="Happy Students Group"
                aspectRatio="portrait"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-900/50 to-transparent md:hidden" />
            </div>

            {/* Sağ Taraf: İçerik */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-2xl font-serif font-bold text-primary-900 mb-4">The Undergraduate Experience</h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed mb-8">
                <p>
                  The most common method consists of four years of study leading to a Bachelor of Arts (B.A.), 
                  a Bachelor of Science (B.S.), or sometimes another bachelor's degree.
                </p>
                <p>
                   Professional degrees such as law, medicine, pharmacy, and dentistry, are offered as graduate study 
                   after earning at least three years of undergraduate schooling.
                </p>
              </div>

              {/* Arama Kutusu */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Search for a degree..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-neutral-200 bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 transition-all"
                />
              </div>
            </div>

          </div>
        </div>

        {/* BÖLÜM LİSTESİ (Orijinal İçerik) */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-neutral-100">
          <h2 className="text-3xl font-serif font-bold text-primary-900 mb-8 flex items-center">
            <BookOpen className="w-8 h-8 text-secondary-600 mr-3" />
            Undergraduate Subjects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {filteredDegrees.map((degree, index) => (
              <div key={index} className="flex items-start group p-2 rounded hover:bg-neutral-50 transition-colors">
                <Check className="w-4 h-4 text-secondary-500 mt-1 mr-3 flex-shrink-0 group-hover:text-secondary-600" />
                <span className="text-sm text-neutral-700 font-medium group-hover:text-primary-900">
                  {degree}
                </span>
              </div>
            ))}
          </div>

          {filteredDegrees.length === 0 && (
            <div className="text-center py-12 text-neutral-500">
              <p>No degrees found matching "{searchQuery}".</p>
            </div>
          )}
        </div>
        
      </Container>
    </div>
  );
};