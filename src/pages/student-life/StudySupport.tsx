import { Container } from '../../components/common/Container';
import { Section, SectionTitle } from '../../components/common/Section';
import { SmartImage } from '../../components/common/SmartImage';
import { Library, Wifi, Languages, Microscope, Monitor, BookOpen } from 'lucide-react';
import { Button } from '../../components/common/Button';

// Görsel
import libraryImg from '../../assets/images/campus-building.jpg'; // Uygun görsel

export const StudySupport = () => {
  const resources = [
    {
      title: "Libraries & IT",
      icon: Library,
      desc: "Outstanding range of resources including well-stocked libraries and IT services, with Wi-Fi available across campus."
    },
    {
      title: "Laboratories",
      icon: Microscope,
      desc: "Access to seminar rooms and subject-specific facilities such as laboratories with state-of-the-art equipment."
    },
    {
      title: "Museums & Collections",
      icon: BookOpen,
      desc: "Benefit from access to award-winning museums, where you can utilise historical collections to support your studies and research."
    }
  ];

  return (
    <div className="bg-neutral-50 min-h-screen font-sans">
      
      {/* Header */}
      <Section bg="navy" className="py-20">
        <SectionTitle align="center" subtitle="Academic Resources">Support Your Study</SectionTitle>
        <p className="text-center text-neutral-300 max-w-2xl mx-auto text-lg">
          When you join University of NorthWest you will find all the facilities you need to complement, enhance and support your studies.
        </p>
      </Section>

      <Container className="-mt-16 relative z-10 pb-24">
        
        {/* GÖRSEL & INTRO */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-card border border-neutral-100 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-64 md:h-auto min-h-[300px] rounded-lg overflow-hidden shadow-md">
               <SmartImage 
                 src={libraryImg} 
                 alt="Library and Study" 
                 className="h-full w-full"
                 placeholderText="Library & Study Areas"
                 aspectRatio="video"
               />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary-900 mb-6">World-Class Facilities</h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                We have a continual programme of investment in facilities to ensure that you have access to the best learning environment. 
                From dedicated study spaces to high-tech labs, we provide the infrastructure for your success.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-secondary-50 text-secondary-700 rounded-full text-sm font-medium flex items-center">
                  <Wifi className="w-4 h-4 mr-2" /> Campus-wide Wi-Fi
                </span>
                <span className="px-3 py-1 bg-secondary-50 text-secondary-700 rounded-full text-sm font-medium flex items-center">
                  <Monitor className="w-4 h-4 mr-2" /> IT Services
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* KAYNAKLAR (GRID) */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {resources.map((res, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-secondary-500 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-6">
                <res.icon className="w-6 h-6 text-primary-900" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">{res.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {res.desc}
              </p>
            </div>
          ))}
        </div>

        {/* DİL MERKEZİ */}
        <div className="bg-primary-900 text-white p-10 rounded-2xl relative overflow-hidden">
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
             <div className="mb-6 md:mb-0 md:mr-8">
               <div className="flex items-center mb-4">
                 <Languages className="w-8 h-8 text-secondary-500 mr-3" />
                 <h3 className="text-2xl font-serif font-bold">Language Centre</h3>
               </div>
               <p className="text-primary-200 text-sm leading-relaxed max-w-xl">
                 Looking to learn another language? Whether to prepare for study abroad, enhance employment prospects, or just for fun, we can help. 
                 We offer courses from <strong>Arabic</strong> and <strong>Chinese</strong> to <strong>Spanish</strong>, either credit-bearing or extra-curricular.
               </p>
             </div>
             <Button variant="secondary" className="whitespace-nowrap">
               View Language Courses
             </Button>
           </div>
        </div>

      </Container>
    </div>
  );
};