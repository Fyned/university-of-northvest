import { Container } from '../../components/common/Container';
import { Section, SectionTitle } from '../../components/common/Section';
import { SmartImage } from '../../components/common/SmartImage';
import { Check, BookOpen } from 'lucide-react';
import { programmes } from '../../data/programmes';

// Görsel
import researchImg from '../../assets/images/research-lab.jpg';

export const Phd = () => {
  // Veri tabanımızdaki Doktora programlarını çekiyoruz
  const phdDegrees = programmes.filter(p => p.level === 'Doctorate');

  return (
    <div className="bg-neutral-50 min-h-screen">
      
      {/* Header */}
      <Section bg="pattern" className="py-24">
        <SectionTitle subtitle="Research Excellence">Doctoral Degrees</SectionTitle>
        <p className="text-center text-primary-100 max-w-3xl mx-auto text-lg font-light">
          University of Northwest builds on our tradition of excellence in graduate education established when we became the first of New York’s nine state colleges to offer a doctoral degree.
        </p>
      </Section>

      {/* İçerik - Çakışma düzeltildi */}
      <Container className="py-16 relative z-10 pb-24">
        <div className="bg-white rounded-xl shadow-card border border-neutral-100 overflow-hidden mb-12">
          
          <div className="grid md:grid-cols-2">
             {/* Sol Taraf: İçerik */}
             <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                <h3 className="text-2xl font-serif font-bold text-primary-900 mb-6">
                  Leadership & Achievement
                </h3>
                <div className="space-y-6 text-neutral-600 leading-relaxed">
                  <p>
                    Today, the University’s outstanding doctoral degree programs combine academic rigor with hands-on training and research opportunities to prepare graduates for professional leadership and achievement in an increasingly transitional workplace.
                  </p>
                  <p>
                    As a doctoral candidate, you will join a community of scholars that enjoys access to the exceptional resources of a leading institution of higher learning. You will learn from, be mentored by and collaborate with a top-tier faculty to gain the practical and theoretical knowledge and experience you need to excel in your chosen field.
                  </p>
                </div>
             </div>

             {/* Sağ Taraf: Görsel */}
             <div className="relative h-64 md:h-auto min-h-[300px] order-1 md:order-2">
                <SmartImage 
                  src={researchImg} 
                  alt="Doctoral Research" 
                  className="h-full w-full"
                  placeholderText="Research Lab"
                  aspectRatio="square"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-primary-900/20 to-transparent md:hidden" />
             </div>
          </div>
        </div>

        {/* DİNAMİK PROGRAM LİSTESİ */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-neutral-100">
          <h2 className="text-3xl font-serif font-bold text-primary-900 mb-8 flex items-center">
            <BookOpen className="w-8 h-8 text-secondary-600 mr-3" />
            Available Doctoral Programs
          </h2>
          
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            {phdDegrees.map((degree, index) => (
              <div key={index} className="flex items-start group p-3 rounded hover:bg-neutral-50 transition-colors border-b border-neutral-50 last:border-0">
                <Check className="w-5 h-5 text-secondary-500 mt-0.5 mr-3 flex-shrink-0 group-hover:text-secondary-600" />
                <div>
                  <span className="text-base text-primary-900 font-medium block group-hover:text-secondary-700 transition-colors">
                    {degree.title}
                  </span>
                  <span className="text-xs text-neutral-400 uppercase tracking-wider">
                    {degree.duration} • {degree.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </Container>
    </div>
  );
};