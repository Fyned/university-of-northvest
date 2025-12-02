import { Container } from '../components/common/Container';
import { CheckSquare, Server, Code, Users, ClipboardCheck } from 'lucide-react';

export const ValidationServices = () => {
  const services = [
    { title: "Interface Support", icon: CheckSquare, desc: "Comprehensive testing and validation of user interfaces." },
    { title: "Application Support", icon: Server, desc: "Ongoing maintenance and validation for enterprise applications." },
    { title: "Project Planning", icon: ClipboardCheck, desc: "Strategic validation roadmaps and project milestones." },
    { title: "Software Engineering", icon: Code, desc: "Rigorous code validation and quality assurance processes." },
    { title: "Personnel Support", icon: Users, desc: "Training and support for technical staff." }
  ];

  return (
    <div className="bg-neutral-50 min-h-screen py-16 font-sans">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-6">
              Validation Services
            </h1>
            <p className="text-xl text-neutral-600 font-light">
              Services from configuration to validation. We ensure your systems meet the highest standards of quality and compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-all flex items-start space-x-4">
                <div className="bg-secondary-50 p-3 rounded-lg">
                  <service.icon className="w-6 h-6 text-secondary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-900 mb-2">{service.title}</h3>
                  <p className="text-neutral-600 text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};