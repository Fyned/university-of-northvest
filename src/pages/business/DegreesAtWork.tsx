import { Container } from '../../components/common/Container';
import { Section, SectionTitle } from '../../components/common/Section';
import { SmartImage } from '../../components/common/SmartImage';
import { Button } from '../../components/common/Button';
import { Ear, PenTool, BookOpen, Quote, ArrowRight } from 'lucide-react'; // Trophy kaldırıldı
import { Link } from 'react-router-dom';

// Görsel
import corporateImg from '../../assets/images/corporate-meeting.jpg';

export const DegreesAtWork = () => {
  const processSteps = [
    {
      title: "Listen",
      icon: Ear,
      content: (
        <>
          <p className="mb-4">
            We realise ambitions together. Through Degrees at Work, we take a demand-led and practical approach to staff training and development.
          </p>
          <p>
            We listen to your requirements and work with you to create practical, business-focused courses. More than that, we listen to your people. 
            Our work-based learning involves actively using the workplace as a learning environment.
          </p>
        </>
      )
    },
    {
      title: "Create",
      icon: PenTool,
      content: (
        <>
          <p className="mb-4">
            From short courses to undergraduate and post-graduate degrees, we offer an extensive range of off-the-shelf options.
          </p>
          <p>
            But that’s not all. We are experts in forging collaborative partnerships. We can align your training with our existing qualifications 
            or start with a blank canvas to create a qualification that meets your unique requirements and budget.
          </p>
        </>
      )
    },
    {
      title: "Learn",
      icon: BookOpen,
      content: (
        <>
          <p className="mb-4">
            In your workplace, the need for learning never stops. Partner with University of Northwest and you’ll find the most comprehensive range of courses available.
          </p>
          <p>
            Areas include Management, Leadership, Sales, Operations, Project Management, and more. We can also design work-based learning courses 
            that specifically meet the needs of your organisation.
          </p>
        </>
      )
    }
  ];

  const testimonials = [
    {
      author: "Arkin Salih",
      role: "Learning and Development Manager, Harrods",
      text: "The key thing I would credit University of Northwest with is their openness and their willingness to be innovative and think of new ideas."
    },
    {
      author: "Colin Wilson",
      role: "Training & Development Manager, Peterborough City Council",
      text: "Our staff are now much better equipped to deal with the challenges and opportunities of working in the public sector thanks to these courses."
    },
    {
      author: "RAF Flt Lieutenant Ric Stubley",
      role: "HQ 22 (Training) Group",
      text: "The opportunities now available to RAF Medic personnel provide an excellent path for them to achieve high-value Higher Education qualifications."
    },
    {
      author: "Sarah Packman",
      role: "Group Learning and Development Manager, Willmott Dixon",
      text: "University of Northwest prevailed by providing the right blend of reputation, professionalism and business awareness that Willmott Dixon needed."
    }
  ];

  return (
    <div className="bg-neutral-50 min-h-screen font-sans">
      
      {/* Header */}
      <Section bg="navy" className="py-20">
        <SectionTitle align="center" subtitle="Work-Based Learning">Degrees at Work</SectionTitle>
        <p className="text-center text-neutral-300 max-w-3xl mx-auto text-lg">
          Award winning work-based learning. We take a demand-led and practical approach to staff training and development.
        </p>
      </Section>

      <Container className="-mt-16 relative z-10 pb-24">
        
        {/* HERO IMAGE & INTRO */}
        <div className="bg-white rounded-xl shadow-card border border-neutral-100 overflow-hidden mb-16">
           <div className="relative h-64 md:h-80">
             <SmartImage 
               src={corporateImg} 
               alt="Corporate Training" 
               className="h-full w-full"
               placeholderText="Training Session"
               aspectRatio="wide"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
               <h2 className="text-3xl font-serif font-bold text-white">
                 Realise Ambitions Together
               </h2>
             </div>
           </div>
        </div>

        {/* PROCESS (Listen, Create, Learn) */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {processSteps.map((step, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-secondary-500 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-6">
                <step.icon className="w-6 h-6 text-primary-900" />
              </div>
              <h3 className="text-2xl font-bold text-primary-900 mb-4">{step.title}</h3>
              <div className="text-neutral-600 text-sm leading-relaxed">
                {step.content}
              </div>
            </div>
          ))}
        </div>

        {/* ACHIEVE (Testimonials) */}
        <SectionTitle subtitle="Achieve Results">Success Stories</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 relative">
              <Quote className="w-8 h-8 text-secondary-200 absolute top-6 right-6" />
              <p className="text-neutral-700 italic mb-6 relative z-10 leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-bold text-primary-900">{t.author}</p>
                <p className="text-xs text-secondary-600 font-bold uppercase tracking-wider">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA (You) */}
        <div className="bg-primary-900 text-white p-10 rounded-2xl shadow-lg text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-4">How can Degrees at Work benefit you?</h2>
            <p className="text-primary-200 mb-8 text-lg">
              We’ve talked enough about us. Get in touch and talk to us today to find out how we can help your organisation.
            </p>
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="shadow-xl">
                Contact Us Today <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>

      </Container>
    </div>
  );
};