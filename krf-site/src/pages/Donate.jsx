// src/pages/Donate.jsx
import React from "react";
import { Helmet } from "react-helmet";

const Donate = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <Helmet>
        <title>Donate | Koketso Rakhudu Foundation</title>
      </Helmet>

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-[#c27700] mb-4">
          Support Our Mission
        </h1>
        <p className="text-gray-700 text-center mb-8">
          If you believe in the Koketso Rakhudu Foundation's mission to empower and uplift the community through sustainable and inclusive education, we invite you to support us. Every donation makes a difference and helps us continue our work.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-md p-6 mb-8">
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

        <div className="text-center text-sm text-gray-600">
          <p>
            For donation confirmations or inquiries, please contact us at{" "}
            <a
              href="mailto:admin@koketsoeakhudufoundation.com"
              className="text-[#2b347c] underline"
            >
              admin@koketsoeakhudufoundation.com
            </a>
          </p>
          <p>📞 +27 63 644 5723 | 📞 +27 82 948 1438</p>
        </div>
      </div>
    </div>
  );
};

export default Donate;
