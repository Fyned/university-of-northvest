import { Container } from '../../components/common/Container';
import { Section, SectionTitle } from '../../components/common/Section';
import { SmartImage } from '../../components/common/SmartImage';
import { CheckCircle, Globe, GraduationCap, FileText, AlertCircle } from 'lucide-react';

// Görsel
import admissionImg from '../../assets/images/student-life.jpg'; 

export const HowToApply = () => {
  return (
    <div className="bg-neutral-50 min-h-screen font-sans">
      
      {/* Header */}
      <Section bg="navy" className="py-20">
        <SectionTitle align="center" subtitle="International Admissions">How to Apply</SectionTitle>
        <p className="text-center text-neutral-300 max-w-2xl mx-auto text-lg">
          Step-by-step guide for international students joining University of NorthWest.
        </p>
      </Section>

      <Container className="-mt-16 relative z-10 pb-24">
        
        {/* INTRO & DEFINITION */}
        <div className="bg-white p-10 rounded-xl shadow-card border border-neutral-100 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
               <h2 className="text-2xl font-serif font-bold text-primary-900 mb-4">Who is an International Student?</h2>
               <p className="text-neutral-600 leading-relaxed mb-6">
                 An international student is anyone who brings an international perspective to campus. Every year UNW welcomes students from around the world. In fact, about fifty percent of our students come from abroad.
               </p>
               <div className="p-4 bg-secondary-50 border-l-4 border-secondary-500 rounded-r-lg">
                 <p className="text-sm text-primary-900">
                   Please complete the application appropriate to your status as an incoming first-year or transfer student. Indicate your citizenship according to the passport with which you plan to enter the United States.
                 </p>
               </div>
             </div>
             <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
               <SmartImage 
                 src={admissionImg} 
                 alt="International Students" 
                 className="h-full w-full"
                 placeholderText="Global Community"
                 aspectRatio="video"
               />
             </div>
          </div>
        </div>

        {/* CRITERIA & ENGLISH PROFICIENCY */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          
          {/* Admission Criteria */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100">
            <div className="flex items-center mb-6">
               <GraduationCap className="w-6 h-6 text-primary-900 mr-3" />
               <h3 className="text-xl font-bold text-primary-900">Admission Criteria</h3>
            </div>
            <ul className="space-y-4 text-sm text-neutral-600 leading-relaxed">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                UNW first-year students will have completed 12 years of primary and secondary schooling.
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                You should plan to sit for national examinations (GCE A-levels, German Abitur, French Baccalauréat) and submit predicted scores.
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                Students with 13 years of schooling and exceptional exam results may be eligible for advanced standing or transfer credit.
              </li>
            </ul>
          </div>

          {/* English Proficiency */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100">
            <div className="flex items-center mb-6">
               <Globe className="w-6 h-6 text-primary-900 mr-3" />
               <h3 className="text-xl font-bold text-primary-900">Proficiency in English</h3>
            </div>
            <p className="text-sm text-neutral-600 mb-4">
              Since English is the language of instruction, you must demonstrate that you can read, write, and understand rapid American English.
            </p>
            <div className="bg-primary-50 p-4 rounded-lg border border-primary-100 mb-4">
              <h4 className="font-bold text-primary-900 text-sm mb-2">Minimum Score Requirements:</h4>
              <ul className="text-xs text-primary-800 space-y-1">
                <li>• TOEFL (Internet-based): <strong>100 or above</strong></li>
                <li>• TOEFL (Written): <strong>600 or above</strong></li>
                <li>• IELTS: <strong>8.0</strong></li>
              </ul>
            </div>
            <p className="text-xs text-neutral-500 italic">
              * If your SAT Critical Reading score is above 650, TOEFL/IELTS is not necessary.
            </p>
          </div>

        </div>

        {/* PROCESS & AID */}
        <div className="grid md:grid-cols-3 gap-8">
           
           {/* The Application Process */}
           <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-sm border border-neutral-100">
              <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center">
                <FileText className="w-6 h-6 text-secondary-500 mr-3" />
                The Application Process
              </h3>
              <div className="space-y-4 text-neutral-600 text-sm leading-relaxed">
                <p>
                  All applicants to UNW complete the Common Application. Although geared toward the U.S. system, it can convey specifics of any nation’s educational system.
                </p>
                <p>
                  Documents should be written in English or be accompanied by official translations along with original documents.
                </p>
                <p className="font-medium text-primary-800">
                  Integrity Policy: UNW expects that all work presented for admission will be your own. Students violating this policy may have their admission revoked.
                </p>
              </div>
           </div>

           {/* Financial Aid */}
           <div className="md:col-span-1 bg-secondary-50 p-8 rounded-xl border border-secondary-100">
              <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center">
                <AlertCircle className="w-6 h-6 text-secondary-600 mr-3" />
                Financial Aid
              </h3>
              <p className="text-sm text-primary-900 leading-relaxed mb-4">
                Financial aid for foreign citizens is limited. If you wish to be considered, you must apply at the time of admission.
              </p>
              <p className="text-xs text-neutral-600">
                Please refer to the financial aid deadlines and instructions for Prospective Students.
              </p>
           </div>

        </div>

      </Container>
    </div>
  );
};