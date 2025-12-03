import { Container } from '../../components/common/Container';
import { Section, SectionTitle } from '../../components/common/Section';
import { SmartImage } from '../../components/common/SmartImage';
import { AlertTriangle, Mail, Laptop, CreditCard, ShieldAlert } from 'lucide-react';

// Görsel
import campusImg from '../../assets/images/campus-building.jpg';

export const NewStudents = () => {
  return (
    <div className="bg-neutral-50 min-h-screen font-sans">
      
      {/* Header */}
      <Section bg="navy" className="py-20">
        <SectionTitle align="center" subtitle="Welcome to UNW">Information for New Students</SectionTitle>
        <p className="text-center text-neutral-300 max-w-2xl mx-auto text-lg">
          Essential steps to complete your enrollment and start your journey at University of NorthWest.
        </p>
      </Section>

      <Container className="-mt-16 relative z-10 pb-24">
        
        {/* BEFORE YOU REGISTER */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-card border-t-4 border-secondary-500 mb-12">
          <div className="flex items-start">
            <div className="mr-6 hidden md:block">
              <ShieldAlert className="w-12 h-12 text-secondary-500" />
            </div>
            <div>
               <h2 className="text-2xl font-serif font-bold text-primary-900 mb-4">Before You Register</h2>
               <p className="text-neutral-600 mb-4 leading-relaxed">
                 New York State Public Health Law mandates strict immunization requirements for all incoming students.
               </p>
               <div className="bg-secondary-50 p-4 rounded-lg border border-secondary-100 flex items-start">
                 <AlertTriangle className="w-5 h-5 text-secondary-600 mr-3 shrink-0 mt-0.5" />
                 <p className="text-sm text-primary-900">
                   <strong>Mandatory Requirement:</strong> All students born after December 31, 1956, must be immunized against measles, mumps, and rubella (MMR) <u>before</u> registering for classes.
                 </p>
               </div>
            </div>
          </div>
        </div>

        {/* AFTER YOU REGISTER (GRID) */}
        <h3 className="text-2xl font-bold text-primary-900 mb-8 text-center">After You Register</h3>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          
          {/* Step 1: Email */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-6">
              <Mail className="w-6 h-6 text-primary-900" />
            </div>
            <h4 className="font-bold text-lg text-primary-900 mb-3">1. Activate Email</h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Your student email is the main way for UNW to communicate with you. We will send alerts about your bill and crucial transition info here.
            </p>
          </div>

          {/* Step 2: Portal */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-6">
              <Laptop className="w-6 h-6 text-primary-900" />
            </div>
            <h4 className="font-bold text-lg text-primary-900 mb-3">2. Activate Portal</h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Access your secure "E-vision" records. Register for courses, view financial aid, access BlackBoard, and manage your student profile.
            </p>
          </div>

          {/* Step 3: Bill */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-6">
              <CreditCard className="w-6 h-6 text-primary-900" />
            </div>
            <h4 className="font-bold text-lg text-primary-900 mb-3">3. Pay Your Bill</h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Your tuition due date is based on your registration date. You will receive an email alert when your bill is ready for review and payment.
            </p>
          </div>

        </div>

        {/* GÖRSEL BANNER */}
        <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
           <SmartImage 
             src={campusImg} 
             alt="University Campus" 
             className="h-full w-full"
             placeholderText="Welcome to Campus"
             aspectRatio="wide"
           />
           <div className="absolute inset-0 bg-primary-900/40 flex items-center justify-center">
             <h3 className="text-3xl font-serif font-bold text-white">Welcome to the Family!</h3>
           </div>
        </div>

      </Container>
    </div>
  );
};