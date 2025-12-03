import { useState } from 'react';
import { Container } from '../../components/common/Container';
import { Section, SectionTitle } from '../../components/common/Section';
import { SmartImage } from '../../components/common/SmartImage';
import { Check, Search, BookOpen } from 'lucide-react';

// Görsel
import gradImg from '../../assets/images/graduation.jpg';

export const Postgraduate = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Orijinal siteden alınan TAM POSTGRADUATE LİSTESİ (Birebir İçerik)
  const degrees = [
    "Accounting – MSc",
    "Accounting and Finance – MSc",
    "Accounting (with Placement) – MSc",
    "Adult Critical Care Nursing – MSc",
    "Advanced Midwifery Practice – MSc",
    "Advanced Practice – MSc",
    "Advanced Pre-Hospital Trauma Care – MSc",
    "Animal Behaviour Applications for Conservation – MSc",
    "Applied Linguistics and TESOL – MA",
    "Applied Positive Psychology – MSc",
    "Applied Wildlife Conservation – MSc",
    "Biotechnology – MSc",
    "Cardiac Care – PG Cert",
    "Children and Young People – MSc",
    "Children’s Book Illustration – MA",
    "Civil Engineering – MSc",
    "Clinical Child Psychology – MSc",
    "Cognitive and Clinical Neuroscience – MSc",
    "Community Specialist Practitioner (District Nursing) – PG Dip",
    "Computer Games Development (Art) – MA",
    "Computer Games Development (Computing) – MSc",
    "Computer Science – MSc",
    "Conservation of Buildings – MSc",
    "Construction Management – MSc",
    "Construction Management – Graduate Certificate",
    "Construction Project Management – MSc",
    "Creative Writing – MA",
    "Criminology – MA",
    "Critical Care – PG Cert",
    "Data Centre Leadership and Management – MA",
    "Dramatherapy – MA",
    "Early Childhood Education – MA",
    "Education – MA",
    "Educational Leadership and Management – MBA",
    "Electronic and Electrical Engineering – MSc",
    "Emergency Care – PG Cert",
    "Engineering Management – MSc",
    "English Literature – MA",
    "Entrepreneurial Management – MSc",
    "Family Therapy and Systemic Practice – PG Cert",
    "Fashion Design – MA",
    "Film and Television Production – MA",
    "Finance – MSc",
    "Fine Art – MA",
    "Forensic Science – MSc",
    "Foundations in Clinical Psychology – MSc",
    "Graphic Design and Typography – MA",
    "Healthcare Management – MSc",
    "Health Care Management – MBA",
    "Health Economics and Management – MSc",
    "Health Informatics – MSc",
    "Human Resource Management – MA",
    "Human Resource Management (CIPD Block Delivery) – PG Dip",
    "Human Resource Management (CIPD – day release) – PG Dip",
    "Human Resource Management MA Stage 3 only (Top-Up) – MA",
    "Illustration and Book Arts – MA",
    "Information and Communication Technology (Conversion) – MSc",
    "Information Systems Management – MBA",
    "Intercultural Communication – MA",
    "International Business – MSc",
    "International Business Law – LLM",
    "International Commercial Law – LLM",
    "International Hospitality and Tourism Management – MSc",
    "International Nursing Studies (with ONP) – MSc",
    "International Relations – MA",
    "International Social Welfare and Social Policy – MSc",
    "Leadership and Management – MA",
    "Learning and Teaching (Higher Education) – PG Cert",
    "Legal Practice Course – PG Dip",
    "Legal Practice (Top-Up) – LLM",
    "Magnetic Resonance Imaging – MSc",
    "Management – MSc",
    "Manufacturing Systems – MSc",
    "Marketing – MSc",
    "Master of Business Administration – MBA",
    "Mechanical Engineering – MSc",
    "Medical and Healthcare Education – MSc",
    "Medical Law and Ethics – LLM",
    "Medical Technology – MSc",
    "Mental Health – MSc",
    "Military Veterans and Families Studies – MSc",
    "Minimally Invasive and Robotic Surgery – MCh",
    "Mobile Telecommunications – MSc",
    "Music Therapy – MA",
    "Networking – PG Cert",
    "Network Security – MSc",
    "Orthopaedics – MCh",
    "Photography – MA",
    "Plastic and Aesthetic Surgery Practice – MCh",
    "Printmaking – MA",
    "Project Management – MSc",
    "Psychodrama (Top-Up) – MA",
    "Public Health – MSc",
    "Publishing – MA",
    "Research Methods in Psychology – MSc",
    "Social Work – MA",
    "Sociology – MA",
    "Specialist Community Public Health Nursing (Health Visiting or School Nursing) – PG Dip",
    "Sport and Exercise Science – MSc",
    "Student Affairs – MA",
    "Supply Chain Management – MSc",
    "Supply Chain Management (with Placement) – MSc",
    "Surgical Care Practice – MSc",
    "Sustainability – MSc",
    "TESOL and Materials Development – MA",
    "Tourism Management – MSc",
    "Town Planning – MSc",
    "Urban Design – MSc"
  ];

  // Arama Filtresi
  const filteredDegrees = degrees.filter(degree => 
    degree.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-neutral-50 min-h-screen">
      
      {/* Header */}
      <Section bg="navy" className="py-20">
        <SectionTitle align="center" subtitle="Advance Your Career">Postgraduate Study</SectionTitle>
        <p className="text-center text-neutral-300 max-w-2xl mx-auto text-lg">
          Postgraduate programmes offer the opportunity to undertake in-depth study in a particular area of interest.
        </p>
      </Section>

      {/* Tanıtım & Arama Alanı */}
      <Container className="-mt-16 relative z-10 pb-12">
        <div className="bg-white rounded-xl shadow-card border border-neutral-100 overflow-hidden mb-12">
          <div className="grid md:grid-cols-2">
            
            {/* Sol Taraf: Görsel */}
            <div className="relative h-64 md:h-auto min-h-[300px]">
              <SmartImage 
                src={gradImg} 
                alt="Postgraduate Students" 
                className="h-full w-full"
                placeholderText="Graduation Ceremony"
                aspectRatio="portrait"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-900/50 to-transparent md:hidden" />
            </div>

            {/* Sağ Taraf: İçerik */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-2xl font-serif font-bold text-primary-900 mb-4">Master Your Future</h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed mb-8">
                <p>
                  Postgraduate study is more challenging than undergraduate study; it requires commitment 
                  and the demonstration of more advanced study skills.
                </p>
                <p>
                  However, it is important to realise that postgraduate study requires greater independence, 
                  and students need to use their own initiative in completing course work and undertaking research projects.
                </p>
              </div>

              {/* Arama Kutusu */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Search for a master's degree..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-neutral-200 bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 transition-all"
                />
              </div>
            </div>

          </div>
        </div>

        {/* BÖLÜM LİSTESİ */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-neutral-100">
          <h2 className="text-3xl font-serif font-bold text-primary-900 mb-8 flex items-center">
            <BookOpen className="w-8 h-8 text-secondary-600 mr-3" />
            Postgraduate Subjects
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