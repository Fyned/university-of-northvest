import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { CheckCircle, Clock, Globe } from 'lucide-react';

export const Admissions = () => {
  return (
    <div className="bg-neutral-50 min-h-screen py-16 font-sans">
      <Container>
        <div className="max-w-4xl mx-auto">
          
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-8 text-center">
            Admissions & Enrolment
          </h1>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 mb-12">
            <h2 className="text-2xl font-serif font-bold text-primary-900 mb-4">
              Flexible Online Education
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Technology is radically reconfiguring the landscape of higher education. At University of NorthWest, 
              we embrace this change by offering a flexible learning environment where physical campus presence 
              is optional. You can login from a distance, access world-class courseware, and complete your degree 
              at your own pace.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start space-x-3">
                <Clock className="w-6 h-6 text-secondary-600 mt-1" />
                <div>
                  <h3 className="font-bold text-primary-900">Work When You Want</h3>
                  <p className="text-sm text-neutral-500">Study without sacrificing your personal or professional commitments.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Globe className="w-6 h-6 text-secondary-600 mt-1" />
                <div>
                  <h3 className="font-bold text-primary-900">Study From Anywhere</h3>
                  <p className="text-sm text-neutral-500">Access your courses globally with our online learning platform.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary-900 text-white p-8 rounded-2xl shadow-lg relative overflow-hidden mb-12">
            <div className="relative z-10">
              <h2 className="text-2xl font-serif font-bold mb-4">Prior Learning Assessment</h2>
              <p className="text-neutral-300 leading-relaxed mb-6">
                We value your experience. Students who demonstrate prior experiential learning or professional 
                achievements may be entitled to course reductions toward their degree requirements.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-secondary-500" />
                  <span>Transfer credits from other institutions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-secondary-500" />
                  <span>Credit for professional work experience</span>
                </li>
              </ul>
              <Button variant="secondary">Check Eligibility</Button>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
};