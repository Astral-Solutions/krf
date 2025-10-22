import React from "react";

const news = [
  {
    title: "KRF Launches AI & 4IR Hub in Soweto",
    date: "September 2025",
    content:
      "The Boundless Soweto Campus officially opens, introducing youth to Artificial Intelligence, robotics, and coding.",
  },
  {
    title: "Breaking the Silence Podcast Launch",
    date: "July 2025",
    content:
      "A platform to engage communities in dialogue around mental health, leadership, and inclusive education.",
  },
  {
    title: "Partnership Signed with Aurum Institute",
    date: "May 2025",
    content:
      "KRF collaborates with the Aurum Institute to expand research opportunities and public health education initiatives.",
  },
];

const News = () => (
  <div className="bg-white py-16 px-6">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-5xl font-bold text-[#c27700] mb-8 text-center">News & Notices</h1>
      <div className="space-y-8">
        {news.map((item, i) => (
          <div key={i} className="border-b pb-6">
            <h2 className="text-2xl font-semibold text-[#c27700] mb-2">{item.title}</h2>
            <p className="text-sm text-gray-500 mb-2">{item.date}</p>
            <p className="text-gray-700">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default News;
