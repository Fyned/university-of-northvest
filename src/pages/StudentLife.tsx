import { Container } from '../components/common/Container';
import { Timeline } from '../components/common/Timeline';
import { useLocation } from 'react-router-dom';

export const StudentLife = () => {
  const location = useLocation();
  const path = location.pathname.split('/').pop(); // URL'in son kısmını alır (örn: 'arrival')

  // Sayfa İçerikleri Veritabanı (Simüle edilmiş)
  const contentMap: Record<string, { title: string; type: 'timeline' | 'text'; data: any }> = {
    'pre-arrival': {
      title: "Before You Get Here",
      type: 'timeline',
      data: [
        { title: "Accept Your Offer", description: "Confirm your place at University of NorthWest by accepting your offer letter." },
        { title: "Apply for Visa", description: "International students must apply for a student visa immediately." },
        { title: "Book Accommodation", description: "Secure your living arrangements well in advance." },
        { title: "Travel Arrangements", description: "Book your flights and plan your travel to the campus." }
      ]
    },
    'arrival': {
      title: "When You Arrive",
      type: 'timeline',
      data: [
        { title: "Airport Pickup", description: "Use our designated airport pickup service for a safe journey." },
        { title: "Check-in to Accommodation", description: "Collect your keys and settle into your new home." },
        { title: "Campus Registration", description: "Visit the student centre to complete your official registration." },
        { title: "Get Student ID", description: "Obtain your university ID card for library and building access." }
      ]
    },
    'first-week': {
      title: "Your First Week",
      type: 'timeline',
      data: [
        { title: "Orientation Program", description: "Attend the mandatory orientation sessions to meet faculty and peers." },
        { title: "Course Enrolment", description: "Finalise your course selection and timetable." },
        { title: "IT Setup", description: "Set up your university email and Wi-Fi access." },
        { title: "Social Events", description: "Join welcome parties and student clubs." }
      ]
    },
    'support': {
      title: "Support Your Study",
      type: 'text',
      data: "We offer comprehensive academic support including writing centres, math labs, and peer tutoring to ensure your success."
    },
    'disability': {
      title: "Disability Support",
      type: 'text',
      data: "University of NorthWest is committed to providing equal access. Our disability support services provide accommodations and assistive technology."
    },
    'skills': {
      title: "Study Skills",
      type: 'text',
      data: "Workshops on time management, critical thinking, and exam preparation are available throughout the semester."
    },
    'careers': {
      title: "Careers & Employability",
      type: 'text',
      data: "Our Career Centre offers resume reviews, interview coaching, and job placement services to kickstart your professional journey."
    }
  };

  // Varsayılan içerik (Eğer eşleşen sayfa yoksa)
  const currentContent = contentMap[path || ''] || {
    title: "Student Life",
    type: 'text',
    data: "Experience a vibrant community designed to support your personal and academic growth."
  };

  return (
    <div className="bg-neutral-50 min-h-screen py-16 font-sans">
      <Container>
        <div className="bg-white p-12 rounded-2xl border border-neutral-200 shadow-sm">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-8 border-b border-neutral-100 pb-4">
            {currentContent.title}
          </h1>
          
          {currentContent.type === 'timeline' ? (
            <Timeline items={currentContent.data} />
          ) : (
            <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl">
              {currentContent.data}
            </p>
          )}
        </div>
      </Container>
    </div>
  );
};