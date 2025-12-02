import { Container } from '../../components/common/Container';

// "export" kelimesi çok önemli, bu olmazsa App.tsx bu bileşeni göremez.
export const Phd = () => {
  const researchTopics = [
    "Qualty, Management and Policy", // Orijinal metindeki 'Qualty' korundu
    "Global Power",
    "Innovation",
    "Consultancy"
  ];

  return (
    <div className="bg-neutral-50 min-h-screen py-12 font-sans">
      <Container>
        <div className="bg-white p-8 md:p-12 rounded-lg border border-neutral-200 shadow-sm">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-6">
            Doctoral (Ph.D.) Research
          </h1>
          
          <div className="space-y-6 text-neutral-600 leading-relaxed mb-10">
            <p>
              The doctoral programme involves a cycle of coursework, comprehensive exams, and the dissertation process. 
              The completion of the dissertation signifies that the student is able to make significant independent 
              contributions to the field.
            </p>
          </div>

          <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-100">
            <h2 className="text-xl font-bold text-primary-900 mb-4">
              Key Research Areas
            </h2>
            <ul className="space-y-3">
              {researchTopics.map((topic, index) => (
                <li key={index} className="flex items-center text-neutral-700">
                  <span className="text-secondary-600 font-bold mr-3">•</span>
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};