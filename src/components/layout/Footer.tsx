import { Container } from '../common/Container';

export const Footer = () => {
  return (
    <footer className="bg-neutral-100 border-t border-neutral-200 mt-auto">
      <Container className="py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* İletişim Bloğu */}
          <div>
            <h3 className="text-primary-900 font-bold uppercase tracking-wider mb-4">Contact US</h3>
            <address className="not-italic text-neutral-600 space-y-2 text-sm">
              <p>45 Main Street, Ste 309, #264</p>
              <p>Brooklyn, NY 11201</p>
              <p>
                <a href="mailto:info@northwest.ac" className="hover:text-primary-900 underline">
                  info@northwest.ac
                </a>
              </p>
            </address>
            <div className="mt-4">
              <a 
                href="https://maps.google.com/?q=45+Main+Street,+Brooklyn,+NY+11201" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary-600 hover:text-primary-900 text-sm font-medium underline"
              >
                Find us on the map
              </a>
            </div>
          </div>

          {/* Telif Hakkı (Statik 2022) */}
          <div className="md:text-right flex flex-col justify-end">
            <p className="text-sm text-neutral-500">
              © 2022, Northwest University.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};