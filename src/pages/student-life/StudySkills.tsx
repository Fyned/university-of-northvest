import { Container } from '../../components/common/Container';
import { Section, SectionTitle } from '../../components/common/Section';
import { SmartImage } from '../../components/common/SmartImage';
import { BookOpen, PenTool, Calculator, Users, Clock, Search, CheckCircle, Calendar } from 'lucide-react';
import { Button } from '../../components/common/Button';

// Görsel
import skillsImg from '../../assets/images/student-life.jpg'; 

export const StudySkills = () => {
  const skills = [
    { title: "Research & Referencing", icon: Search },
    { title: "Academic Writing", icon: PenTool },
    { title: "Organisational Skills", icon: Clock },
    { title: "Numeracy & Maths", icon: Calculator },
    { title: "Academic English", icon: BookOpen },
    { title: "Study Groups", icon: Users },
  ];

  const services = [
    { 
      title: "Workshops", 
      desc: "Group sessions designed to enhance your competence in specific areas.",
      icon: Users
    },
    { 
      title: "Drop-ins", 
      desc: "Call in for quick advice and guidance about Study Skills Plus.",
      icon: Clock
    },
    { 
      title: "Appointments", 
      desc: "Bookable sessions for individuals or small groups for in-depth help.",
      icon: Calendar
    },
    { 
      title: "Online Resources", 
      desc: "Self-help guides and tutorials accessible any time you need them.",
      icon: Search
    }
  ];

  return (
    <div className="bg-neutral-50 min-h-screen font-sans">
      
      {/* Header */}
      <Section bg="navy" className="py-20">
        <SectionTitle align="center" subtitle="Academic Success">Study Skills Plus</SectionTitle>
        <p className="text-center text-neutral-300 max-w-2xl mx-auto text-lg">
          Get the most out of your academic study with expert advice and guidance.
        </p>
      </Section>

      <Container className="-mt-16 relative z-10 pb-24">
        
        {/* GİRİŞ & GÖRSEL */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-card border border-neutral-100 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="relative h-64 md:h-auto min-h-[300px] rounded-lg overflow-hidden shadow-md order-2 md:order-1">
               <SmartImage 
                 src={skillsImg} 
                 alt="Studying" 
                 className="h-full w-full"
                 placeholderText="Effective Study"
                 aspectRatio="video"
               />
             </div>
             <div className="order-1 md:order-2">
               <h2 className="text-2xl font-serif font-bold text-primary-900 mb-4">We’re Here for All Students</h2>
               <p className="text-neutral-600 leading-relaxed mb-6">
                 Whether you need help with researching, writing, referencing, or maths, Study Skills Plus is here for you. 
                 Time management is another crucial skill, so there’s a dedicated session on how to use your time wisely.
               </p>
               <div className="grid grid-cols-2 gap-3">
                 {skills.map((skill, idx) => (
                   <div key={idx} className="flex items-center text-sm text-primary-800 font-medium">
                     <CheckCircle className="w-4 h-4 text-secondary-500 mr-2" />
                     {skill.title}
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </div>

        {/* HİZMETLER (GRID) */}
        <SectionTitle align="center" subtitle="Our Services">Enhance Your Success</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((srv, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-secondary-500 hover:-translate-y-1 transition-transform text-center">
              <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <srv.icon className="w-6 h-6 text-primary-900" />
              </div>
              <h3 className="font-bold text-primary-900 mb-2">{srv.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {srv.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="shadow-xl">
            Access Study Skills Plus Portal
          </Button>
        </div>

      </Container>
    </div>
  );
};