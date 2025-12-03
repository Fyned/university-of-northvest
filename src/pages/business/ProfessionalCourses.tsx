import { Container } from '../../components/common/Container';
import { Section, SectionTitle } from '../../components/common/Section';
import { CircularProgress } from '../../components/common/CircularProgress';
import { SmartImage } from '../../components/common/SmartImage';
import { Button } from '../../components/common/Button';
import { CheckCircle, Settings, BookOpen, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Görsel
import trainingImg from '../../assets/images/corporate-meeting.jpg'; // Uygun görsel

export const ProfessionalCourses = () => {
  const stats = [
    { label: "International Student Success", value: 93 },
    { label: "Improve the Educational Process", value: 96 },
    { label: "Project Planning and Development", value: 90 },
    { label: "Personal Development", value: 85 },
  ];

  const degrees = [
    "Management",
    "Management of Social and Affordable Housing",
    "Charity and Social Enterprise Management",
    "MA Leadership",
    "MBA Global Leadership"
  ];

  return (
    <div className="bg-neutral-50 min-h-screen font-sans">
      
      {/* Header */}
      <Section bg="navy" className="py-20">
        <SectionTitle align="center" subtitle="Continuous Learning">Professional Courses</SectionTitle>
        <p className="text-center text-neutral-300 max-w-3xl mx-auto text-lg">
          Staff training and development. We apply robust academic principles that deliver genuine business solutions.
        </p>
      </Section>

      <Container className="-mt-16 relative z-10 pb-24">
        
        {/* GİRİŞ & GÖRSEL */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-card border border-neutral-100 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1">
               <h2 className="text-2xl font-serif font-bold text-primary-900 mb-6">Staff Training & Development</h2>
               <p className="text-neutral-600 leading-relaxed mb-6">
                 As providers of degree level, work-based education, we develop and deliver courses that meet demanding business requirements. 
                 Many big brands have chosen our work-based training programmes to develop their employees’ skills and improve business performance.
               </p>
               <p className="text-neutral-600 leading-relaxed">
                 Our approach gives organisations the opportunity to update the skills of their workforce without staff spending time away. 
                 Employees continue to add value while they are training.
               </p>
             </div>
             <div className="relative h-full min-h-[300px] order-1 md:order-2 rounded-lg overflow-hidden shadow-md">
               <SmartImage 
                 src={trainingImg} 
                 alt="Professional Training" 
                 className="h-full w-full"
                 placeholderText="Staff Training"
                 aspectRatio="portrait"
               />
             </div>
          </div>
        </div>

        {/* 3 ANA ALAN (Tailored, Contextualised, In-House) */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          
          {/* Tailored Training */}
          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-secondary-500 hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-6">
              <Settings className="w-6 h-6 text-primary-900" />
            </div>
            <h3 className="text-xl font-bold text-primary-900 mb-4">Tailored Training</h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              We work with you to design course content that meets your precise requirements and fits with your culture. 
              Whether for operational improvements or strategic goals, we create courses that equip your people with the right skills.
            </p>
          </div>

          {/* Contextualised Degrees */}
          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-primary-600 hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6 text-primary-900" />
            </div>
            <h3 className="text-xl font-bold text-primary-900 mb-4">Contextualised Degrees</h3>
            <p className="text-neutral-600 text-sm leading-relaxed mb-4">
              Our existing portfolio of work-based management degrees can be shaped to the needs of your organisation.
            </p>
            <ul className="space-y-2">
              {degrees.map((degree, idx) => (
                <li key={idx} className="flex items-start text-xs font-medium text-primary-800">
                  <CheckCircle className="w-3 h-3 text-secondary-500 mr-2 mt-0.5" />
                  {degree}
                </li>
              ))}
            </ul>
          </div>

          {/* In-House Training */}
          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-secondary-500 hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-6">
              <Briefcase className="w-6 h-6 text-primary-900" />
            </div>
            <h3 className="text-xl font-bold text-primary-900 mb-4">In-House Training</h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              If your company has its own staff training programme, we can enrich it to lead to formal academic recognition. 
              We evaluate and quantify learning wherever it occurs, giving credit for your employees' experience.
            </p>
          </div>

        </div>

        {/* İNDİKATÖRLER (Mevcut Grafikler) */}
        <div className="bg-white p-10 rounded-2xl shadow-lg border border-neutral-100 text-center mb-12">
          <h3 className="text-xl font-bold text-primary-900 mb-10 font-serif">Impact & Performance Indicators</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
            {stats.map((stat, index) => (
              <CircularProgress 
                key={index}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-neutral-500 mb-4">Ready to upskill your workforce?</p>
          <Link to="/contact">
            <Button size="lg" className="shadow-xl">
              Contact for a Free Meeting <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>

      </Container>
    </div>
  );
};