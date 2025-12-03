import { Container } from '../../components/common/Container';
import { Section, SectionTitle } from '../../components/common/Section';
import { SmartImage } from '../../components/common/SmartImage';
import { Button } from '../../components/common/Button';
import { CheckCircle, Map, FileText, Home, Facebook, Twitter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Görsel
import preArrivalImg from '../../assets/images/student-life.jpg'; // Uygun görsel

export const PreArrival = () => {
  return (
    <div className="bg-neutral-50 min-h-screen font-sans">
      
      {/* Header */}
      <Section bg="navy" className="py-20">
        <SectionTitle align="center" subtitle="Preparation Guide">Before You Get Here</SectionTitle>
        <p className="text-center text-neutral-300 max-w-2xl mx-auto text-lg">
          If you decide to come and study with us, find everything you need to prepare for your arrival.
        </p>
      </Section>

      <Container className="-mt-16 relative z-10 pb-24">
        
        {/* GİRİŞ & GÖRSEL */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-card border border-neutral-100 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-64 md:h-auto min-h-[300px] rounded-lg overflow-hidden shadow-md order-2 md:order-1">
               <SmartImage 
                 src={preArrivalImg} 
                 alt="Students on Campus" 
                 className="h-full w-full"
                 placeholderText="Campus Life"
                 aspectRatio="video"
               />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-serif font-bold text-primary-900 mb-6">Your Welcome Guide</h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                We have prepared resources to help you find your way around, including maps and information on Welcome events (Get Engaged). 
                You’ll also find our Student Charter which explains what you can expect of us, and what we expect of you.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Facebook className="w-4 h-4 mr-2" /> Follow us
                </Button>
                <Button variant="outline" size="sm" className="border-sky-500 text-sky-500 hover:bg-sky-50">
                  <Twitter className="w-4 h-4 mr-2" /> Follow us
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* ÖNEMLİ ADIMLAR (GRID) */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Registering Online */}
          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-secondary-500 hover:-translate-y-1 transition-transform">
            <div className="flex items-center mb-6">
              <FileText className="w-8 h-8 text-primary-900 mr-3" />
              <h3 className="text-xl font-bold text-primary-900">Registering Online</h3>
            </div>
            <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
              You’ll receive details of how to register in your Welcome email from our Admissions Office once you’ve met the terms of your offer.
            </p>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <p className="text-xs font-bold text-primary-800 mb-2">Why Register?</p>
              <ul className="space-y-2 text-xs text-neutral-600">
                <li className="flex items-start"><CheckCircle className="w-3 h-3 text-secondary-500 mr-2 mt-0.5" /> Attend lectures & seminars</li>
                <li className="flex items-start"><CheckCircle className="w-3 h-3 text-secondary-500 mr-2 mt-0.5" /> Receive tuition</li>
                <li className="flex items-start"><CheckCircle className="w-3 h-3 text-secondary-500 mr-2 mt-0.5" /> Access library facilities</li>
              </ul>
            </div>
          </div>

          {/* Accommodation */}
          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-primary-600 hover:-translate-y-1 transition-transform">
            <div className="flex items-center mb-6">
              <Home className="w-8 h-8 text-primary-900 mr-3" />
              <h3 className="text-xl font-bold text-primary-900">Student Accommodation</h3>
            </div>
            <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
              If you’re moving into our university-managed accommodation, you’ll need to pre-book your arrival slot to ensure a smooth move-in process.
            </p>
            <Link to="/student-life/accommodation">
              <Button className="w-full">
                View Accommodation Details <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

        </div>

        {/* HARİTA / MAPS TEASER */}
        <div className="bg-secondary-50 border border-secondary-100 p-8 rounded-xl flex items-start">
           <Map className="w-10 h-10 text-secondary-600 mr-4 flex-shrink-0" />
           <div>
             <h4 className="font-bold text-lg text-primary-900 mb-2">Campus Maps</h4>
             <p className="text-sm text-neutral-700 mb-4">
               Don't get lost on your first day! Download our campus maps to find your way around lecture halls, libraries, and student centers.
             </p>
             <a href="#" className="text-secondary-700 font-bold text-sm hover:underline">Download PDF Map &rarr;</a>
           </div>
        </div>

      </Container>
    </div>
  );
};