import { Container } from '../components/common/Container';
import { Section, SectionTitle } from '../components/common/Section';
import { Card } from '../components/common/Card';
import { Globe, BookOpen, Briefcase, DollarSign, Accessibility, Heart, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const StudentSupport = () => {
  const services = [
    {
      title: "International Student Advice",
      icon: Globe,
      content: "This is your first stop for our international students who need support. Our team will be with you from before day one, providing assistance for pre-arrival, getting to our campuses, settling in and more."
    },
    {
      title: "Faculty Student Advice",
      icon: BookOpen,
      content: "Find out more about the support and advice available to you to help you make the most out of your programme. We’ll help you understand the study system and provide advice on how to study effectively."
    },
    {
      title: "Employability Service",
      icon: Briefcase,
      content: "Our graduate prospects are among the best in the country. From your first day, our focus is on improving your job prospects with careers advice, CV workshops, job opportunities and internships."
    },
    {
      title: "Student Money Advice",
      icon: DollarSign,
      content: "Understanding the cost of living and studying abroad can be tricky. Our support pages provide the information you need to manage your funds effectively."
    },
    {
      title: "Disability Support",
      icon: Accessibility,
      content: "We hold regular sessions to give information and support to students with disabilities. We’ll help you find the right solutions to enable you to reach your full potential on your course."
    },
    {
      title: "Health & Wellbeing",
      icon: Heart,
      content: "We want you to have a happy and successful time. We offer a free and fully confidential Counseling and Wellbeing Service covering anxieties, stress, and exam concerns."
    },
    {
      title: "Students’ Union",
      icon: Users,
      content: "You’ll become a part of this independent union as soon as you join. Vote in elections, get your voice heard through student councils, or take part in campaigns."
    }
  ];

  return (
    <div className="bg-neutral-50 min-h-screen font-sans">
      
      {/* Header */}
      <Section bg="navy" className="py-20">
        <SectionTitle align="center" subtitle="We Are Here For You">Student Support</SectionTitle>
        <p className="text-center text-neutral-300 max-w-2xl mx-auto text-lg">
          Our Student Services team was rated the best in the country. We provide advice and help for all aspects of your study life.
        </p>
      </Section>

      <Container className="-mt-16 relative z-10 pb-24">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <Card 
              key={idx} 
              title={service.title} 
              className="hover:-translate-y-2 transition-transform duration-300"
              footer={
                <Link to="/contact" className="text-secondary-600 font-bold text-sm hover:text-secondary-700 flex items-center">
                  Get Support <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              }
            >
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-900 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary-900 group-hover:text-white transition-colors" />
              </div>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {service.content}
              </p>
            </Card>
          ))}
        </div>

      </Container>
    </div>
  );
};