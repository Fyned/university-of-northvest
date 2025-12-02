import { Container } from '../../components/common/Container';

export const ProfessionalCourses = () => {
  const stats = [
    { label: "International Student Success", value: 93 },
    { label: "Improve the Educational Process", value: 96 },
    { label: "Project Planning and Development", value: 90 },
    { label: "Personal Development", value: 85 },
  ];

  return (
    <div className="bg-neutral-50 min-h-screen py-12 font-sans">
      <Container>
        <div className="bg-white p-12 rounded-lg border border-neutral-200 shadow-sm mb-12">
          <h1 className="text-3xl font-serif font-bold text-primary-900 mb-6">Professional Courses</h1>
          <p className="text-neutral-600 leading-relaxed mb-8">
            We offer a comprehensive range of short courses designed for professional development. 
            These courses are tailored to meet the evolving needs of industries and individuals 
            seeking to enhance their skill sets.
          </p>

          <h2 className="text-xl font-bold text-primary-900 mb-6">Performance Indicators</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-neutral-50 rounded-xl border border-neutral-100">
                <div className="relative inline-flex items-center justify-center w-24 h-24 mb-4">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-neutral-200" />
                    <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray={251.2} strokeDashoffset={251.2 - (251.2 * stat.value) / 100} className="text-secondary-600" />
                  </svg>
                  <span className="absolute text-2xl font-bold text-primary-900">{stat.value}%</span>
                </div>
                <p className="text-sm font-medium text-neutral-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};