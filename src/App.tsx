import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { PagePlaceholder } from './components/common/PagePlaceholder';

// Sections
import { Hero } from './components/sections/Hero';

// Pages - Phase 2 (Academic Core)
import { Academics } from './pages/Academics';
import { Undergraduate } from './pages/study/Undergraduate';
import { Postgraduate } from './pages/study/Postgraduate';
import { Phd } from './pages/study/Phd';

// Pages - Phase 3 (Corporate)
import { About } from './pages/About';
import { Faculty } from './pages/Faculty';
import { Accreditations } from './pages/Accreditations';

// Pages - Phase 4 (Admissions & Contact)
import { Admissions } from './pages/Admissions';
import { Tuition } from './pages/Tuition';
import { Contact } from './pages/Contact';

// Pages - Phase 5 (Business & Validation)
import { ValidationServices } from './pages/ValidationServices';
import { Experts } from './pages/business/Experts';
import { Employing } from './pages/business/Employing';
import { Fundings } from './pages/business/Fundings';
import { DegreesAtWork } from './pages/business/DegreesAtWork';
import { ProfessionalCourses } from './pages/business/ProfessionalCourses';

// Pages - Phase 6 (Student Life & Generic - NEW)
import { StudentLife } from './pages/StudentLife';
import { GenericContent } from './pages/GenericContent';

// Scroll to Top: Sayfa değişimlerinde en üste atar
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Ana Sayfa Bileşeni
const Home = () => (
  <>
    <Hero />
    {/* İleride buraya Latest News vb. eklenebilir */}
  </>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans text-neutral-900">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            {/* --- GLOBAL PAGES --- */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/accreditations" element={<Accreditations />} />
            <Route path="/contact" element={<Contact />} />

            {/* --- ACADEMIC PAGES (PHASE 2) --- */}
            <Route path="/academics" element={<Academics />} />
            
            {/* Study with us */}
            <Route path="/study/courses/undergraduate" element={<Undergraduate />} />
            <Route path="/study/courses/postgraduate" element={<Postgraduate />} />
            <Route path="/study/courses/phd" element={<Phd />} />

            {/* International (Tekrarlı içerik) */}
            <Route path="/international/courses/undergraduate" element={<Undergraduate />} />
            <Route path="/international/courses/postgraduate" element={<Postgraduate />} />
            <Route path="/international/courses/phd" element={<Phd />} />

            {/* --- ADMISSIONS & FEES (PHASE 4) --- */}
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/tuition" element={<Tuition />} />
            
            {/* Apply Alt Rotaları */}
            <Route path="/apply/undergraduate" element={<PagePlaceholder title="Undergraduate Admissions" />} />
            <Route path="/apply/postgraduate" element={<PagePlaceholder title="Postgraduate Admissions" />} />
            <Route path="/apply/transfer-credit" element={<PagePlaceholder title="Transfer Credit" />} />

            {/* --- BUSINESS & VALIDATION (PHASE 5) --- */}
            <Route path="/validation-services" element={<ValidationServices />} />
            
            <Route path="/business/experts" element={<Experts />} />
            <Route path="/business/employing" element={<Employing />} />
            <Route path="/business/fundings" element={<Fundings />} />
            <Route path="/business/degrees-at-work" element={<DegreesAtWork />} />
            <Route path="/business/professional-courses" element={<ProfessionalCourses />} />

            {/* --- INTERNATIONAL (PHASE 6 - NEW) --- */}
            <Route path="/international/support" element={<GenericContent />} />
            <Route path="/international/application" element={<GenericContent />} />
            <Route path="/international/how-to-apply" element={<GenericContent />} />
            <Route path="/international/english-requirements" element={<GenericContent />} />
            <Route path="/international/new-students" element={<GenericContent />} />
            <Route path="/international/travel" element={<GenericContent />} />
            <Route path="/international/orientation" element={<GenericContent />} />

            {/* --- STUDENT LIFE (PHASE 6 - NEW) --- */}
            {/* Timeline İçeren Sayfalar */}
            <Route path="/student-life/pre-arrival" element={<StudentLife />} />
            <Route path="/student-life/arrival" element={<StudentLife />} />
            <Route path="/student-life/first-week" element={<StudentLife />} />
            
            {/* Diğer Student Life Sayfaları */}
            <Route path="/student-life/support" element={<StudentLife />} />
            <Route path="/student-life/disability" element={<StudentLife />} />
            <Route path="/student-life/skills" element={<StudentLife />} />
            <Route path="/student-life/careers" element={<StudentLife />} />
            <Route path="/student-life/volunteering" element={<StudentLife />} />
            <Route path="/student-life/work-study" element={<StudentLife />} />
            
            {/* Fee Payments -> Tuition sayfasına yönlendirme */}
            <Route path="/student-life/fees" element={<Tuition />} /> 

            {/* --- RESEARCH (PHASE 6 - NEW) --- */}
            <Route path="/research/support" element={<GenericContent />} />
            <Route path="/research/degrees" element={<GenericContent />} />

            {/* 404 */}
            <Route path="*" element={<PagePlaceholder title="404 - Page Not Found" />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;