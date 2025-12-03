import { Container } from '../components/common/Container';
import { Section, SectionTitle } from '../components/common/Section';
import { SmartImage } from '../components/common/SmartImage';
import { Button } from '../components/common/Button';
import { CreditCard, Calendar, Globe, DollarSign, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

// Görsel
import financeImg from '../assets/images/corporate-meeting.jpg'; // Uygun görsel

export const Tuition = () => {
  return (
    <div className="bg-neutral-50 min-h-screen font-sans">
      
      {/* Header */}
      <Section bg="navy" className="py-20">
        <SectionTitle align="center" subtitle="Financial Services">Fee Payments</SectionTitle>
        <p className="text-center text-neutral-300 max-w-2xl mx-auto text-lg">
          Flexible payment options to support your education.
        </p>
      </Section>

      <Container className="-mt-16 relative z-10 pb-24">
        
        {/* GİRİŞ & GÖRSEL */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-card border border-neutral-100 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
               <h2 className="text-2xl font-serif font-bold text-primary-900 mb-4">Managing Your Fees</h2>
               <p className="text-neutral-600 leading-relaxed mb-6">
                 We understand that managing finances is a crucial part of your university experience. We offer various methods for fee payment, including student loans, instalments, and direct payments.
               </p>
               <div className="flex items-center space-x-2 text-sm font-bold text-secondary-600">
                 <ShieldCheck className="w-5 h-5" />
                 <span>Secure & Flexible Payment Gateway</span>
               </div>
             </div>
             <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
               <SmartImage 
                 src={financeImg} 
                 alt="Financial Planning" 
                 className="h-full w-full"
                 placeholderText="Finance & Payments"
                 aspectRatio="video"
               />
             </div>
          </div>
        </div>

        {/* ÖDEME SEÇENEKLERİ (US STUDENTS) */}
        <SectionTitle align="left" subtitle="Domestic">US Students</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          
          {/* Student Loan */}
          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-primary-600 hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-6">
              <DollarSign className="w-6 h-6 text-primary-900" />
            </div>
            <h3 className="text-lg font-bold text-primary-900 mb-3">Student Loans</h3>
            <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
              Full-time US undergraduate students can defer tuition fee payments by taking out a Student Loan for Tuition fees.
            </p>
            <Link to="/contact" className="text-primary-600 font-bold text-xs hover:underline">Learn about Financial Aid &rarr;</Link>
          </div>

          {/* Instalments */}
          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-secondary-500 hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-6">
              <Calendar className="w-6 h-6 text-primary-900" />
            </div>
            <h3 className="text-lg font-bold text-primary-900 mb-3">Pay by Instalments</h3>
            <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
              If you choose not to defer, you can pay your fees in instalments. You have the option to pay in <strong>three or six instalments</strong>.
            </p>
          </div>

          {/* Card Payment */}
          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-primary-600 hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-6">
              <CreditCard className="w-6 h-6 text-primary-900" />
            </div>
            <h3 className="text-lg font-bold text-primary-900 mb-3">Recurring Card Payment</h3>
            <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
              Set up a recurring card payment with your credit or debit card for hassle-free instalment payments.
            </p>
          </div>

        </div>

        {/* INTERNATIONAL STUDENTS */}
        <div className="bg-primary-900 text-white p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between">
           <div className="flex items-center mb-6 md:mb-0">
             <Globe className="w-12 h-12 text-secondary-500 mr-6" />
             <div>
               <h3 className="text-2xl font-serif font-bold mb-2">International Students</h3>
               <p className="text-primary-200 text-sm max-w-md">
                 Please visit our International Students section for detailed information about paying your fees, deposit requirements, and transfer methods.
               </p>
             </div>
           </div>
           <Link to="/international/support">
             <Button variant="secondary" className="whitespace-nowrap">
               International Fees Info <ArrowRight className="ml-2 w-4 h-4" />
             </Button>
           </Link>
        </div>

      </Container>
    </div>
  );
};