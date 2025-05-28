import React from "react";

const programs = [
  { name: "Social, Women & Disability", value: "R307,000", beneficiaries: 300 },
  { name: "Small Business Skills Development", value: "R450,000", beneficiaries: 100 },
  { name: "Grade 12 Re-write Programme", value: "R250,000", beneficiaries: 200 },
  { name: "Exchange Student Programme", value: "R350,000", beneficiaries: 20 },
  { name: "Office Practice NQF 4", value: "R150,000", beneficiaries: 100 },
  { name: "Project Management NQF 4", value: "R150,000", beneficiaries: 100 },
  { name: "Business Practice NQF 4", value: "R150,000", beneficiaries: 250 },
  { name: "Office & Project Management", value: "R230,000", beneficiaries: 300 },
  { name: "ABSA & Classic Oriental SMME", value: "R1,000,000", beneficiaries: 450 },
  { name: "Anglo American ECD", value: "R850,000", beneficiaries: 450 },
];

const Impact = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-[#2b347c] mb-6">Our Impact</h1>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow">
        <thead>
          <tr className="bg-blue-50 text-left">
            <th className="p-4 border-b">Programme/Project</th>
            <th className="p-4 border-b">Value</th>
            <th className="p-4 border-b">No. of Beneficiaries</th>
          </tr>
        </thead>
        <tbody>
          {programs.map((p, idx) => (
            <tr key={idx} className="hover:bg-blue-50">
              <td className="p-4 border-b">{p.name}</td>
              <td className="p-4 border-b">{p.value}</td>
              <td className="p-4 border-b">{p.beneficiaries}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-4 text-sm text-gray-600">Total Value (2016–2023): R4,459,253 | Total Beneficiaries: 1106</p>
    </div>
  );
};

export default Impact;
