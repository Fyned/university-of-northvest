import { Container } from '../../components/common/Container';
import { Section, SectionTitle } from '../../components/common/Section';
import { SmartImage } from '../../components/common/SmartImage';
import { Accessibility, CheckCircle, Clock, Heart, ArrowRight } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { Link } from 'react-router-dom';

// Görsel
import supportImg from '../../assets/images/student-life.jpg'; 

export const DisabilitySupport = () => {
  return (
    <div className="bg-neutral-50 min-h-screen font-sans">
      
      {/* Header */}
      <Section bg="navy" className="py-20">
        <SectionTitle align="center" subtitle="Inclusive Learning">Disability Support</SectionTitle>
        <p className="text-center text-neutral-300 max-w-2xl mx-auto text-lg">
          We are committed to providing a supportive and accessible environment for all students.
        </p>
      </Section>

      <Container className="-mt-16 relative z-10 pb-24">
        
        {/* GİRİŞ & GÖRSEL */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-card border border-neutral-100 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1">
               <div className="flex items-center mb-4">
                 <Accessibility className="w-8 h-8 text-secondary-600 mr-3" />
                 <h2 className="text-2xl font-serif font-bold text-primary-900">Study Support Service</h2>
               </div>
               <p className="text-neutral-600 leading-relaxed mb-6">
                 Our Study Support Service offers information, advice, and specialist support to students with disabilities, 
                 including mental health difficulties, ongoing medical conditions, and specific learning difficulties such as dyslexia.
               </p>
               <div className="bg-secondary-50 p-4 rounded-lg border border-secondary-100 flex items-start">
                 <Clock className="w-5 h-5 text-secondary-600 mr-3 shrink-0 mt-0.5" />
                 <div>
                   <h4 className="font-bold text-primary-900 text-sm mb-1">Drop-in Sessions</h4>
                   <p className="text-sm text-neutral-700">
                     We hold regular drop-in sessions where you can discuss anything in confidence. 
                     Sessions run daily (12-1pm) at main campuses, or contact us anytime.
                   </p>
                 </div>
               </div>
             </div>
             <div className="relative h-64 rounded-lg overflow-hidden shadow-md order-1 md:order-2">
               <SmartImage 
                 src={supportImg} 
                 alt="Student Support" 
                 className="h-full w-full"
                 placeholderText="Inclusive Campus"
                 aspectRatio="video"
               />
             </div>
          </div>
        </div>

        {/* HİZMETLER (GRID) */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* How We Help */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100">
            <h3 className="text-xl font-bold text-primary-900 mb-6">How We Can Help</h3>
            <ul className="space-y-3 text-neutral-600 text-sm">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                Exam and assessment adjustments
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                Timetabling adjustments
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                Access to specialist facilities and equipment
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                Study needs assessments at the UNW Access Centre
              </li>
            </ul>
          </div>

          {/* DSA Info */}
          <div className="bg-primary-50 p-8 rounded-xl border border-primary-100">
            <div className="flex items-center mb-4">
              <Heart className="w-6 h-6 text-primary-900 mr-3" />
              <h3 className="text-xl font-bold text-primary-900">Disabled Students’ Allowance</h3>
            </div>
            <p className="text-sm text-neutral-700 leading-relaxed mb-6">
              You might be eligible for the Disabled Students’ Allowance (DSA), which can cover the cost of specialist equipment and support to help you complete your course.
            </p>
            <Link to="/contact">
              <Button variant="outline" className="bg-white hover:bg-primary-100 w-full sm:w-auto">
                Contact Us for Assessment <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

        </div>

      </Container>
    </div>
  );
};