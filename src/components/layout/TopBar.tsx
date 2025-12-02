import { Container } from '../common/Container';
import { Phone, Mail, GraduationCap, Globe } from 'lucide-react';

export const TopBar = () => {
  return (
    <div className="bg-primary-900 text-white py-2 text-sm border-b border-primary-800 hidden md:block">
      <Container>
        <div className="flex justify-between items-center">
          {/* İletişim */}
          <div className="flex items-center space-x-6 text-neutral-300">
            <a href="tel:18008698960" className="flex items-center hover:text-white transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              <span>1-800-UNW-8960</span>
            </a>
            <a href="mailto:info@northwest.ac" className="flex items-center hover:text-white transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              <span>info@northwest.ac</span>
            </a>
          </div>

          {/* Hızlı Linkler (Student Portal Çıkarıldı) */}
          <div className="flex items-center space-x-6">
            <a href="#" className="flex items-center hover:text-secondary-500 transition-colors">
              <Globe className="w-4 h-4 mr-2" />
              <span>Alumni</span>
            </a>
            <a href="#" className="flex items-center hover:text-secondary-500 transition-colors">
              <GraduationCap className="w-4 h-4 mr-2" />
              <span>Library Resources</span>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};