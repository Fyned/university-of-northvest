import { Container } from '../../components/common/Container';

export const Employing = () => (
  <div className="bg-neutral-50 min-h-screen py-12 font-sans">
    <Container>
      <div className="bg-white p-12 rounded-lg border border-neutral-200 shadow-sm">
        <h1 className="text-3xl font-serif font-bold text-primary-900 mb-6">Employing Students & Graduates</h1>
        <p className="text-neutral-600 leading-relaxed mb-6">
          Our graduates are equipped with the skills, knowledge, and adaptability required in the modern workforce. 
          We offer various ways for employers to connect with our talent pool, including internships, 
          placements, and direct recruitment.
        </p>
        <div className="bg-primary-50 p-6 rounded-lg border border-primary-100">
          <h3 className="font-bold text-primary-900 mb-2">Why Hire UNW Graduates?</h3>
          <ul className="list-disc list-inside text-neutral-700 space-y-2">
            <li>Global perspective and diverse cultural awareness</li>
            <li>Strong foundation in both theory and practical application</li>
            <li>Proficiency in modern technologies and methodologies</li>
          </ul>
        </div>
      </div>
    </Container>
  </div>
);