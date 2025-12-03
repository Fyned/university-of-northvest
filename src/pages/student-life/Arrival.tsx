import { Container } from '../../components/common/Container';
import { Section, SectionTitle } from '../../components/common/Section';
import { SmartImage } from '../../components/common/SmartImage';
import { CheckCircle, AlertTriangle, HelpCircle, Briefcase, MapPin, DollarSign } from 'lucide-react';

// Görsel
import arrivalImg from '../../assets/images/student-life.jpg'; 

export const Arrival = () => {
  return (
    <div className="bg-neutral-50 min-h-screen font-sans">
      
      {/* Header */}
      <Section bg="navy" className="py-20">
        <SectionTitle align="center" subtitle="Arrival Guide">When You Arrive</SectionTitle>
        <p className="text-center text-neutral-300 max-w-2xl mx-auto text-lg">
          Helpful things for you to know before and after you arrive at University of NorthWest.
        </p>
      </Section>

      <Container className="-mt-16 relative z-10 pb-24">
        
        {/* INTRO & GÖRSEL */}
        <div className="bg-white p-8 rounded-xl shadow-card border border-neutral-100 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary-900 mb-4">Welcome to Campus</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                The Office of International Relations & Global Engagement is here to answer your questions.
              </p>
              <div className="space-y-4">
                 <div className="bg-primary-50 p-4 rounded-lg">
                   <h4 className="font-bold text-primary-900 flex items-center mb-2">
                     <HelpCircle className="w-4 h-4 mr-2 text-secondary-600" />
                     When will my classes start?
                   </h4>
                   <p className="text-sm text-neutral-700">
                     The Academic Calendar generally runs from early September through mid-December (Fall), and mid-January through early May (Spring).
                   </p>
                 </div>
                 <div className="bg-primary-50 p-4 rounded-lg">
                   <h4 className="font-bold text-primary-900 flex items-center mb-2">
                     <HelpCircle className="w-4 h-4 mr-2 text-secondary-600" />
                     Is it easy to make friends?
                   </h4>
                   <p className="text-sm text-neutral-700">
                     Yes! Residence life, campus activities, and the International Student Organization provide many opportunities to meet American and international students.
                   </p>
                 </div>
              </div>
            </div>
            <div className="h-full min-h-[300px]">
               <SmartImage 
                 src={arrivalImg} 
                 alt="Campus Life" 
                 className="h-full w-full rounded-lg"
                 placeholderText="Students Arriving"
                 aspectRatio="portrait"
               />
            </div>
          </div>
        </div>

        {/* WHAT TO PACK & MONEY */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          
          {/* Packing */}
          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-secondary-500">
            <div className="flex items-center mb-6">
              <Briefcase className="w-6 h-6 text-primary-900 mr-3" />
              <h3 className="text-xl font-bold text-primary-900">What to Pack</h3>
            </div>
            <p className="text-sm text-neutral-600 mb-4">
              Bring one large suitcase and one small one. Max weight per bag on international flights is usually 20 Kg (44 lbs).
            </p>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-secondary-500 mr-2 mt-0.5" /> Warm clothing for winter</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-secondary-500 mr-2 mt-0.5" /> Personal items & toiletries</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-secondary-500 mr-2 mt-0.5" /> Photos of family and friends</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-secondary-500 mr-2 mt-0.5" /> Alarm clock</li>
            </ul>
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-100 rounded text-xs text-yellow-800">
              <strong>Warning:</strong> Do not travel with large amounts of cash! Use traveler’s checks or credit cards.
            </div>
          </div>

          {/* Money */}
          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-primary-600">
            <div className="flex items-center mb-6">
              <DollarSign className="w-6 h-6 text-primary-900 mr-3" />
              <h3 className="text-xl font-bold text-primary-900">Personal Expenses</h3>
            </div>
            <p className="text-sm text-neutral-600 mb-4">
              Most students get by on $25-$50 per week for personal expenses. Once on campus, expenses include:
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs text-neutral-700 font-medium">
               <div className="bg-neutral-50 p-2 rounded">Tuition & Fees</div>
               <div className="bg-neutral-50 p-2 rounded">Books & Supplies</div>
               <div className="bg-neutral-50 p-2 rounded">Housing & Rent</div>
               <div className="bg-neutral-50 p-2 rounded">Health Insurance</div>
               <div className="bg-neutral-50 p-2 rounded">Clothing</div>
               <div className="bg-neutral-50 p-2 rounded">Entertainment</div>
            </div>
          </div>

        </div>

        {/* DOCUMENTS (CRITICAL) */}
        <div className="bg-red-50 border border-red-100 p-8 rounded-xl mb-12">
           <div className="flex items-start mb-6">
             <AlertTriangle className="w-8 h-8 text-red-600 mr-4 flex-shrink-0" />
             <div>
               <h3 className="text-xl font-bold text-red-800">Critical Documents: Do NOT Check in Baggage!</h3>
               <p className="text-red-700 text-sm mt-1">
                 If your baggage is lost, you will be unable to present these documents at the port of entry and may be denied entry to the U.S. Keep these in your carry-on.
               </p>
             </div>
           </div>
           <div className="grid md:grid-cols-2 gap-4 text-sm text-red-800 font-medium">
             <ul className="space-y-2 list-disc list-inside">
               <li>Evidence of financial resources</li>
               <li>Evidence of student status (tuition receipts)</li>
               <li>Medical & dental records / Immunizations</li>
               <li>Official Transcripts (sealed/signed)</li>
             </ul>
             <ul className="space-y-2 list-disc list-inside">
               <li>Prescriptions for medication & eyeglasses</li>
               <li>Marriage certificate (if applicable)</li>
               <li>Birth certificates for children (if applicable)</li>
             </ul>
           </div>
        </div>

        {/* TRAVEL TIPS */}
        <div className="bg-primary-900 text-white p-10 rounded-2xl">
          <div className="flex items-center mb-4">
             <MapPin className="w-6 h-6 text-secondary-500 mr-3" />
             <h3 className="text-xl font-bold">Travel Tips</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-primary-200">
            <p>Arrange your flight as soon as you know your report date. Be prepared for fatigue due to time changes.</p>
            <p>Be well rested. Eat lightly and drink plenty of water. Wear layers of clothing to adapt to temperature changes.</p>
            <p>Label your baggage inside and out with your name and both your home and U.S. addresses.</p>
          </div>
        </div>

      </Container>
    </div>
  );
};