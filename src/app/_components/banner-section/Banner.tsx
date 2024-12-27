import React from "react";
import "./banner.css";

const audioFilesLeft = [
  { title: "تسجيل 1", path: "/audio/recording1.wav" },
  { title: "تسجيل 2", path: "/audio/recording2.wav" },
  { title: "تسجيل 3", path: "/audio/recording3.wav" },
];
const audioFilesRight = [
  { title: "تسجيل 1", path: "/audio/recording1.wav" },
  { title: "تسجيل 2", path: "/audio/recording2.wav" },
  { title: "تسجيل 3", path: "/audio/recording3.wav" },
];
const Banner = () => {
  return (
    <section className="banner-section">
      <div className="overlay">
        <div className="container flex flex-col justify-center items-center">
          <div className="content  flex flex-col gap-2">
            <div className="title">
              <h2 className="text-4xl text-orange">
                شركة آمگــو للتنظيف ونقل الأثاث بالرياض
              </h2>
            </div>
            <div className="comment text-center">
              <h2 className="text-3xl">تعليقات صوتية لعملائنا</h2>
            </div>
          </div>
          <div className="recorder-comments flex flex-col md:flex-row gap-5">
            <div className="left">
              <ul className="flex flex-col gap-3">
                {audioFilesLeft.map((file, index) => (
                  <li key={index}>
                    <audio controls>
                      <source src={file.path} type="audio/wav" /> متصفحك لا يدعم
                      تشغيل الملفات الصوتية.
                    </audio>
                  </li>
                ))}
              </ul>
            </div>
            <div className="right">
              <ul className="flex flex-col gap-3">
                {audioFilesRight.map((file, index) => (
                  <li key={index}>
                    <audio controls>
                      <source src={file.path} type="audio/wav" /> متصفحك لا يدعم
                      تشغيل الملفات الصوتية.
                    </audio>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
