import { Container } from '../components/common/Container';
import { Laptop } from 'lucide-react';

export const Tuition = () => {
  return (
    <div className="bg-neutral-50 min-h-screen py-16 font-sans">
      <Container>
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-4">
              Tuition & Fees
            </h1>
            <p className="text-neutral-600">
              Affordable, transparent pricing for world-class education.
            </p>
          </div>

          {/* Uyarı Kutusu */}
          <div className="bg-yellow-50 border-l-4 border-secondary-500 p-4 mb-8 rounded-r-lg">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> All fees are subject to change. Payments once deposited are not refundable for any reason whatsoever.
            </p>
          </div>

          {/* Standart Programlar Tablosu */}
          <div className="bg-white rounded-xl shadow-sm border border-neutral-100 overflow-hidden mb-12">
            <div className="bg-primary-900 px-6 py-4">
              <h2 className="text-xl font-bold text-white">Off-Campus (Distance Learning) Fees</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-neutral-50 border-b border-neutral-200">
                  <tr>
                    <th className="px-6 py-4 text-sm font-bold text-primary-900">Programme</th>
                    <th className="px-6 py-4 text-sm font-bold text-primary-900">Admission Fee (One-time)</th>
                    <th className="px-6 py-4 text-sm font-bold text-primary-900">Tuition (Per Semester)</th>
                    <th className="px-6 py-4 text-sm font-bold text-primary-900">Exam Fee (Per Semester)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  <tr className="hover:bg-neutral-50">
                    <td className="px-6 py-4 font-medium text-primary-900">Bachelor's Degree</td>
                    <td className="px-6 py-4 text-neutral-600">US $100</td>
                    <td className="px-6 py-4 text-neutral-600">US $750</td>
                    <td className="px-6 py-4 text-neutral-600">US $100</td>
                  </tr>
                  <tr className="hover:bg-neutral-50">
                    <td className="px-6 py-4 font-medium text-primary-900">Master's Degree</td>
                    <td className="px-6 py-4 text-neutral-600">US $100</td>
                    <td className="px-6 py-4 text-neutral-600">US $1,500</td>
                    <td className="px-6 py-4 text-neutral-600">US $100</td>
                  </tr>
                  <tr className="hover:bg-neutral-50">
                    <td className="px-6 py-4 font-medium text-primary-900">Doctorate (Ph.D.)</td>
                    <td className="px-6 py-4 text-neutral-600">US $150</td>
                    <td className="px-6 py-4 text-neutral-600">US $2,500</td>
                    <td className="px-6 py-4 text-neutral-600">US $200</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Executive Program */}
          <div className="bg-white rounded-xl shadow-sm border border-neutral-100 overflow-hidden mb-12">
            <div className="bg-primary-800 px-6 py-4 flex justify-between items-center">
              <h2 className="text-xl font-bold text-white">MBA for Executives</h2>
              <span className="bg-secondary-500 text-primary-900 text-xs font-bold px-2 py-1 rounded">Total Package</span>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-end border-b border-neutral-100 pb-4 mb-4">
                <div>
                  <p className="text-primary-900 font-medium">Total Program Fee</p>
                  <p className="text-sm text-neutral-500">Includes Admission, Tuition, Materials & Exam Fees</p>
                </div>
                <div className="text-3xl font-serif font-bold text-primary-900">US $4,900</div>
              </div>
              <p className="text-sm text-neutral-500">
                * Easy installment plans available. Contact Admission Office for details.
              </p>
            </div>
          </div>

          {/* Free Laptop Promo */}
          <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 p-8 rounded-2xl text-white flex items-center justify-between shadow-lg">
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold mb-2 text-primary-900">Complimentary Technology Package</h3>
              <p className="text-primary-900/80 font-medium">
                Students in the US and Pakistan are provided with a Free Laptop or PC, Internet access, and Web Hosting as part of their enrolment package.
              </p>
            </div>
            <div className="bg-white/20 p-4 rounded-full">
              <Laptop className="w-12 h-12 text-white" />
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
};