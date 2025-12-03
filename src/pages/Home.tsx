import { Link } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { Section, SectionTitle } from '../components/common/Section';
import { Card } from '../components/common/Card';
import { SmartImage } from '../components/common/SmartImage';
import { Button } from '../components/common/Button';
import { Hero } from '../components/sections/Hero';
import { Tabs } from '../components/common/Tabs';
import { CircularProgress } from '../components/common/CircularProgress';
import { 
  Briefcase, Users, TrendingUp, Award, BookOpen, Search, 
  User, List, Star, ThumbsUp, Settings, Monitor, Quote, ArrowRight, CheckCircle
} from 'lucide-react';
import { programmes } from '../data/programmes';

// Görseller
import studentImg from '../assets/images/student-life.jpg'; // EKSİK OLAN BU SATIR EKLENDİ
import campusImg from '../assets/images/campus-building.jpg';
import corporateImg from '../assets/images/corporate-meeting.jpg';
import researchImg from '../assets/images/research-lab.jpg';

export const Home = () => {
  
  // Öne çıkan 3 programı seçelim
  const featuredProgrammes = [
    programmes.find(p => p.id === 'bsc-cs'), 
    programmes.find(p => p.id === 'mba-exec'), 
    programmes.find(p => p.id === 'phd-polsci') 
  ].filter(Boolean); 

  // 1. İkon Kutuları (Business & Employers Linkleri)
  const iconBoxes = [
    { title: "Employing Students", desc: "Internships and placements offer a cost-effective way of boosting efficiency.", icon: User, link: "/business/employing" },
    { title: "Access Our Experts", desc: "Over 100 academic staff with a wealth of research expertise.", icon: Users, link: "/business/experts" },
    { title: "Fundings for Growth", desc: "We help at least 2,000 organisations with knowledge transfer every year.", icon: TrendingUp, link: "/business/fundings" },
    { title: "Degrees at Work", desc: "At University of Northwest, we realise ambitions together.", icon: Award, link: "/business/degrees-at-work" },
    { title: "Professional Courses", desc: "We develop and deliver courses tailored to industry needs.", icon: ThumbsUp, link: "/business/professional-courses" },
    { title: "Research Degrees", desc: "PhD candidates critically investigate and evaluate approved topics.", icon: Search, link: "/research/degrees" },
  ];

  // 2. İstatistikler
  const stats = [
    { label: "Intl. Student Success", value: 93 },
    { label: "Educational Process", value: 96 },
    { label: "Project Planning", value: 90 },
    { label: "Personal Development", value: 85 },
  ];

  // 3. Hizmetler Listesi (Validation Services Özet)
  const services = [
    { name: "Interface Support", icon: Monitor },
    { name: "Application Support", icon: Settings },
    { name: "Project Planning", icon: TrendingUp },
    { name: "Software Engineering", icon: BookOpen },
    { name: "Personnel Support", icon: Users },
  ];

  // 4. Yorumlar (Testimonials)
  const testimonials = [
    { name: "Madison Moore", country: "Canada", text: "At North West I have learnt to be adaptable to the global working environment." },
    { name: "Lydia Lopez", country: "United States", text: "I like that this degree has a practicum component for each subject." },
    { name: "Martin Robinson", country: "Venezuela", text: "Your options are quite wide by studying at UNW because there’s an emphasis on societies." },
  ];

  return (
    <div className="bg-neutral-50 font-sans">
      
      {/* 1. HERO BÖLÜMÜ */}
      <Hero />

      {/* 2. ÜNİVERSİTE TANITIMI */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary-100 rounded-full z-0" />
            <SmartImage 
              src={campusImg} 
              alt="University Building" 
              className="relative z-10 shadow-2xl rounded-lg transform -rotate-2 hover:rotate-0 transition-transform duration-500"
              placeholderText="Main Campus"
              aspectRatio="square"
            />
          </div>
          <div className="space-y-6">
            <span className="text-secondary-600 font-bold tracking-widest uppercase text-sm">Discover NorthWest</span>
            <h2 className="text-4xl font-serif font-bold text-primary-900 leading-tight">
              An ISO Certified, International University
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              University of NorthWest is rapidly becoming a pioneer in the field of online education. 
              We cater to students from all religions, races, and nationalities, offering opportunities 
              for lifelong learning through quality higher education.
            </p>
            <ul className="space-y-3">
              {[
                "Excellence, creativity and innovative approach",
                "On-Campus and Off-Campus (Distance Learning)",
                "Strong career support and counseling"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-primary-800 font-medium">
                  <CheckCircle className="w-5 h-5 text-secondary-500 mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Link to="/about">
                <Button variant="outline" className="border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white">
                  Read More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>
      
      {/* GİRİŞ METNİ (Quote) */}
      <Section bg="gray">
        <Container className="text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-6 leading-tight">
            "University of Northwest has focused on providing professional opportunity for all who can benefit for well over a century"
          </h2>
          <div className="h-1 w-24 bg-secondary-500 mx-auto rounded-full" />
        </Container>
      </Section>

      {/* 3. ÖNE ÇIKAN PROGRAMLAR */}
      <Section>
        <SectionTitle subtitle="Academic Excellence">Featured Programmes</SectionTitle>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {featuredProgrammes.map((prog: any) => (
            <Card
              key={prog.id}
              title={prog.title}
              subtitle={prog.level}
              className="bg-white"
              footer={
                <Link to="/academics" className="text-secondary-600 font-bold text-sm hover:text-secondary-700 flex items-center">
                  View Details <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              }
            >
              <p className="line-clamp-3">{prog.description}</p>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/academics">
            <Button size="lg" className="shadow-lg shadow-primary-900/20">
              View All 478+ Programmes
            </Button>
          </Link>
        </div>
      </Section>

      {/* 4. NEDEN BİZ? (Why Choose Us - Tabs & Stats) */}
      <Section bg="navy" className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* SOL: Tabs */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-xl text-neutral-900">
              <SectionTitle align="left" subtitle="Why Choose Us">Academic Excellence</SectionTitle>
              <Tabs tabs={[
                {
                  id: 'career', label: 'Career', icon: <Briefcase className="w-4 h-4"/>,
                  content: (
                    <>
                      <p><b>Career</b></p>
                      <p>Your career plan will provide you with tools and information to help you explore your career options, build experience, prepare for your future career, and find a job.</p>
                      <p>Your connections can provide valuable information for your career exploration and possible opportunities when searching for a job.</p>
                    </>
                  )
                },
                {
                  id: 'undergrad', label: 'Undergraduate', icon: <List className="w-4 h-4"/>,
                  content: (
                    <>
                      <p><b>Undergraduate</b></p>
                      <p>In the United States of America undergraduate refers to those who are studying for a bachelor’s degree. The most common method consists of four years of study leading to a Bachelor of Arts (B.A.) or Bachelor of Science (B.S.).</p>
                    </>
                  )
                },
                {
                  id: 'postgrad', label: 'Postgraduate', icon: <Briefcase className="w-4 h-4"/>,
                  content: (
                    <>
                      <p><b>Postgraduate</b></p>
                      <p>Postgraduate programmes offer the opportunity to undertake in-depth study in a particular area of interest. Postgraduate study is also more challenging than undergraduate study; it requires commitment and the demonstration of more advanced study skills.</p>
                    </>
                  )
                },
                {
                  id: 'phd', label: 'Research-PhD', icon: <Star className="w-4 h-4"/>,
                  content: (
                    <>
                      <p><b>Research-PhD</b></p>
                      <p>The PhD is a doctoral degree, specifically called a “doctor of philosophy” degree. PhD recipients are able to engage in thought experiments, reason about problems, and solve problems in sophisticated ways.</p>
                    </>
                  )
                }
              ]} />
            </div>

            {/* SAĞ: Stats */}
            <div className="lg:col-span-1 bg-primary-800 rounded-2xl p-8 border border-white/10 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-8 text-center">Our Success</h3>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0">
                    <span className="text-sm font-medium text-primary-200 w-2/3">{stat.label}</span>
                    <div className="w-1/3 flex justify-end">
                      <div className="scale-75 origin-right">
                        <CircularProgress value={stat.value} label="" color="text-secondary-400" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Container>
      </Section>

      {/* 5. İŞ DÜNYASI LİNKLERİ (Icon Boxes) */}
      <Section bg="gray">
        <Container>
          <SectionTitle subtitle="For Business">Corporate Services</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {iconBoxes.map((box, idx) => (
              <Link key={idx} to={box.link} className="group">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 hover:shadow-card transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-900 transition-colors">
                    <box.icon className="w-6 h-6 text-primary-900 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-900 mb-2">{box.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed line-clamp-2">
                    {box.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6. HİZMETLER VE YORUMLAR (Services & Testimonials) */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* SOL: Services List */}
            <div>
              <SectionTitle align="left" subtitle="What We Offer">Validation Services</SectionTitle>
              <div className="space-y-4">
                {services.map((srv, idx) => (
                  <div key={idx} className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-neutral-100 hover:bg-primary-50 transition-colors group cursor-default">
                    <div className="w-10 h-10 bg-secondary-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-secondary-500 transition-colors">
                      <srv.icon className="w-5 h-5 text-secondary-700 group-hover:text-white" />
                    </div>
                    <span className="font-bold text-primary-900">{srv.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SAĞ: Testimonials */}
            <div>
              <SectionTitle align="left" subtitle="Success Stories">What Others Are Saying</SectionTitle>
              <div className="space-y-6">
                {testimonials.map((t, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 relative">
                    <Quote className="w-8 h-8 text-neutral-200 absolute top-4 right-4" />
                    <p className="text-neutral-600 italic mb-4 text-sm leading-relaxed">"{t.text}"</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary-200 rounded-full flex items-center justify-center font-bold text-primary-800 mr-3 text-sm">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-primary-900 text-sm">{t.name}</h4>
                        <span className="text-xs text-secondary-600 font-bold uppercase">{t.country}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Container>
      </Section>

      {/* 7. ARAŞTIRMA VİTRİNİ & ÖĞRENCİ YAŞAMI */}
      <Section bg="gray">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Araştırma Vitrini */}
            <div>
               <SectionTitle align="left" subtitle="Research">Our Focus Areas</SectionTitle>
               <div className="grid grid-cols-2 gap-4">
                  {['Quality, Management & Policy', 'Global Power', 'Innovation', 'Consultancy'].map((item, idx) => (
                    <div key={idx} className="relative group overflow-hidden rounded-lg h-40 cursor-default">
                      <SmartImage 
                        src={idx % 2 === 0 ? corporateImg : researchImg}
                        alt={item}
                        className="h-full w-full group-hover:scale-110 transition-transform duration-700"
                        placeholderText={item}
                        aspectRatio="square"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 to-transparent flex items-end p-4">
                        <h3 className="text-white font-bold text-sm transform translate-y-2 group-hover:translate-y-0 transition-transform">
                          {item}
                        </h3>
                      </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* Öğrenci Yaşamı Teaser */}
            <div>
              <SectionTitle align="left" subtitle="Campus Life">Student Community</SectionTitle>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 h-full flex flex-col">
                 <SmartImage 
                   src={studentImg}
                   alt="Student Life"
                   className="rounded-lg mb-6 flex-grow"
                   placeholderText="Students"
                   aspectRatio="video"
                 />
                 <p className="text-neutral-600 mb-6">
                    From your first week to graduation, we are here to support you. Whether studying on campus or online, you are part of a vibrant global community.
                 </p>
                 <Link to="/student-life/support" className="mt-auto">
                    <Button className="w-full">Explore Student Services</Button>
                 </Link>
              </div>
            </div>

          </div>
        </Container>
      </Section>

      {/* 8. CALL TO ACTION */}
      <div className="bg-secondary-500 py-16 text-center">
        <Container>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-950 mb-6">
            Ready to Shape Your Future?
          </h2>
          <p className="text-primary-900/80 text-lg max-w-2xl mx-auto mb-8 font-medium">
            Join over 9,000 successful graduates. Applications for the 2026 academic year are now open.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/apply/undergraduate">
              <Button size="lg" className="bg-primary-900 text-white hover:bg-primary-800 border-none w-full sm:w-auto">
                Apply Online
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white w-full sm:w-auto">
                Contact Admissions
              </Button>
            </Link>
          </div>
        </Container>
      </div>

    </div>
  );
};