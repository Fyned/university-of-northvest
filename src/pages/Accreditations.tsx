import { Container } from '../components/common/Container';
import { ShieldCheck, CheckCircle } from 'lucide-react';

export const Accreditations = () => {
  const accreditations = [
    "Accreditation Governing Commission (AGC-USA)",
    "Commission for Consistent Learning (CCL-UK)",
    "American Library Association (ALA)",
    "International Accreditation Organization (IAO)",
    "American Council of United Nations University",
    "United Nations Association (UNA-USA)",
    "National Association of Distance Education & Open Learning in South Africa (NADEOSA)",
    "World Association of Persons with Disabilities (WAPD)",
    "International Council for Open and Distance Education (ICDE)"
  ];

  return (
    <div className="bg-neutral-50 min-h-screen py-16 font-sans">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-4 bg-green-100 rounded-full mb-6">
              <ShieldCheck className="w-10 h-10 text-green-700" />
            </div>
            <h1 className="text-4xl font-serif font-bold text-primary-900 mb-6">
              Accreditations & Memberships
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Accreditation is a voluntary, independent review of educational programs to determine 
              that the education provided is of uniform and sound quality. University of NorthWest 
              is proud to be recognized by and associated with leading international organizations.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-neutral-100 overflow-hidden">
            <div className="bg-primary-900 p-6 text-white">
              <h2 className="text-xl font-bold text-center">Recognized Bodies & Affiliations</h2>
            </div>
            <div className="p-8">
              <ul className="grid gap-4">
                {accreditations.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-neutral-50 transition-colors border-b border-neutral-100 last:border-0">
                    <CheckCircle className="w-6 h-6 text-secondary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-primary-900 font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-12 text-center">
             <p className="text-sm text-neutral-500">
               We continuously strive to maintain the highest standards of education and adhere to global quality assurance protocols.
             </p>
          </div>
        </div>
      </Container>
    </div>
  );
};