import { Container } from '../../components/common/Container';
import { Section, SectionTitle } from '../../components/common/Section';
import { SmartImage } from '../../components/common/SmartImage';
import { CheckCircle, AlertCircle, Plane, FileText, Pill, Wallet } from 'lucide-react';

// Görsel
import travelImg from '../../assets/images/student-life.jpg'; // Uygun görsel

export const PlanningTravel = () => {
  const checklistItems = [
    {
      title: "Passport & Visas",
      icon: FileText,
      text: "Obtain passport and required visas. US passports should be applied for 4-6 months before departure. Contact your destination country’s embassy for specific visa requirements."
    },
    {
      title: "Vaccinations & Health",
      icon: Pill,
      text: "Review recommendations for vaccinations and malaria prophylaxis. Allow 6 weeks to make an appointment with a healthcare provider. Ensure you have an adequate supply of prescriptions."
    },
    {
      title: "Health Insurance",
      icon: CheckCircle,
      text: "Ensure you have appropriate health insurance. Faculty or staff obtaining benefits from the University can find information on the applicability of their benefits online."
    },
    {
      title: "Money & Cash",
      icon: Wallet,
      text: "Ensure you can obtain cash at your destination (notify your bank). It is advisable to obtain a small amount of destination currency before departure."
    },
    {
      title: "Important Documents",
      icon: FileText,
      text: "Make photocopies of airline reservations, trip itinerary, and passport front page. Keep copies separate from originals and give one set to a trusted contact."
    },
    {
      title: "Driving Permits",
      icon: CheckCircle,
      text: "If planning to drive, check if you need an International Driving Permit (IDP). Some countries allow US licenses for short visits, others do not."
    }
  ];

  return (
    <div className="bg-neutral-50 min-h-screen font-sans">
      
      {/* Header */}
      <Section bg="navy" className="py-20">
        <SectionTitle align="center" subtitle="Pre-Departure Guide">Planning Your Travel</SectionTitle>
        <p className="text-center text-neutral-300 max-w-2xl mx-auto text-lg">
          A comprehensive checklist to ensure a smooth and safe journey to University of NorthWest.
        </p>
      </Section>

      <Container className="-mt-16 relative z-10 pb-24">
        
        {/* GÖRSEL & GİRİŞ */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-card border border-neutral-100 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1">
               <h2 className="text-2xl font-serif font-bold text-primary-900 mb-4 flex items-center">
                 <Plane className="w-8 h-8 text-secondary-500 mr-3" />
                 Travel Checklist
               </h2>
               <p className="text-neutral-600 leading-relaxed mb-6">
                 Preparing for international travel requires careful planning. Use this checklist to ensure you have everything in order before you depart. 
                 From visas to vaccinations, we've covered the essentials.
               </p>
               <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg">
                 <p className="text-sm text-yellow-800 flex items-start">
                   <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                   <span>
                     <strong>Non-US Citizens:</strong> Ensure your US visa paperwork is in order for your return. Bring extra evidence of your status for Immigration.
                   </span>
                 </p>
               </div>
             </div>
             <div className="relative h-64 md:h-auto min-h-[250px] order-1 md:order-2 rounded-lg overflow-hidden shadow-md">
               <SmartImage 
                 src={travelImg} 
                 alt="Travel Planning" 
                 className="h-full w-full"
                 placeholderText="Travel & Airport"
                 aspectRatio="video"
               />
             </div>
          </div>
        </div>

        {/* KONTROL LİSTESİ (GRID) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {checklistItems.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-all">
               <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center mb-4">
                 <item.icon className="w-5 h-5 text-primary-900" />
               </div>
               <h3 className="font-bold text-lg text-primary-900 mb-3">{item.title}</h3>
               <p className="text-sm text-neutral-600 leading-relaxed">
                 {item.text}
               </p>
            </div>
          ))}
        </div>

        {/* ALT NOT */}
        <div className="mt-12 text-center">
          <p className="text-neutral-500 text-sm italic">
            For US citizens, we recommend registering your travel with the local US embassy for emergency contact.
          </p>
        </div>

      </Container>
    </div>
  );
};