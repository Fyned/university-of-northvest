import { Container } from '../components/common/Container';
import { Section, SectionTitle } from '../components/common/Section';
import { Button } from '../components/common/Button';
import { CheckSquare, Server, Code, Users, ClipboardCheck, FileText, Send } from 'lucide-react';

export const ValidationServices = () => {
  const services = [
    { title: "Interface Support", icon: CheckSquare, desc: "Comprehensive testing and validation of user interfaces." },
    { title: "Application Support", icon: Server, desc: "Ongoing maintenance and validation for enterprise applications." },
    { title: "Project Planning", icon: ClipboardCheck, desc: "Strategic validation roadmaps and project milestones." },
    { title: "Software Engineering", icon: Code, desc: "Rigorous code validation and quality assurance processes." },
    { title: "Personnel Support", icon: Users, desc: "Training and support for technical staff." }
  ];

  return (
    <div className="bg-neutral-50 min-h-screen">
      
      {/* Header */}
      <Section bg="navy" className="py-20">
        <SectionTitle align="center" subtitle="Quality Assurance">Validation Services</SectionTitle>
        <p className="text-center text-neutral-300 max-w-2xl mx-auto text-lg">
          Services from configuration to validation. We ensure your systems meet the highest standards of quality and compliance.
        </p>
      </Section>

      <Container className="-mt-16 relative z-10 pb-24">
        
        {/* 1. HİZMET LİSTESİ (Mevcut İçerik) */}
        <div className="bg-white p-8 rounded-xl shadow-card border border-neutral-100 mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-neutral-50 transition-colors">
                <div className="bg-secondary-50 p-3 rounded-lg shrink-0">
                  <service.icon className="w-6 h-6 text-secondary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-900 mb-1">{service.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. SİPARİŞ FORMU (Yeni Eklenen HTML İçeriği) */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Sol Taraf: Bilgi */}
          <div className="md:col-span-1">
             <div className="bg-primary-900 text-white p-8 rounded-xl shadow-lg sticky top-24">
                <FileText className="w-10 h-10 text-secondary-500 mb-4" />
                <h3 className="text-2xl font-serif font-bold mb-4">Order Form</h3>
                <p className="text-primary-200 mb-6 leading-relaxed">
                  Fill out this application, and then send it with the required documents to initiate your validation service request.
                </p>
                <div className="border-t border-white/10 pt-6">
                  <p className="text-xs text-primary-300 uppercase tracking-wider font-bold mb-2">Need Help?</p>
                  <p className="text-lg font-bold">info@northwest.ac</p>
                </div>
             </div>
          </div>

          {/* Sağ Taraf: Form */}
          <div className="md:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-neutral-100">
              <h2 className="text-2xl font-bold text-primary-900 mb-8">Application Details</h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-700">Full Name (*)</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-700">Your Email (*)</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 outline-none transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-700">Full Shipping Address (*)</label>
                  <textarea rows={3} className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 outline-none transition-all"></textarea>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-700">Contact Phone Number (*)</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-700">Degree & Specialization (*)</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 outline-none transition-all" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-700">Date Issued (*)</label>
                    <input type="date" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-700">Total Credits Earned (*)</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 outline-none transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-700">Name of the Education Institution (*)</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 outline-none transition-all" />
                </div>

                <div className="pt-6">
                  <Button size="lg" className="w-full md:w-auto shadow-lg">
                    <Send className="w-4 h-4 mr-2" />
                    Send Application
                  </Button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
};