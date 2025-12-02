import { Container } from '../components/common/Container';
import { useLocation } from 'react-router-dom';

export const GenericContent = () => {
  const location = useLocation();
  
  // URL'den başlığı türetme (örn: /research/support -> Research Support)
  const getTitle = () => {
    const parts = location.pathname.split('/');
    const lastPart = parts[parts.length - 1];
    return lastPart.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const title = getTitle();

  return (
    <div className="bg-neutral-50 min-h-screen py-16 font-sans">
      <Container>
        <div className="bg-white p-12 rounded-2xl border border-neutral-200 shadow-sm">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-6">
            {title}
          </h1>
          <div className="prose max-w-none text-neutral-600">
            <p className="text-lg leading-relaxed mb-6">
              Information regarding <strong>{title}</strong> is available through our administrative offices.
            </p>
            <p className="leading-relaxed">
              At University of NorthWest, we are dedicated to providing detailed guidance and support in this area. 
              Please contact our relevant department or visit the main campus office for specific documentation and procedures.
            </p>
            
            {/* Özel İçerik Blokları (URL'e göre) */}
            {location.pathname.includes('research') && (
              <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
                <h3 className="font-bold text-primary-900 mb-2">Research Excellence</h3>
                <p className="text-sm">Our university is committed to groundbreaking research across various disciplines.</p>
              </div>
            )}

            {location.pathname.includes('international') && (
              <div className="mt-8 p-6 bg-secondary-50 rounded-lg border border-secondary-100">
                <h3 className="font-bold text-primary-900 mb-2">International Office</h3>
                <p className="text-sm">For visa and immigration inquiries, please contact: international@northwest.ac</p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};