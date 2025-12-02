import { Container } from '../components/common/Container';
import { facultyMembers } from '../data/faculty';
import { User, BookOpen } from 'lucide-react';

export const Faculty = () => {
  return (
    <div className="bg-neutral-50 min-h-screen py-16 font-sans">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-6">
            Eminent Faculty Members
          </h1>
          <p className="text-xl text-neutral-600 font-light">
            Our diverse and internationally acclaimed faculty brings a wealth of knowledge and experience 
            to University of NorthWest.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((member) => (
            <div key={member.id} className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-all flex items-start space-x-4">
              <div className="bg-primary-50 p-3 rounded-full">
                <User className="w-8 h-8 text-primary-900" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary-900">{member.name}</h3>
                <p className="text-secondary-600 font-medium text-sm">{member.title}</p>
                <div className="flex items-center mt-2 text-neutral-500 text-sm">
                  <BookOpen className="w-4 h-4 mr-1" />
                  <span>{member.department}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};