import { Container } from '../../components/common/Container';
import { Section, SectionTitle } from '../../components/common/Section';
import { SmartImage } from '../../components/common/SmartImage';
import { Compass, Users, Calendar, Map, CheckCircle } from 'lucide-react';

// Görsel
import orientationImg from '../../assets/images/student-life.jpg'; // Uygun görsel

export const Orientation = () => {
  return (
    <div className="bg-neutral-50 min-h-screen font-sans">
      
      {/* Header */}
      <Section bg="navy" className="py-20">
        <SectionTitle align="center" subtitle="Welcome to Campus">International Orientation</SectionTitle>
        <p className="text-center text-neutral-300 max-w-2xl mx-auto text-lg">
          A comprehensive program to help you transition smoothly into the University of NorthWest community.
        </p>
      </Section>

      <Container className="-mt-16 relative z-10 pb-24">
        
        {/* WELCOME */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-card border border-neutral-100 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
               <h2 className="text-3xl font-serif font-bold text-primary-900 mb-6">Welcome to University of NorthWest!</h2>
               <p className="text-neutral-600 leading-relaxed mb-4">
                 This site contains critical information for first-year, transfer, and international students. As a new student, you must fulfill several requirements from various offices before you can begin classes.
               </p>
               <p className="text-neutral-600 leading-relaxed">
                 This guide helps you navigate the actions you must take to complete requirements by the stated deadlines so that you can avoid delays and penalties.
               </p>
             </div>
             <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
               <SmartImage 
                 src={orientationImg} 
                 alt="Orientation Day" 
                 className="h-full w-full"
                 placeholderText="Orientation Group"
                 aspectRatio="video"
               />
             </div>
          </div>
        </div>

        {/* ORIENTATION DETAILS */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          
          {/* What Happens? */}
          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-secondary-500">
            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-6">
              <Calendar className="w-6 h-6 text-primary-900" />
            </div>
            <h3 className="text-xl font-bold text-primary-900 mb-4">What Happens at Orientation?</h3>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                Register for courses
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                Get tools for the first day of class
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                Learn about student involvement opportunities
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                Meet the UNW Community
              </li>
            </ul>
          </div>

          {/* Why Important? */}
          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-primary-600">
            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-6">
              <Compass className="w-6 h-6 text-primary-900" />
            </div>
            <h3 className="text-xl font-bold text-primary-900 mb-4">Why is it Important?</h3>
            <p className="text-sm text-neutral-600 leading-relaxed mb-4">
              Transition is difficult for anyone. We have developed a truly immersive program to help you transition to our community. Meeting the challenges of the college environment should not be done alone.
            </p>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Our goal is to make sure you get the support and acclimate to your new community, ensuring your journey is fruitful and successful.
            </p>
          </div>

          {/* GPS Program */}
          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-secondary-500">
            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-6">
              <Map className="w-6 h-6 text-primary-900" />
            </div>
            <h3 className="text-xl font-bold text-primary-900 mb-4">GPS Program</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              We have programs tailored for all our new students, such as our GPS program for students not already in a specialized program.
            </p>
            <div className="mt-4 p-3 bg-primary-50 rounded text-xs text-primary-800 font-medium">
              International students will receive their Orientation appointments by email.
            </div>
          </div>

        </div>

        {/* PREPARE */}
        <div className="bg-primary-900 text-white p-10 rounded-2xl text-center">
           <Users className="w-12 h-12 text-secondary-500 mx-auto mb-4" />
           <h2 className="text-2xl font-serif font-bold mb-4">Prepare for Orientation</h2>
           <p className="text-primary-200 max-w-2xl mx-auto">
             We’re here to help you succeed. Part of being a successful college student is learning how to navigate the university rules, regulations, and deadlines. Start by reviewing your acceptance package and checking your email regularly.
           </p>
        </div>

      </Container>
    </div>
  );
};