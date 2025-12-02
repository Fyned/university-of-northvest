import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { PagePlaceholder } from './components/common/PagePlaceholder';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col font-sans text-neutral-900">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<PagePlaceholder title="Home Page" />} />
            
            {/* Study with us */}
            <Route path="/study/courses/undergraduate" element={<PagePlaceholder title="Undergraduate Courses" />} />
            <Route path="/study/courses/postgraduate" element={<PagePlaceholder title="Postgraduate Courses" />} />
            <Route path="/study/courses/phd" element={<PagePlaceholder title="PhD Programmes" />} />

            {/* Apply */}
            <Route path="/apply/undergraduate" element={<PagePlaceholder title="Undergraduate Admissions" />} />
            <Route path="/apply/postgraduate" element={<PagePlaceholder title="Postgraduate Admissions" />} />
            <Route path="/apply/transfer-credit" element={<PagePlaceholder title="Transfer Credit" />} />

            {/* Validation Services */}
            <Route path="/validation-services" element={<PagePlaceholder title="Validation Services" />} />

            {/* Business */}
            <Route path="/business/experts" element={<PagePlaceholder title="Access Our Experts" />} />
            <Route path="/business/employing" element={<PagePlaceholder title="Employing Students" />} />
            <Route path="/business/fundings" element={<PagePlaceholder title="Fundings for Growth" />} />
            <Route path="/business/degrees-at-work" element={<PagePlaceholder title="Degrees at Work" />} />
            <Route path="/business/professional-courses" element={<PagePlaceholder title="Professional Courses" />} />

            {/* International */}
            <Route path="/international/support" element={<PagePlaceholder title="Student Support" />} />
            <Route path="/international/application" element={<PagePlaceholder title="Making Your Application" />} />
            {/* Tekrarlı Rotalar */}
            <Route path="/international/courses/undergraduate" element={<PagePlaceholder title="International Undergraduate" />} />
            <Route path="/international/courses/postgraduate" element={<PagePlaceholder title="International Postgraduate" />} />
            <Route path="/international/courses/phd" element={<PagePlaceholder title="International PhD" />} />
            <Route path="/international/how-to-apply" element={<PagePlaceholder title="How to Apply" />} />
            <Route path="/international/english-requirements" element={<PagePlaceholder title="English Language Requirements" />} />
            <Route path="/international/new-students" element={<PagePlaceholder title="Info for New Students" />} />
            <Route path="/international/travel" element={<PagePlaceholder title="Planning Your Travel" />} />
            <Route path="/international/orientation" element={<PagePlaceholder title="International Orientation" />} />

            {/* Student Life */}
            <Route path="/student-life/arrival" element={<PagePlaceholder title="When You Arrive" />} />
            <Route path="/student-life/pre-arrival" element={<PagePlaceholder title="Before You Get Here" />} />
            <Route path="/student-life/fees" element={<PagePlaceholder title="Fee Payments" />} />
            <Route path="/student-life/first-week" element={<PagePlaceholder title="Your First Week" />} />
            <Route path="/student-life/support" element={<PagePlaceholder title="Support Your Study" />} />
            <Route path="/student-life/disability" element={<PagePlaceholder title="Disability Support" />} />
            <Route path="/student-life/skills" element={<PagePlaceholder title="Study Skills" />} />
            <Route path="/student-life/careers" element={<PagePlaceholder title="Careers and Employability" />} />
            <Route path="/student-life/volunteering" element={<PagePlaceholder title="Student Volunteering" />} />
            <Route path="/student-life/work-study" element={<PagePlaceholder title="Work While You Study" />} />

            {/* Research */}
            <Route path="/research/support" element={<PagePlaceholder title="Research Support" />} />
            <Route path="/research/degrees" element={<PagePlaceholder title="Research Degrees" />} />

            {/* 404 */}
            <Route path="*" element={<PagePlaceholder title="404 - Page Not Found" />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App