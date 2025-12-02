import { Container } from '../components/common/Container';
import { motion } from 'framer-motion';
import { Quote, Award, Globe } from 'lucide-react';

export const About = () => {
  return (
    <div className="bg-neutral-50 min-h-screen font-sans pb-20">
      
      {/* Hero Kısmı */}
      <div className="bg-primary-900 text-white py-20">
        <Container>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            About University of NorthWest
          </motion.h1>
          <p className="text-xl text-neutral-300 max-w-2xl font-light">
            An ISO certified, international university dedicated to excellence, creativity, and an innovative approach to learning.
          </p>
        </Container>
      </div>

      <Container className="mt-16 space-y-20">
        
        {/* Genel Bakış */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-primary-900">Who We Are</h2>
            <p className="text-neutral-600 leading-relaxed">
              University of NorthWest is rapidly becoming a pioneer in the field of online and distance education. 
              With students from all religions, races, and nationalities, we are proud to offer opportunities 
              for lifelong learning through quality higher education.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              We offer multiple modes of study including On-Campus, Off-Campus (Distance Learning), and Executive Programmes 
              across various disciplines, ensuring education is accessible to everyone, everywhere.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 flex flex-col items-center text-center">
              <Globe className="w-10 h-10 text-secondary-600 mb-4" />
              <h3 className="font-bold text-primary-900">Global Reach</h3>
              <p className="text-sm text-neutral-500 mt-2">Presence in over 25 countries worldwide</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 flex flex-col items-center text-center">
              <Award className="w-10 h-10 text-secondary-600 mb-4" />
              <h3 className="font-bold text-primary-900">ISO Certified</h3>
              <p className="text-sm text-neutral-500 mt-2">Internationally recognized quality standards</p>
            </div>
          </div>
        </section>

        {/* Misyon */}
        <section className="bg-white p-10 rounded-2xl border border-neutral-100 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-600/10 rounded-bl-full -mr-16 -mt-16" />
          <h2 className="text-3xl font-serif font-bold text-primary-900 mb-6">Our Mission</h2>
          <blockquote className="text-xl text-neutral-600 italic leading-relaxed relative z-10">
            "Education is the power to think clearly, the power to act well in the working world, and the power to appreciate life."
          </blockquote>
          <p className="mt-6 text-neutral-600">
            We believe that a strong higher education system is the cornerstone of an autonomous society. 
            We are committed to providing equal educational opportunities for all segments of society, 
            empowering individuals to achieve their full potential.
          </p>
        </section>

        {/* Rektör Mesajı */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-primary-900 mb-8 text-center">Rector's Message</h2>
          <div className="bg-primary-900 text-white p-10 rounded-2xl relative">
            <Quote className="w-16 h-16 text-secondary-600 opacity-20 absolute top-6 left-6" />
            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
              <p className="text-lg font-light leading-relaxed">
                "We thank you for your interest in University of NorthWest. We are proud to offer you the opportunity 
                to pursue your academic goals with us. Our exceptional faculty and staff are dedicated to each 
                student's success, providing a supportive and innovative environment."
              </p>
              <div className="pt-6 border-t border-white/10">
                <p className="font-serif text-2xl font-bold text-secondary-500">With Pride and Honour!</p>
                <p className="text-sm text-neutral-400 mt-2">The Rector, University of NorthWest</p>
              </div>
            </div>
          </div>
        </section>

      </Container>
    </div>
  );
};