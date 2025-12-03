import { Container } from '../../components/common/Container';
import { Section, SectionTitle } from '../../components/common/Section';
import { SmartImage } from '../../components/common/SmartImage';
import { Heart, Award, Users, ArrowRight } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { Link } from 'react-router-dom';

// Görsel
import volunteerImg from '../../assets/images/student-life.jpg'; // Uygun görsel

export const Volunteering = () => {
  return (
    <div className="bg-neutral-50 min-h-screen font-sans">
      
      {/* Header */}
      <Section bg="navy" className="py-20">
        <SectionTitle align="center" subtitle="Make a Difference">Student Volunteering</SectionTitle>
        <p className="text-center text-neutral-300 max-w-2xl mx-auto text-lg">
          Join more than a thousand students who volunteer, run sports clubs, and give back to the community.
        </p>
      </Section>

      <Container className="-mt-16 relative z-10 pb-24">
        
        {/* GİRİŞ & GÖRSEL */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-card border border-neutral-100 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1">
               <h2 className="text-2xl font-serif font-bold text-primary-900 mb-6">Give Back & Grow</h2>
               <p className="text-neutral-600 leading-relaxed mb-6">
                 We support hundreds of opportunities available to you with fantastic staff to help every step of the way. 
                 Whether it's running a society or helping in the local community, volunteering is a rewarding experience.
               </p>
               <div className="bg-primary-50 p-4 rounded-lg border-l-4 border-primary-500">
                 <p className="text-sm text-primary-900 font-medium flex items-start">
                   <Award className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0" />
                   We officially accredit your volunteering hours so you can add them to your CV, boosting your employability.
                 </p>
               </div>
             </div>
             <div className="relative h-64 md:h-auto min-h-[300px] rounded-lg overflow-hidden shadow-md order-1 md:order-2">
               <SmartImage 
                 src={volunteerImg} 
                 alt="Volunteering" 
                 className="h-full w-full"
                 placeholderText="Community Service"
                 aspectRatio="video"
               />
             </div>
          </div>
        </div>

        {/* NEDEN GÖNÜLLÜ OLMALI? (KARTLAR) */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          
          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-secondary-500 text-center hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-primary-900" />
            </div>
            <h3 className="text-lg font-bold text-primary-900 mb-2">Community</h3>
            <p className="text-sm text-neutral-600">
              Meet new people, make friends, and become an active part of the local and university community.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-primary-600 text-center hover:-translate-y-1 transition-transform">
             <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
               <Award className="w-6 h-6 text-primary-900" />
             </div>
             <h3 className="text-lg font-bold text-primary-900 mb-2">Employability</h3>
             <p className="text-sm text-neutral-600">
               Increase your chances of getting your dream job. Employers value the skills gained through volunteering.
             </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-secondary-500 text-center hover:-translate-y-1 transition-transform">
             <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
               <Heart className="w-6 h-6 text-primary-900" />
             </div>
             <h3 className="text-lg font-bold text-primary-900 mb-2">Wellbeing</h3>
             <p className="text-sm text-neutral-600">
               Giving back feels good. Improve your confidence and wellbeing by making a positive impact.
             </p>
          </div>

        </div>

        {/* CTA - Students' Union */}
        <div className="bg-secondary-50 border border-secondary-200 p-8 rounded-xl flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-primary-900 mb-2">Ready to get involved?</h3>
            <p className="text-primary-800 text-sm">
              Find out more about current volunteering opportunities through the Students’ Union.
            </p>
          </div>
          <Link to="/student-life/support"> 
             {/* Link Students' Union kısmına gidebilir veya external link olabilir, şimdilik Support'a yönlendirdim */}
            <Button>
              Visit Students' Union <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>

      </Container>
    </div>
  );
};