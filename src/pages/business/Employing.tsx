import { Container } from '../../components/common/Container';
import { Section, SectionTitle } from '../../components/common/Section';
import { Card } from '../../components/common/Card';
import { SmartImage } from '../../components/common/SmartImage';
import { Button } from '../../components/common/Button';
import { CheckCircle, Users, Briefcase, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Görsel
import gradImg from '../../assets/images/graduation.jpg'; // Uygun görsel

export const Employing = () => {
  const benefits = [
    "Introducing innovative new ideas into your business",
    "Expanding your workforce for a short-term project without long-term commitment",
    "Delivering highly motivated graduates eager to gain valuable experience",
    "Identifying potential new employees you can ‘test drive’ with minimum risk"
  ];

  return (
    <div className="bg-neutral-50 min-h-screen font-sans">
      
      {/* Header */}
      <Section bg="navy" className="py-20">
        <SectionTitle align="center" subtitle="Talent Acquisition">Employing Students & Graduates</SectionTitle>
        <p className="text-center text-neutral-300 max-w-3xl mx-auto text-lg">
          Internships and placements offer a cost-effective and low-risk way of boosting your efficiency, productivity, and profit.
        </p>
      </Section>

      <Container className="-mt-16 relative z-10 pb-24">
        
        {/* GİRİŞ & AVANTAJLAR */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-card border border-neutral-100 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary-900 mb-6">Internships, Placements & Recruitment</h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                University of Northwest offers employers a range of services to get the most from student and graduate resources. 
                Our aim is to help you grow by connecting you with the next generation of talent.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start text-neutral-700">
                    <CheckCircle className="w-5 h-5 text-secondary-500 mr-3 shrink-0 mt-0.5" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-64 md:h-auto min-h-[300px] rounded-lg overflow-hidden shadow-md">
              <SmartImage 
                src={gradImg} 
                alt="Graduates" 
                className="h-full w-full"
                placeholderText="Graduates at Work"
                aspectRatio="portrait"
              />
            </div>
          </div>
        </div>

        {/* PROGRAMLAR (KARTLAR) */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          
          {/* Internship Programme */}
          <Card 
            title="Internship Programme" 
            className="border-t-4 border-t-secondary-500"
            footer={
              <Link to="/contact" className="text-secondary-600 font-bold text-sm hover:text-secondary-700 flex items-center">
                Contact Internship Office <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            }
          >
            <div className="mb-4">
               <Users className="w-10 h-10 text-primary-900 bg-primary-50 p-2 rounded-lg" />
            </div>
            <p className="mb-4">
              Offers companies based in the East of England* the opportunity to work with a high calibre graduate or student for up to 12 weeks.
            </p>
            <p>
              The graduate is employed by University of Northwest but works full-time as an intern within your company. We handle all administration (contracts, remuneration).
            </p>
          </Card>

          {/* Knowledge Transfer Partnerships */}
          <Card 
            title="Knowledge Transfer (KTP)" 
            className="border-t-4 border-t-primary-600"
            footer={
              <Link to="/contact" className="text-primary-600 font-bold text-sm hover:text-primary-800 flex items-center">
                Talk to a KTP Manager <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            }
          >
            <div className="mb-4">
               <Award className="w-10 h-10 text-primary-900 bg-primary-50 p-2 rounded-lg" />
            </div>
            <p className="mb-4">
              A three-way partnership between your business, the University, and an excellent graduate. KTPs are supported by government grants of up to 67%.
            </p>
            <p>
              Companies participating report an average increase in annual profit of over £227k. We help you become more profitable and efficient.
            </p>
          </Card>

          {/* Employment Bureau */}
          <Card 
            title="Employment Bureau" 
            className="border-t-4 border-t-secondary-500"
            footer={
              <Link to="/contact" className="text-secondary-600 font-bold text-sm hover:text-secondary-700 flex items-center">
                Recruitment Services <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            }
          >
            <div className="mb-4">
               <Briefcase className="w-10 h-10 text-primary-900 bg-primary-50 p-2 rounded-lg" />
            </div>
            <p>
              The Employment Bureau can help with all your recruitment needs whether you are looking to fill a permanent role or need temporary cover to fill a short-term need.
            </p>
          </Card>

        </div>

        {/* EXPERT HELP & FOOTNOTE */}
        <div className="bg-primary-900 text-white p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h3 className="text-xl font-bold mb-2">Expert Help</h3>
            <p className="text-primary-200 mb-4">
              Get in touch and talk to us about how student and graduate placements can benefit your business.
            </p>
            <p className="text-xs text-primary-400 italic">
              * The East of England includes Bedfordshire, Cambridgeshire, Essex, Hertfordshire, Norfolk and Suffolk.
            </p>
          </div>
          <Link to="/contact">
            <Button variant="secondary" className="whitespace-nowrap">
              Get in Touch
            </Button>
          </Link>
        </div>

      </Container>
    </div>
  );
};