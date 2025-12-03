import { Container } from '../../components/common/Container';
import { Section, SectionTitle } from '../../components/common/Section';
import { SmartImage } from '../../components/common/SmartImage';
import { Card } from '../../components/common/Card';
import { Globe, BookOpen, CheckCircle, AlertCircle } from 'lucide-react';

// Görsel
import studyImg from '../../assets/images/student-life.jpg'; // Uygun görsel

export const EnglishRequirements = () => {
  return (
    <div className="bg-neutral-50 min-h-screen font-sans">
      
      {/* Header */}
      <Section bg="navy" className="py-20">
        <SectionTitle align="center" subtitle="International Admissions">English Language Requirements</SectionTitle>
        <p className="text-center text-neutral-300 max-w-2xl mx-auto text-lg">
          English language level for entry to university in USA. Requirements for international applicants.
        </p>
      </Section>

      <Container className="-mt-16 relative z-10 pb-24">
        
        {/* GİRİŞ */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-card border border-neutral-100 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
               <h2 className="text-2xl font-serif font-bold text-primary-900 mb-4">English Language Admission Tests</h2>
               <p className="text-neutral-600 leading-relaxed mb-6">
                 If you’ve completed all your secondary school/high school in a country where English is not the language of instruction, 
                 you can demonstrate proficiency by taking one of these exams and earning the required scores.
               </p>
               <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 flex items-start">
                 <AlertCircle className="w-5 h-5 text-blue-700 mr-3 flex-shrink-0 mt-0.5" />
                 <p className="text-sm text-blue-800">
                   Proficiency must be achieved before admission. UNW does not offer ESL courses for undergraduates.
                 </p>
               </div>
             </div>
             <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
               <SmartImage 
                 src={studyImg} 
                 alt="Language Study" 
                 className="h-full w-full"
                 placeholderText="International Students"
                 aspectRatio="video"
               />
             </div>
          </div>
        </div>

        {/* SKOR KARTLARI */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* TOEFL */}
          <Card 
            title="TOEFL" 
            subtitle="Test of English as a Foreign Language"
            className="border-t-4 border-t-secondary-500"
          >
            <div className="flex items-center mb-6">
               <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mr-4">
                 <Globe className="w-6 h-6 text-primary-900" />
               </div>
               <div>
                 <p className="font-bold text-3xl text-primary-900">80+</p>
                 <p className="text-xs text-neutral-500 uppercase tracking-wider">Internet-based Test</p>
               </div>
            </div>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-secondary-500 mr-2" />
                Accepted with an <strong>80 or better</strong> (Internet-based)
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-secondary-500 mr-2" />
                Accepted with a <strong>550 or better</strong> (Paper-based)
              </li>
            </ul>
          </Card>

          {/* IELTS */}
          <Card 
            title="IELTS" 
            subtitle="International English Language Testing System"
            className="border-t-4 border-t-primary-600"
          >
            <div className="flex items-center mb-6">
               <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mr-4">
                 <BookOpen className="w-6 h-6 text-primary-900" />
               </div>
               <div>
                 <p className="font-bold text-3xl text-primary-900">7.0+</p>
                 <p className="text-xs text-neutral-500 uppercase tracking-wider">Band Score</p>
               </div>
            </div>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-secondary-500 mr-2" />
                Accepted with a <strong>7 or better</strong> band score
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-secondary-500 mr-2" />
                Academic modules required
              </li>
            </ul>
          </Card>

        </div>

      </Container>
    </div>
  );
};