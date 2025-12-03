import { Container } from '../../components/common/Container';
import { Section, SectionTitle } from '../../components/common/Section';
import { SmartImage } from '../../components/common/SmartImage';
import { Calendar, Users, Music, Map, Heart, ArrowRight } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { Link } from 'react-router-dom';

// Görsel
import welcomeImg from '../../assets/images/student-life.jpg'; // Uygun görsel

export const FirstWeek = () => {
  const activities = [
    {
      title: "Social Events",
      icon: Music,
      desc: "Nights out, parties, and social gatherings designed to help you make new friends and have fun."
    },
    {
      title: "Campus Tours",
      icon: Map,
      desc: "Useful sessions and guided tours to help you learn your way around the campus and local area."
    },
    {
      title: "Taster Sessions",
      icon: Users,
      desc: "Try out societies and sports teams before joining. There’s something for everyone, no matter what your interests are."
    },
    {
      title: "Welcome Helpers",
      icon: Heart,
      desc: "Current students or recent graduates are there to answer your questions from a student perspective."
    }
  ];

  return (
    <div className="bg-neutral-50 min-h-screen font-sans">
      
      {/* Header */}
      <Section bg="navy" className="py-20">
        <SectionTitle align="center" subtitle="Welcome Week">Your First Week</SectionTitle>
        <p className="text-center text-neutral-300 max-w-2xl mx-auto text-lg">
          A great chance to meet people, get settled in, and start your university journey.
        </p>
      </Section>

      <Container className="-mt-16 relative z-10 pb-24">
        
        {/* GİRİŞ & GÖRSEL */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-card border border-neutral-100 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1">
               <h2 className="text-2xl font-serif font-bold text-primary-900 mb-4">Welcome to Welcome Week!</h2>
               <p className="text-neutral-600 leading-relaxed mb-6">
                 Each year, we organise loads of events designed to help you get to know our university, while making new friends and having fun. 
                 It's the perfect way to kickstart your life at University of NorthWest.
               </p>
               <div className="flex items-center space-x-2 text-sm font-bold text-secondary-600">
                 <Calendar className="w-5 h-5" />
                 <span>Check the Events Calendar</span>
               </div>
             </div>
             <div className="relative h-64 rounded-lg overflow-hidden shadow-md order-1 md:order-2">
               <SmartImage 
                 src={welcomeImg} 
                 alt="Welcome Week" 
                 className="h-full w-full"
                 placeholderText="Students Celebrating"
                 aspectRatio="video"
               />
             </div>
          </div>
        </div>

        {/* ETKİNLİKLER (GRID) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {activities.map((activity, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 hover:-translate-y-1 transition-transform">
              <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center mb-4">
                <activity.icon className="w-5 h-5 text-primary-900" />
              </div>
              <h3 className="font-bold text-primary-900 mb-2">{activity.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {activity.desc}
              </p>
            </div>
          ))}
        </div>

        {/* DESTEK (SUPPORT) */}
        <div className="bg-secondary-50 border border-secondary-100 p-8 rounded-xl flex flex-col md:flex-row items-center justify-between">
           <div className="mb-6 md:mb-0 md:mr-8">
             <h3 className="text-xl font-bold text-primary-900 mb-2">Need a Helping Hand?</h3>
             <p className="text-sm text-primary-800 leading-relaxed">
               If you feel like you’re struggling to settle in, our Student Services Team is here to help with wellbeing, money management, study skills, and more.
             </p>
           </div>
           <Link to="/student-life/support">
             <Button className="whitespace-nowrap">
               Contact Student Services <ArrowRight className="ml-2 w-4 h-4" />
             </Button>
           </Link>
        </div>

      </Container>
    </div>
  );
};