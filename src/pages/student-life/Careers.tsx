import { Container } from '../../components/common/Container';
import { Section, SectionTitle } from '../../components/common/Section';
import { SmartImage } from '../../components/common/SmartImage';
import { Briefcase, UserPlus, TrendingUp, Mail, ArrowRight, Calendar } from 'lucide-react';
import { Button } from '../../components/common/Button';

// Görsel
import careerImg from '../../assets/images/corporate-meeting.jpg'; 

export const Careers = () => {
  return (
    <div className="bg-neutral-50 min-h-screen font-sans">
      
      {/* Header */}
      <Section bg="navy" className="py-20">
        <SectionTitle align="center" subtitle="Future Success">Careers & Employability</SectionTitle>
        <p className="text-center text-neutral-300 max-w-2xl mx-auto text-lg">
          Your future career prospects are important, and we’re here to help you prepare for the world of work.
        </p>
      </Section>

      <Container className="-mt-16 relative z-10 pb-24">
        
        {/* GİRİŞ & GÖRSEL */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-card border border-neutral-100 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary-900 mb-4">Launch Your Career</h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Our Employability Service offers careers advice and organises events including employment workshops and company visits. 
                Whether you have a career in mind or are exploring options, we support you before, during, and after your studies.
              </p>
              <Button className="shadow-lg">
                Book an Appointment <Calendar className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="relative h-64 md:h-auto min-h-[300px] rounded-lg overflow-hidden shadow-md">
               <SmartImage 
                 src={careerImg} 
                 alt="Career Fair" 
                 className="h-full w-full"
                 placeholderText="Career Event"
                 aspectRatio="video"
               />
            </div>
          </div>
        </div>

        {/* HİZMETLER (GRID) */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          
          {/* Careers Advice */}
          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-secondary-500 hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-6">
              <UserPlus className="w-6 h-6 text-primary-900" />
            </div>
            <h3 className="text-xl font-bold text-primary-900 mb-3">Careers Advice</h3>
            <p className="text-sm text-neutral-600 leading-relaxed mb-4">
              We offer one-to-one appointments with experienced careers advisers via phone, email or face to face. 
            </p>
            <a href="mailto:career@northwest.ac" className="text-secondary-600 font-bold text-sm flex items-center hover:underline">
              <Mail className="w-4 h-4 mr-2" /> Email Advisers
            </a>
          </div>

          {/* Build Your Career */}
          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-primary-600 hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6 text-primary-900" />
            </div>
            <h3 className="text-xl font-bold text-primary-900 mb-3">Build Your Career</h3>
            <p className="text-sm text-neutral-600 leading-relaxed mb-4">
              Events, workshops, CV help, and interview preparation. Explore our portal for online resources and the Employability Programme.
            </p>
            <span className="text-primary-600 font-bold text-sm flex items-center cursor-pointer hover:underline">
              View Workshops <ArrowRight className="w-4 h-4 ml-2" />
            </span>
          </div>

          {/* Work While You Study */}
          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-secondary-500 hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-6">
              <Briefcase className="w-6 h-6 text-primary-900" />
            </div>
            <h3 className="text-xl font-bold text-primary-900 mb-3">Work While You Study</h3>
            <p className="text-sm text-neutral-600 leading-relaxed mb-4">
              Register with our Employment Bureau for part-time work to fit around your studies. Earn money while learning new skills.
            </p>
            <a href="mailto:career@northwest.ac" className="text-secondary-600 font-bold text-sm flex items-center hover:underline">
              <Mail className="w-4 h-4 mr-2" /> Contact Bureau
            </a>
          </div>

        </div>

      </Container>
    </div>
  );
};