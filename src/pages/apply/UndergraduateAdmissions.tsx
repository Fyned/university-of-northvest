import { Container } from '../../components/common/Container';
import { Section, SectionTitle } from '../../components/common/Section';
import { SmartImage } from '../../components/common/SmartImage';
import { CheckCircle, AlertCircle, Globe, HelpCircle } from 'lucide-react'; // BookOpen silindi

// Görsel
import admissionImg from '../../assets/images/student-life.jpg'; 

export const UndergraduateAdmissions = () => {
  return (
    <div className="bg-neutral-50 min-h-screen font-sans">
      
      {/* Header */}
      <Section bg="navy" className="py-20">
        <SectionTitle align="center" subtitle="Join Our Community">Undergraduate Admissions</SectionTitle>
        <p className="text-center text-neutral-300 max-w-2xl mx-auto text-lg">
          UNW encourages applications from all individuals who have the capacity and determination to complete a degree program.
        </p>
      </Section>

      <Container className="-mt-16 relative z-10 pb-24">
        
        {/* GİRİŞ */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-card border border-neutral-100 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
               <h2 className="text-2xl font-serif font-bold text-primary-900 mb-4">Application for Admission</h2>
               <div className="space-y-4 text-neutral-600 leading-relaxed">
                 <p>
                   We appreciate the opportunity to review your application to determine whether UNW is a good fit for you and, if it is, help you through the enrollment process.
                 </p>
                 <p>
                   Submitting your application begins the official part of the UNW enrollment process. We will review your application and contact you within two business days to discuss your status.
                 </p>
               </div>
             </div>
             <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
               <SmartImage 
                 src={admissionImg} 
                 alt="Students Applying" 
                 className="h-full w-full"
                 placeholderText="Students Studying"
                 aspectRatio="video"
               />
             </div>
          </div>
        </div>

        {/* FRESHMAN DETAILS */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          
          {/* Sol: Kimdir? & Gereksinimler */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Who is a Freshman? */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100">
              <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center">
                <HelpCircle className="w-6 h-6 text-secondary-500 mr-3" />
                Who is a Freshman Applicant?
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Most students enter University Northwest as freshmen (first-year students) after graduating from high school. 
                If you have not attended another accredited college or university, you should apply as a freshman. 
                (Note: This does not apply to high school students who have taken courses at a college or university as part of their high school coursework.)
              </p>
            </div>

            {/* Requirements */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100">
              <h3 className="text-xl font-bold text-primary-900 mb-6">Freshman Application Requirements</h3>
              <ul className="space-y-3 mb-6">
                {[
                  "A completed application.",
                  "A $65 non-refundable application fee.",
                  "A completed Admissions Essay.",
                  "An official high school transcript (to be sent by your guidance counselor).",
                  "A letter of recommendation from your guidance counselor.",
                  "Official SAT or ACT scores are optional."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-neutral-600 text-sm">
                    <CheckCircle className="w-5 h-5 text-secondary-500 mr-3 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 text-sm text-blue-800">
                <p className="flex items-start mb-2">
                  <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                  <strong>Arts Programs Note:</strong>
                </p>
                <p className="ml-7">
                  If applying for Fine Arts, Music, Theatre, Dance, Communication Studies or Broadcasting, you are required to complete an interview, audition or portfolio review. 
                  (Fashion Studies or Art History do not require this).
                </p>
              </div>
            </div>

          </div>

          {/* Sağ: Standartlar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 h-full">
              <h3 className="text-xl font-bold text-primary-900 mb-6">Admission Standards</h3>
              <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                University Of Northwest considers academic performance (GPA, rigor) as the most important factor. We also review letters of recommendation, essay, and extra-curricular engagement.
              </p>
              
              <div className="mb-6">
                <h4 className="font-bold text-primary-800 text-sm mb-3 border-b border-neutral-100 pb-2">Required Coursework (16 Units)</h4>
                <ul className="space-y-2 text-xs text-neutral-600">
                  <li>• 4 units of English</li>
                  <li>• 3 units of Mathematics (Algebra I & II, Geometry)</li>
                  <li>• 2 units of the same foreign language</li>
                  <li>• 2 units of a laboratory science</li>
                  <li>• 2 units of social sciences</li>
                  <li>• 3 additional units</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-primary-800 text-sm mb-3 border-b border-neutral-100 pb-2">Challenging Curriculum</h4>
                <p className="text-xs text-neutral-500 mb-2">Recognized beyond minimum requirements:</p>
                <ul className="space-y-2 text-xs text-neutral-600">
                  <li>• Math beyond Algebra II</li>
                  <li>• Lab science beyond Chemistry</li>
                  <li>• 3rd/4th year foreign language</li>
                  <li>• AP & Honors courses</li>
                </ul>
              </div>
              
              <div className="mt-6 pt-6 border-t border-neutral-100">
                 <p className="text-sm font-bold text-primary-900">Target GPA: 3.2 or higher</p>
                 <p className="text-xs text-neutral-500">on an un-weighted 4.0 scale</p>
              </div>
            </div>
          </div>

        </div>

        {/* INTERNATIONAL ADMISSION */}
        <div className="bg-primary-900 text-white p-10 rounded-2xl shadow-lg relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />
           
           <div className="relative z-10">
             <div className="flex items-center mb-8">
               <Globe className="w-8 h-8 text-secondary-500 mr-4" />
               <h2 className="text-2xl font-serif font-bold">International Student Admission</h2>
             </div>
             
             <div className="grid md:grid-cols-2 gap-12">
               <div>
                 <h4 className="font-bold text-secondary-400 mb-4 uppercase tracking-wider text-sm">Requirements</h4>
                 <ul className="space-y-4 text-primary-100 text-sm">
                   <li className="flex items-start">
                     <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                     A completed application (International type).
                   </li>
                   <li className="flex items-start">
                     <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                     A $65 non-refundable application fee.
                   </li>
                   <li className="flex items-start">
                     <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                     Academic evaluation and English translation of all coursework (High school equivalent for freshmen).
                   </li>
                 </ul>
               </div>

               <div>
                 <h4 className="font-bold text-secondary-400 mb-4 uppercase tracking-wider text-sm">Language Competency</h4>
                 <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/10">
                   <p className="mb-2 font-bold text-white">TOEFL Score Requirements:</p>
                   <ul className="list-none space-y-1 text-primary-200 text-sm mb-4">
                     <li>• 80 (Internet-based)</li>
                     <li>• 213 (Computer-based)</li>
                     <li>• 550 (Paper-based)</li>
                   </ul>
                   <p className="text-sm text-white">
                     <strong>IELTS:</strong> A score of 6.5 or better is also acceptable.
                   </p>
                   <p className="text-xs text-primary-300 mt-2 italic">
                     *Waived if native English speaker or completed college English Comp with 'C' or better.
                   </p>
                 </div>
               </div>
             </div>
           </div>
        </div>

      </Container>
    </div>
  );
};