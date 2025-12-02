import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="bg-neutral-50 min-h-screen py-16 font-sans">
      <Container>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-neutral-600 font-light">
            We are here to answer your questions and guide you on your academic journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* İletişim Formu */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100">
            <h2 className="text-2xl font-serif font-bold text-primary-900 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 outline-none transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 outline-none transition-all"></textarea>
              </div>
              <Button type="button" className="w-full">Send Message</Button>
            </form>
          </div>

          {/* İletişim Bilgileri */}
          <div className="space-y-8">
            <div className="bg-primary-900 text-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-secondary-500 mt-1" />
                  <div>
                    <p className="text-neutral-400 text-sm">Toll Free (USA/Canada)</p>
                    <p className="font-bold text-lg">1-800-UNW-8960</p>
                    <p className="font-bold text-lg">1-800-869-8960</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-secondary-500 mt-1" />
                  <div>
                    <p className="text-neutral-400 text-sm">International</p>
                    <p className="font-bold text-lg">+1-718-250-4645</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-secondary-500 mt-1" />
                  <div>
                    <p className="text-neutral-400 text-sm">General Inquiries</p>
                    <p className="font-bold text-lg">info@northwest.ac</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-secondary-500 mt-1" />
                  <div>
                    <p className="text-neutral-400 text-sm">Mailing Address</p>
                    <p className="font-medium">45 Main Street, Ste 309, #264</p>
                    <p className="font-medium">Brooklyn, NY 11201, USA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-neutral-100 shadow-sm flex items-center space-x-4">
              <Clock className="w-10 h-10 text-primary-900" />
              <div>
                <h4 className="font-bold text-primary-900">Office Hours</h4>
                <p className="text-neutral-600">Monday - Friday: 9:00 AM - 5:00 PM (EST)</p>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
};