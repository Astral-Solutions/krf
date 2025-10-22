// src/pages/Donate.jsx
import React from "react";
import { Helmet } from "react-helmet";

const Donate = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <Helmet>
        <title>Donate | Koketso Rakhudu Foundation</title>
      </Helmet>

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 space-y-12">
        {/* ===== HEADER ===== */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#c27700] mb-4">
            Support Our Mission
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            The Koketso Rakhudu Foundation empowers communities through
            education, leadership, and sustainable development. Your support
            helps us continue transforming lives and building a brighter future.
          </p>
        </div>

        {/* ===== BANK DETAILS ===== */}
        <div className="bg-blue-50 border border-blue-200 rounded-md p-6">
          <h2 className="text-2xl font-semibold text-[#c27700] mb-4">
            Bank Account Details
          </h2>
          <table className="w-full text-left text-gray-700">
            <tbody>
              <tr>
                <th className="py-2 font-semibold">Account Holder:</th>
                <td>KOKETSO RAKHUDU FOUNDATION</td>
              </tr>
              <tr>
                <th className="py-2 font-semibold">ID/Reg Number:</th>
                <td>177/109/NPO</td>
              </tr>
              <tr>
                <th className="py-2 font-semibold">Account Type:</th>
                <td>Current</td>
              </tr>
              <tr>
                <th className="py-2 font-semibold">Bank Name:</th>
                <td>Standard Bank</td>
              </tr>
              <tr>
                <th className="py-2 font-semibold">Branch Name:</th>
                <td>Waterfall Mall</td>
              </tr>
              <tr>
                <th className="py-2 font-semibold">Branch Code:</th>
                <td>007045</td>
              </tr>
              <tr>
                <th className="py-2 font-semibold">Account Number:</th>
                <td>10 12 997 812 2</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ===== PARTNER WITH US ===== */}
        <div className="bg-[#fff9f3] border border-[#f3e0c1] rounded-md p-8 text-center">
          <h2 className="text-3xl font-bold text-[#c27700] mb-4">
            Partner With Us
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            We collaborate with corporate, government, and educational
            stakeholders to amplify impact through:
          </p>
          <ul className="text-gray-800 text-left max-w-md mx-auto list-disc list-inside mb-6">
            <li>Learnerships & Internships</li>
            <li>Social Employment Fund Projects</li>
            <li>Enterprise Development Initiatives</li>
            <li>Community Empowerment Partnerships</li>
          </ul>
          <p className="text-gray-700">
            Interested in partnership or funding opportunities?
          </p>
          <p className="mt-2">
            📧{" "}
            <a
              href="mailto:admin@koketsorakhudufoundation.com"
              className="text-[#2b347c] underline"
            >
              admin@koketsorakhudufoundation.com
            </a>
          </p>
          <p className="text-gray-700">📞 +27 63 644 5723</p>
        </div>

        {/* ===== FOOTER CONTACT ===== */}
        <div className="text-center text-sm text-gray-600">
          <p>
            For donation confirmations or inquiries, please contact us at{" "}
            <a
              href="mailto:admin@koketsorakhudufoundation.com"
              className="text-[#2b347c] underline"
            >
              admin@koketsorakhudufoundation.com
            </a>
          </p>
          <p>📞 +27 63 644 5723 | 📞 +27 82 948 1438</p>
        </div>
      </div>
    </div>
  );
};

export default Donate;
