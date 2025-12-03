import { Container } from '../../components/common/Container';
import { Section, SectionTitle } from '../../components/common/Section';
import { SmartImage } from '../../components/common/SmartImage';
import { CheckCircle, Calendar, FileText, Award } from 'lucide-react';

// Görsel
import gradImg from '../../assets/images/graduation.jpg';

export const PostgraduateAdmissions = () => {
  return (
    <div className="bg-neutral-50 min-h-screen font-sans">
      
      {/* Header */}
      <Section bg="navy" className="py-20">
        <SectionTitle align="center" subtitle="Take the Next Step">Postgraduate Admissions</SectionTitle>
        <p className="text-center text-neutral-300 max-w-2xl mx-auto text-lg">
          Detailed information on application requirements, deadlines, and procedures for our graduate programs.
        </p>
      </Section>

      <Container className="-mt-16 relative z-10 pb-24">
        
        {/* 1. DEADLINES & IMAGE */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-card border border-neutral-100 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
               <div className="flex items-center mb-6">
                 <Calendar className="w-8 h-8 text-secondary-600 mr-3" />
                 <h2 className="text-2xl font-serif font-bold text-primary-900">Application Deadlines</h2>
               </div>
               <ul className="space-y-4 text-neutral-600 leading-relaxed mb-6">
                 <li className="flex items-start">
                   <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                   Most UNW graduate programs do not have specific deadlines. We recommend submitting early.
                 </li>
                 <li className="flex items-start">
                   <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                   Registration begins several months before the start of a term.
                 </li>
                 <li className="flex items-start">
                   <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                   Please allow <strong>4-6 weeks</strong> for us to review your completed application.
                 </li>
               </ul>
               <p className="text-sm text-primary-800 bg-primary-50 p-4 rounded-lg border border-primary-100">
                 You will receive a letter from UNW informing you of your admission decision. We do not release decisions over the phone.
               </p>
             </div>
             <div className="relative h-full min-h-[300px] rounded-lg overflow-hidden shadow-md">
               <SmartImage 
                 src={gradImg} 
                 alt="Graduate Students" 
                 className="h-full w-full"
                 placeholderText="Postgraduate Students"
                 aspectRatio="portrait"
               />
             </div>
          </div>
        </div>

        {/* 2. OFFICIAL TRANSCRIPTS */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-neutral-100 mb-12">
          <h3 className="text-xl font-bold text-primary-900 mb-6 flex items-center">
            <FileText className="w-6 h-6 text-secondary-600 mr-3" />
            Official Transcripts
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-neutral-600 leading-relaxed">
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                Official transcripts are required from each school you have attended.
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                It is the applicant's responsibility to arrange for transcripts to be sent to UNW.
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                Transcripts must bear the institution’s raised insignia and be individually sealed.
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                If you studied under a maiden/prior name, indicate both names.
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                Do not request a transcript from University of Northwest if listed as a previous institution.
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                Including your U.S. Social Security number will expedite processing.
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                Applicants with non-U.S. degrees need not submit transcripts (International rules apply).
              </li>
            </ul>
          </div>
        </div>

        {/* 3. TEST SCORES TABLE */}
        <div className="bg-primary-900 text-white p-10 rounded-2xl shadow-lg relative overflow-hidden mb-12">
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
           <div className="relative z-10">
             <h3 className="text-2xl font-serif font-bold mb-6 flex items-center">
               <Award className="w-8 h-8 text-secondary-500 mr-3" />
               Standardized Test Scores
             </h3>
             <p className="text-primary-200 mb-8 max-w-3xl">
               The chart below provides important information regarding the GRE, GMAT, MAT, TOEFL and IELTS institutional codes for score reporting.
             </p>
             
             <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse">
                 <thead>
                   <tr className="border-b border-white/20">
                     <th className="py-4 px-6 text-secondary-400 font-bold uppercase tracking-wider text-sm">Test</th>
                     <th className="py-4 px-6 text-secondary-400 font-bold uppercase tracking-wider text-sm">Institutional Code</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-white/10 text-primary-100">
                   <tr>
                     <td className="py-4 px-6 font-medium">GRE / TOEFL / IELTS</td>
                     <td className="py-4 px-6 font-mono text-white">2520</td>
                   </tr>
                   <tr>
                     <td className="py-4 px-6 font-medium">Miller Analogy Test (MAT)</td>
                     <td className="py-4 px-6 font-mono text-white">1400</td>
                   </tr>
                   <tr>
                     <td className="py-4 px-6 font-medium">GMAT: Part time MBA</td>
                     <td className="py-4 px-6 font-mono text-white">1T2-NK-80</td>
                   </tr>
                   <tr>
                     <td className="py-4 px-6 font-medium">GMAT: Full time MBA</td>
                     <td className="py-4 px-6 font-mono text-white">1T2-NK-86</td>
                   </tr>
                 </tbody>
               </table>
             </div>
           </div>
        </div>

        {/* 4. ESSAYS & RECOMMENDATIONS */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100">
            <h4 className="font-bold text-primary-900 text-lg mb-4">Essays / Statements</h4>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Many of our programs require a written statement or an essay. The statement, in which you present your reasons for your proposed graduate studies, is an important component of the admission decision process. Applications will not be reviewed without it.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100">
            <h4 className="font-bold text-primary-900 text-lg mb-4">Letters of Recommendation</h4>
            <p className="text-neutral-600 text-sm leading-relaxed mb-4">
              Recommendations from professors in your undergraduate major field of study who are familiar with your academic work are ideal.
            </p>
            <p className="text-neutral-600 text-sm leading-relaxed">
              If you have been out of school for a considerable period, submit letters from employers or supervisors. Friends and family are not appropriate sources.
            </p>
          </div>
        </div>

      </Container>
    </div>
  );
};