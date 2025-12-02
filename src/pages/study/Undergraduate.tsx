import { Container } from '../../components/common/Container';

export const Undergraduate = () => {
  const degrees = [
    "Bachelor of Arts (B.A.)",
    "Bachelor of Science (B.S.)",
    "Bachelor of Fine Arts (B.F.A.)",
    "Bachelor of Social Work (B.S.W.)",
    "Bachelor of Engineering (B. Eng.)",
    "Bachelor of Science in Public Affairs (B.S.P.A)",
    "Bachelor of Science in Nursing (B.S.N.)",
    "Bachelor of Philosophy (B. Phil.)",
    "Bachelor of Architecture Degree (B. Arch.)",
    "Master of Architecture degree (M. Arch.)"
  ];

  return (
    <div className="bg-neutral-50 min-h-screen py-12 font-sans">
      <Container>
        <div className="bg-white p-8 md:p-12 rounded-lg border border-neutral-200 shadow-sm">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-6">
            Undergraduate Study
          </h1>
          
          <div className="space-y-6 text-neutral-600 leading-relaxed">
            <p>
              In the United States of America undergraduate refers to those who are studying for a bachelor's degree. 
              The most common method consists of four years of study leading to a Bachelor of Arts (B.A.), 
              a Bachelor of Science (B.S.), or sometimes another bachelor's degree.
            </p>
            <p>
              Professional degrees such as law, medicine, pharmacy, and dentistry, are offered as graduate study 
              after earning at least three years of undergraduate schooling or after earning a bachelor's degree 
              depending on the program.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-bold text-primary-900 mb-4 border-b border-neutral-100 pb-2">
              Available Degrees
            </h2>
            <ul className="grid md:grid-cols-2 gap-3">
              {degrees.map((degree, index) => (
                <li key={index} className="flex items-center text-neutral-700 bg-neutral-50 px-4 py-2 rounded">
                  <span className="w-2 h-2 bg-secondary-600 rounded-full mr-3"></span>
                  {degree}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};