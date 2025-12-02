import { Container } from '../../components/common/Container';

export const Experts = () => (
  <div className="bg-neutral-50 min-h-screen py-12 font-sans">
    <Container>
      <div className="bg-white p-12 rounded-lg border border-neutral-200 shadow-sm">
        <h1 className="text-3xl font-serif font-bold text-primary-900 mb-6">Access Our Experts</h1>
        <p className="text-neutral-600 leading-relaxed mb-6">
          Our academic staff are leaders in their fields. By partnering with University of NorthWest, 
          your organization can gain access to cutting-edge research, consultancy, and expert opinion.
        </p>
        <p className="text-neutral-600 leading-relaxed">
          Whether you need technical validation, management consultancy, or specialized training, 
          our experts are ready to collaborate to drive innovation and growth in your business.
        </p>
      </div>
    </Container>
  </div>
);