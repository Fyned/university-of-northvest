import { Container } from '../../components/common/Container';
import { Section, SectionTitle } from '../../components/common/Section';
import { SmartImage } from '../../components/common/SmartImage';
import { Button } from '../../components/common/Button';
import { CheckCircle, BookOpen, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Görsel
import campusImg from '../../assets/images/campus-building.jpg';

export const TransferCredit = () => {
  return (
    <div className="bg-neutral-50 min-h-screen font-sans">
      
      {/* Header */}
      <Section bg="navy" className="py-20">
        <SectionTitle align="center" subtitle="Maximize Your Previous Experience">Transfer Credit</SectionTitle>
        <p className="text-center text-neutral-300 max-w-2xl mx-auto text-lg">
          Don’t leave your past behind. Take pride in your previously earned college credits and life experiences.
        </p>
      </Section>

      <Container className="-mt-16 relative z-10 pb-24">
        
        {/* HERO VURGU */}
        <div className="bg-white p-10 rounded-xl shadow-card border border-neutral-100 text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-4">
            Transfer Up to 90 Approved Credits
          </h1>
          <p className="text-secondary-600 font-bold tracking-widest uppercase text-sm mb-6">
            Toward Your Bachelor's Degree
          </p>
          <p className="text-neutral-600 leading-relaxed max-w-3xl mx-auto text-lg">
            You may already have University credits, just waiting to be transferred. 
            Transfer to University of Northwest and get a head start on earning your degree.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          
          {/* College Credits */}
          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-secondary-500 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6 text-primary-900" />
            </div>
            <h3 className="text-xl font-bold text-primary-900 mb-4">College Credits</h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              If you have ever earned community college or University credits, the school you attended may have an articulation agreement with University of Northwest. 
              Additionally, completed courses at other accredited universities can often be transferred.
            </p>
          </div>

          {/* Non-Traditional Credits */}
          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-primary-600 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-6">
              <Briefcase className="w-6 h-6 text-primary-900" />
            </div>
            <h3 className="text-xl font-bold text-primary-900 mb-4">Non-Traditional Credits</h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              The world is your campus. From military experience to corporate training, you can earn transfer credits from your personal learning. 
              Through national testing programs and Prior Learning Assessment, you can gain credit by mastering learning outcomes.
            </p>
          </div>

          {/* Master's Transfer */}
          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-secondary-500 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-6">
              <GraduationCap className="w-6 h-6 text-primary-900" />
            </div>
            <h3 className="text-xl font-bold text-primary-900 mb-4">Graduate Transfer</h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Transfer up to <strong>nine approved graduate level credits</strong> toward your Master’s degree. 
              Your previous studies and experiences have earned you more than knowledge; enroll at UNW and be rewarded.
            </p>
          </div>

        </div>

        {/* POLICIES & CTA */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
           <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
             <SmartImage 
               src={campusImg}
               alt="University Campus"
               className="h-full w-full"
               placeholderText="Campus Life"
               aspectRatio="square"
             />
             <div className="absolute inset-0 bg-primary-900/20" />
           </div>

           <div>
             <h3 className="text-2xl font-serif font-bold text-primary-900 mb-6">Generous Transfer Policies</h3>
             <div className="space-y-4 mb-8">
               <div className="flex items-start">
                 <CheckCircle className="w-6 h-6 text-secondary-500 mr-3 flex-shrink-0" />
                 <p className="text-neutral-700">
                   We accept transfer credits from any institution accredited by a US Department of Education-recognized accrediting agency.
                 </p>
               </div>
               <div className="flex items-start">
                 <CheckCircle className="w-6 h-6 text-secondary-500 mr-3 flex-shrink-0" />
                 <p className="text-neutral-700">
                   We accept more transfer credits than most colleges, valuing your hard work.
                 </p>
               </div>
             </div>

             <div className="bg-primary-50 p-6 rounded-xl border border-primary-100">
               <h4 className="font-bold text-primary-900 mb-2">Find Out How You Can Transfer Today!</h4>
               <p className="text-sm text-neutral-600 mb-4">
                 If you’re ready to find a new University, University of Northwest is right in your neighborhood.
               </p>
               <Link to="/contact">
                 <Button className="w-full sm:w-auto">
                   Contact Us to Learn More <ArrowRight className="ml-2 w-4 h-4" />
                 </Button>
               </Link>
             </div>
           </div>
        </div>

      </Container>
    </div>
  );
};