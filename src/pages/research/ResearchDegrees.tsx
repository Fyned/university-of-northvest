import { Container } from '../../components/common/Container';
import { Section, SectionTitle } from '../../components/common/Section';
import { SmartImage } from '../../components/common/SmartImage';
import { Award, FileText, Download, GraduationCap, CheckCircle } from 'lucide-react';
import { Button } from '../../components/common/Button';

// Görsel
import researchImg from '../../assets/images/research-lab.jpg'; 

export const ResearchDegrees = () => {
  return (
    <div className="bg-neutral-50 min-h-screen font-sans">
      
      {/* Header */}
      <Section bg="navy" className="py-20">
        <SectionTitle align="center" subtitle="Advanced Study">Research Degrees</SectionTitle>
        <p className="text-center text-neutral-300 max-w-2xl mx-auto text-lg">
          Explore our range of research degree options, from PhDs to Professional Doctorates, designed for ambitious scholars and professionals.
        </p>
      </Section>

      <Container className="-mt-16 relative z-10 pb-24">
        
        {/* GİRİŞ & GÖRSEL */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-card border border-neutral-100 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1">
               <h2 className="text-2xl font-serif font-bold text-primary-900 mb-6">Degree Types</h2>
               <div className="space-y-6">
                 <div>
                   <h3 className="font-bold text-lg text-primary-900 flex items-center mb-2">
                     <GraduationCap className="w-5 h-5 text-secondary-600 mr-2" />
                     PhD & MPhil
                   </h3>
                   <p className="text-sm text-neutral-600 leading-relaxed">
                     PhD candidates critically investigate an approved topic resulting in an independent contribution to knowledge. 
                     Full-time PhD students normally complete within 3-4 years, whilst part-time candidates may take up to 6 years.
                   </p>
                 </div>
                 <div>
                   <h3 className="font-bold text-lg text-primary-900 flex items-center mb-2">
                     <FileText className="w-5 h-5 text-secondary-600 mr-2" />
                     PhD by Published Work
                   </h3>
                   <p className="text-sm text-neutral-600 leading-relaxed">
                     Candidates who have already published work demonstrating an original contribution to knowledge may submit an application to establish a case to submit a thesis for examination.
                   </p>
                 </div>
               </div>
             </div>
             <div className="relative h-64 md:h-auto min-h-[300px] rounded-lg overflow-hidden shadow-md order-1 md:order-2">
               <SmartImage 
                 src={researchImg} 
                 alt="Research Degrees" 
                 className="h-full w-full"
                 placeholderText="Academic Research"
                 aspectRatio="video"
               />
             </div>
          </div>
        </div>

        {/* PROFESSIONAL DOCTORATE */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          
          <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-sm border border-neutral-100">
             <div className="flex items-center mb-6">
               <Award className="w-6 h-6 text-primary-900 mr-3" />
               <h3 className="text-xl font-bold text-primary-900">Professional Doctorate</h3>
             </div>
             <p className="text-sm text-neutral-600 leading-relaxed mb-6">
               Designed for busy senior professionals, focusing on the candidate’s own professional practice. 
               Stage 1 involves workshops on methodology, leading to Stage 2: original research and thesis.
             </p>
             <div className="grid sm:grid-cols-2 gap-4">
               {[
                 "Science and Technology",
                 "Business Administration (DBA)",
                 "Education (EdD)",
                 "Health and Social Care",
                 "Laws",
                 "Practical Theology"
               ].map((subject, idx) => (
                 <div key={idx} className="flex items-center text-sm text-primary-800 bg-primary-50 p-3 rounded-lg">
                   <CheckCircle className="w-4 h-4 text-secondary-500 mr-2 flex-shrink-0" />
                   {subject}
                 </div>
               ))}
             </div>
          </div>

          <div className="lg:col-span-1 bg-secondary-50 p-8 rounded-xl border border-secondary-100">
             <h3 className="text-lg font-bold text-primary-900 mb-4">Training Programme</h3>
             <p className="text-sm text-neutral-700 mb-4 leading-relaxed">
               Developed for potential research candidates who wish to be considered for entry but may lack research experience.
             </p>
             <ul className="space-y-2 text-xs text-neutral-600 mb-6">
               <li>• Philosophy & methodology of research</li>
               <li>• Formulating research questions</li>
               <li>• Data collection & analysis methods</li>
               <li>• Research ethics</li>
             </ul>
             <Button variant="outline" className="w-full bg-white text-xs h-10">
               <Download className="w-3 h-3 mr-2" /> Download Application Form
             </Button>
          </div>

        </div>

      </Container>
    </div>
  );
};