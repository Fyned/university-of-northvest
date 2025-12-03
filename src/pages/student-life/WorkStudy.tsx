import { Container } from '../../components/common/Container';
import { Section, SectionTitle } from '../../components/common/Section';
import { SmartImage } from '../../components/common/SmartImage';
import { Briefcase, DollarSign, Award, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Görsel
import workImg from '../../assets/images/corporate-meeting.jpg'; // Uygun görsel

export const WorkStudy = () => {
  return (
    <div className="bg-neutral-50 min-h-screen font-sans">
      
      {/* Header */}
      <Section bg="navy" className="py-20">
        <SectionTitle align="center" subtitle="Earn & Learn">Work While You Study</SectionTitle>
        <p className="text-center text-neutral-300 max-w-2xl mx-auto text-lg">
          Gain valuable experience, earn extra cash, and boost your employability while studying at University of NorthWest.
        </p>
      </Section>

      <Container className="-mt-16 relative z-10 pb-24">
        
        {/* GİRİŞ & GÖRSEL */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-card border border-neutral-100 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1">
               <h2 className="text-2xl font-serif font-bold text-primary-900 mb-6">The Employment Bureau</h2>
               <p className="text-neutral-600 leading-relaxed mb-6">
                 We have our own recruitment agency – the Employment Bureau. By registering, you’ll be able to apply for part-time paid work which you can fit around your studies. 
                 Most of the work is on campus, making it easy to fit into your schedule.
               </p>
               <div className="bg-primary-50 p-4 rounded-lg border-l-4 border-primary-500">
                 <p className="text-sm text-primary-900 font-medium">
                   You can register online before you arrive, but you’ll need to visit us with your passport to verify your eligibility to work in the UK/USA.
                 </p>
               </div>
             </div>
             <div className="relative h-64 md:h-auto min-h-[300px] rounded-lg overflow-hidden shadow-md order-1 md:order-2">
               <SmartImage 
                 src={workImg} 
                 alt="Students Working" 
                 className="h-full w-full"
                 placeholderText="Part-time Work"
                 aspectRatio="video"
               />
             </div>
          </div>
        </div>

        {/* AVANTAJLAR (GRID) */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          
          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-secondary-500 text-center hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-6 h-6 text-primary-900" />
            </div>
            <h3 className="text-lg font-bold text-primary-900 mb-2">Extra Income</h3>
            <p className="text-sm text-neutral-600">
              Earn money to support your studies and social life while gaining financial independence.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-primary-600 text-center hover:-translate-y-1 transition-transform">
             <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
               <Award className="w-6 h-6 text-primary-900" />
             </div>
             <h3 className="text-lg font-bold text-primary-900 mb-2">New Skills</h3>
             <p className="text-sm text-neutral-600">
               Develop employability skills and add valuable work experience to your CV to impress future employers.
             </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-secondary-500 text-center hover:-translate-y-1 transition-transform">
             <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
               <Globe className="w-6 h-6 text-primary-900" />
             </div>
             <h3 className="text-lg font-bold text-primary-900 mb-2">Networking</h3>
             <p className="text-sm text-neutral-600">
               Meet new people, expand your professional network, and become part of the workplace community.
             </p>
          </div>

        </div>

        {/* ÖNEMLİ BİLGİLER & CTA */}
        <div className="grid md:grid-cols-2 gap-8">
           
           <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-primary-900 mr-3" />
                <h3 className="text-xl font-bold text-primary-900">International Students</h3>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                If you’re an international student, there may be restrictions on your working hours as stated on your visa (typically 20 hours per week during term time).
              </p>
              <Link to="/international/support" className="text-secondary-600 font-bold text-xs flex items-center hover:underline">
                 Check Visa Regulations <ArrowRight className="ml-1 w-3 h-3" />
              </Link>
           </div>

           <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100">
              <div className="flex items-center mb-4">
                <Briefcase className="w-6 h-6 text-primary-900 mr-3" />
                <h3 className="text-xl font-bold text-primary-900">Graduate Recruitment</h3>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                We’ll be here for you after you graduate too. The team recruits for a variety of permanent graduate positions in the local area.
              </p>
              <Link to="/student-life/careers" className="text-secondary-600 font-bold text-xs flex items-center hover:underline">
                 Visit Employability Service <ArrowRight className="ml-1 w-3 h-3" />
              </Link>
           </div>

        </div>

      </Container>
    </div>
  );
};