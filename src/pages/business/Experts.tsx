import { Container } from '../../components/common/Container';
import { Section, SectionTitle } from '../../components/common/Section';
import { Card } from '../../components/common/Card';
import { SmartImage } from '../../components/common/SmartImage';
import { Button } from '../../components/common/Button';
import { Briefcase, FileText, Users, Microscope, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Görsel
import corporateImg from '../../assets/images/corporate-meeting.jpg';

export const Experts = () => {
  const expertiseTypes = [
    {
      title: "Consultancy",
      icon: Briefcase,
      desc: "A consultancy project addresses a business issue or challenge and involves specific problem-solving for the client organisation. It is usually carried out on a short timescale, the results are confidential and the client owns the Intellectual Property (IP)."
    },
    {
      title: "Contract Research",
      icon: FileText,
      desc: "Carried out to a specific client brief; for example, proof of concept, proof of market or market analysis. It may involve R&D, market research, laboratory testing, data analysis or field trips. The focus is to apply research to real world problems."
    },
    {
      title: "Collaborative Research",
      icon: Users,
      desc: "Brings two or more parties together in a research partnership, each bringing their own expertise. Collaborative research is a mid to long term commitment, often funded by Research Institutes, government or charities."
    },
    {
      title: "Testing and Validation",
      icon: Microscope,
      desc: "Our expert academics can conduct rapid prototyping, product development, model generation and computer simulations in specialist high-tech laboratories. We can also provide guidance on patent applications and IP Licensing."
    }
  ];

  return (
    <div className="bg-neutral-50 min-h-screen font-sans">
      
      {/* Header */}
      <Section bg="navy" className="py-20">
        <SectionTitle align="center" subtitle="Consultancy & Research">Access Our Experts</SectionTitle>
        <p className="text-center text-neutral-300 max-w-3xl mx-auto text-lg">
          University of Northwest has over 100 academic staff with a wealth of research expertise in business, education, science, technology, and arts.
        </p>
      </Section>

      <Container className="-mt-16 relative z-10 pb-24">
        
        {/* GİRİŞ BÖLÜMÜ */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-card border border-neutral-100 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
               <h2 className="text-2xl font-serif font-bold text-primary-900 mb-6">
                 World-Class Expertise for Your Business
               </h2>
               <p className="text-neutral-600 leading-relaxed mb-6">
                 Consultancy and research projects at University of Northwest provide access to the University’s best research, technologies and resources. 
                 Whether you need confidential problem-solving or long-term collaborative research, we have the right experts for you.
               </p>
               <Link to="/contact">
                 <Button>Contact for Consultation</Button>
               </Link>
            </div>
            <div className="relative h-64 md:h-auto min-h-[300px] rounded-lg overflow-hidden shadow-md">
               <SmartImage 
                 src={corporateImg} 
                 alt="Consultancy Meeting" 
                 className="h-full w-full"
                 placeholderText="Experts Meeting"
                 aspectRatio="video"
               />
            </div>
          </div>
        </div>

        {/* HİZMET TÜRLERİ (KARTLAR) */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {expertiseTypes.map((type, index) => (
            <Card 
              key={index} 
              title={type.title}
              className="h-full border-t-4 border-t-secondary-500"
            >
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center mr-4 shrink-0">
                  <type.icon className="w-5 h-5 text-primary-900" />
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {type.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* SPESİFİK FAKÜLTE HİZMETLERİ & CTA */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Sol: Liste */}
          <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-sm border border-neutral-100">
            <h3 className="text-xl font-bold text-primary-900 mb-6">Faculty Research & Consultancy Services</h3>
            <p className="text-neutral-600 mb-6 text-sm">
              Several of the faculties run their own research and consultancy services, including:
            </p>
            <ul className="space-y-4">
              {[
                "Music Therapy Clinic (Two fully equipped therapy rooms)",
                "Equine Reproductive Behaviour Consultancy (Faculty of Science and Technology)",
                "Engineering Simulation Analysis & Tribology Group (Thermodynamics, fluid dynamics)"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start p-3 bg-neutral-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-secondary-600 mr-3 shrink-0 mt-0.5" />
                  <span className="text-primary-900 font-medium text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sağ: Expert Help CTA */}
          <div className="bg-primary-900 text-white p-8 rounded-xl shadow-lg flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-500/20 rounded-bl-full -mr-8 -mt-8" />
            <h3 className="text-xl font-serif font-bold mb-4 relative z-10">Expert Help</h3>
            <p className="text-primary-200 text-sm leading-relaxed mb-6 relative z-10">
              Our business development managers will match your requirement with the right expertise and assist you in writing a research bid to secure funding.
            </p>
            <Link to="/contact" className="relative z-10">
              <Button variant="secondary" className="w-full">
                Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

        </div>

      </Container>
    </div>
  );
};