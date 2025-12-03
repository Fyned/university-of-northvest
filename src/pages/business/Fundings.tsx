import { Container } from '../../components/common/Container';
import { Section, SectionTitle } from '../../components/common/Section';
import { SmartImage } from '../../components/common/SmartImage';
import { Button } from '../../components/common/Button';
import { CheckCircle, TrendingUp, Users, ArrowRight, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

// Görsel
import corporateImg from '../../assets/images/corporate-meeting.jpg'; 

export const Fundings = () => {
  const supportAreas = [
    "Problem-solving business issues to improve efficiency and aid innovation",
    "Cutting-edge research to develop new products or new techniques",
    "Proof of concept or proof of market projects to establish viability",
    "Laboratory or workshop testing, data analysis, and computer simulation",
    "Conference, exhibition and meeting accommodation - high class facilities",
    "Performance space, recording studios, mock court rooms and hospital wards",
    "Short courses to improve productivity & staff expertise"
  ];

  return (
    <div className="bg-neutral-50 min-h-screen font-sans">
      
      {/* Header */}
      <Section bg="navy" className="py-20">
        <SectionTitle align="center" subtitle="Business Support">Fundings for Growth</SectionTitle>
        <p className="text-center text-neutral-300 max-w-3xl mx-auto text-lg">
          Every year we help at least 2,000 organisations with knowledge transfer: turning technology and skills into innovative commercial products.
        </p>
      </Section>

      <Container className="-mt-16 relative z-10 pb-24">
        
        {/* GİRİŞ & GÖRSEL */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-card border border-neutral-100 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="relative h-full min-h-[350px] rounded-lg overflow-hidden shadow-md order-2 md:order-1">
               <SmartImage 
                 src={corporateImg} 
                 alt="Business Meeting" 
                 className="h-full w-full"
                 placeholderText="Corporate Strategy"
                 aspectRatio="portrait"
               />
             </div>
             <div className="order-1 md:order-2">
               <h2 className="text-2xl font-serif font-bold text-primary-900 mb-6">Committed to Local Business</h2>
               <div className="space-y-6 text-neutral-600 leading-relaxed">
                 <p>
                   We are committed to supporting our local business communities and have a team of experienced business development managers to advise on the best solution for your organisation; whether it’s a micro, small, medium or large enterprise.
                 </p>
                 <p>
                   We work closely with a range of partner organisations: local authorities, professional institutes, business networks, business support organisations and government departments to support and deliver relevant services.
                 </p>
               </div>
               
               <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-primary-50 p-4 rounded-lg border border-primary-100 text-center">
                    <Users className="w-8 h-8 text-primary-900 mx-auto mb-2" />
                    <p className="font-bold text-primary-900">2,000+</p>
                    <p className="text-xs text-neutral-600">Organisations Helped</p>
                  </div>
                  <div className="bg-secondary-50 p-4 rounded-lg border border-secondary-100 text-center">
                    <Building2 className="w-8 h-8 text-secondary-600 mx-auto mb-2" />
                    <p className="font-bold text-primary-900">Network</p>
                    <p className="text-xs text-neutral-600">Local Authorities</p>
                  </div>
               </div>
             </div>
          </div>
        </div>

        {/* HİZMET ALANLARI (LİSTE) */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-sm border border-neutral-100">
             <h3 className="text-xl font-bold text-primary-900 mb-6 flex items-center">
               <TrendingUp className="w-6 h-6 text-secondary-500 mr-3" />
               How We Can Help
             </h3>
             <ul className="space-y-4">
               {supportAreas.map((area, idx) => (
                 <li key={idx} className="flex items-start p-3 rounded-lg hover:bg-neutral-50 transition-colors">
                   <CheckCircle className="w-5 h-5 text-secondary-500 mr-3 shrink-0 mt-0.5" />
                   <span className="text-neutral-700 text-sm font-medium">{area}</span>
                 </li>
               ))}
             </ul>
          </div>

          {/* CTA KUTUSU */}
          <div className="bg-primary-900 text-white p-8 rounded-xl shadow-lg flex flex-col justify-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-40 h-40 bg-secondary-500/20 rounded-full -mr-20 -mt-20 blur-3xl" />
             <h3 className="text-2xl font-serif font-bold mb-4 relative z-10">Expert Help</h3>
             <p className="text-primary-200 text-sm leading-relaxed mb-8 relative z-10">
               University of Northwest‘s business development managers will match your business requirement with the right expertise, develop a proposal and assist in writing a research bid to secure funding support.
             </p>
             <Link to="/contact" className="relative z-10">
               <Button variant="secondary" className="w-full shadow-lg">
                 Get Support <ArrowRight className="ml-2 w-4 h-4" />
               </Button>
             </Link>
          </div>
        </div>

      </Container>
    </div>
  );
};