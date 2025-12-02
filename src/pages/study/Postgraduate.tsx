import { Container } from '../../components/common/Container';

export const Postgraduate = () => {
  return (
    <div className="bg-neutral-50 min-h-screen py-12 font-sans">
      <Container>
        <div className="bg-white p-8 md:p-12 rounded-lg border border-neutral-200 shadow-sm">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-6">
            Postgraduate Programmes
          </h1>
          
          <div className="prose max-w-none text-neutral-600 leading-relaxed">
            <p className="mb-6 text-lg">
              Postgraduate programmes offer the opportunity to undertake in-depth study in a particular area of interest.
            </p>
            
            <blockquote className="bg-blue-50 border-l-4 border-primary-900 p-4 my-6 italic text-primary-900">
              "Postgraduate study is also more challenging than undergraduate study; it requires commitment 
              and the demonstration of more advanced study skills."
            </blockquote>

            <p>
              Whether you are looking to advance your career, deepen your expertise, or pursue academic research, 
              our postgraduate degrees are structured to provide the rigorous foundation you need.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};