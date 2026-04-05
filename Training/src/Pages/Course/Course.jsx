import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Course = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userName = location.state?.userName || "Student";
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 30);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Syne:wght@400;500;600;700;800&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .course-root {
          font-family: 'Syne', sans-serif;
          background: #080808;
          position: fixed; inset: 0; z-index: 50;
          display: flex; overflow: hidden;
        }
        .noise {
          position: fixed; inset: 0; z-index: 0; pointer-events: none; opacity: 0.035;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 180px;
        }
        .left {
          flex: 1; min-width: 0;
          display: flex; flex-direction: column; justify-content: center;
          padding: 64px 72px; position: relative; overflow: hidden; background: #080808;
        }
        .left-blob-1 { position: absolute; width: 700px; height: 700px; border-radius: 50%; background: radial-gradient(circle, rgba(251,146,60,0.11) 0%, transparent 65%); top: -180px; left: -200px; pointer-events: none; }
        .left-blob-2 { position: absolute; width: 350px; height: 350px; border-radius: 50%; background: radial-gradient(circle, rgba(251,146,60,0.07) 0%, transparent 70%); bottom: -60px; right: 40px; pointer-events: none; }
        .dot-grid { position: absolute; inset: 0; pointer-events: none; background-image: radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px); background-size: 28px 28px; mask-image: radial-gradient(ellipse 80% 80% at 20% 30%, black 30%, transparent 100%); }
        .accent-line { position: absolute; width: 1px; height: 340px; background: linear-gradient(to bottom, transparent, rgba(251,146,60,0.25), transparent); left: 0; top: 50%; transform: translateY(-50%); }
        .badge { display: inline-flex; align-items: center; gap: 9px; border: 1px solid rgba(251,146,60,0.25); border-radius: 4px; padding: 7px 18px; font-size: 10px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #fb923c; background: rgba(251,146,60,0.06); width: fit-content; }
        .badge-dot { width: 5px; height: 5px; border-radius: 50%; background: #f97316; box-shadow: 0 0 8px #f97316; animation: pulse 2s ease-in-out infinite; }
        @keyframes pulse { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(0.8); } }
        .heading-wrap { line-height: 1; margin: 32px 0 0; }
        .heading-welcome { font-family: 'Playfair Display', serif; font-style: italic; font-weight: 700; font-size: clamp(32px, 3.8vw, 54px); color: rgba(255,255,255,0.18); letter-spacing: -1px; display: block; }
        .heading-name { font-family: 'Syne', sans-serif; font-weight: 800; font-size: clamp(28px, 3.2vw, 46px); letter-spacing: -1px; display: block; background: linear-gradient(125deg, #fff 0%, #fb923c 55%, #f97316 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-top: 4px; }
        .rule { display: flex; align-items: center; gap: 14px; margin: 36px 0; }
        .rule-line { width: 48px; height: 1px; background: linear-gradient(90deg, #f97316, transparent); }
        .rule-text { font-size: 10px; letter-spacing: 3px; text-transform: uppercase; color: rgba(255,255,255,0.2); font-weight: 600; }
        .body-copy { font-size: 14px; line-height: 1.75; color: rgba(255,255,255,0.35); max-width: 380px; font-weight: 400; }
        .body-copy strong { color: #fb923c; font-weight: 600; }
        .stats { display: flex; gap: 0; margin-top: 52px; }
        .stat { padding: 0 32px 0 0; margin-right: 32px; border-right: 1px solid rgba(255,255,255,0.06); }
        .stat:last-child { border-right: none; }
        .stat-val { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 26px; color: white; letter-spacing: -0.5px; }
        .stat-val span { color: #f97316; }
        .stat-label { font-size: 9px; letter-spacing: 2.5px; text-transform: uppercase; color: rgba(255,255,255,0.2); margin-top: 4px; font-weight: 600; }
        .right { width: 40%; min-width: 360px; background: #0c0c0c; border-left: 1px solid rgba(255,255,255,0.05); display: flex; flex-direction: column; justify-content: center; padding: 64px 52px; position: relative; overflow: hidden; }
        .right::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(251,146,60,0.3), transparent); }
        .right-eyebrow { font-size: 9px; letter-spacing: 3.5px; text-transform: uppercase; color: rgba(255,255,255,0.2); font-weight: 700; margin-bottom: 12px; }
        .right-heading { font-family: 'Playfair Display', serif; font-style: italic; font-size: 30px; font-weight: 700; color: white; line-height: 1.25; margin-bottom: 36px; }
        .right-heading em { font-style: normal; -webkit-text-stroke: 1px rgba(251,146,60,0.5); color: transparent; }
        .card { background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 28px 26px; cursor: pointer; position: relative; overflow: hidden; transition: border-color 0.3s ease, transform 0.35s cubic-bezier(0.23,1,0.32,1), box-shadow 0.35s ease; margin-bottom: 16px; }
        .card::after { content: ''; position: absolute; inset: 0; border-radius: 16px; opacity: 0; transition: opacity 0.3s ease; }
        .card-orange::after { background: linear-gradient(135deg, rgba(249,115,22,0.07), transparent 60%); }
        .card-indigo::after { background: linear-gradient(135deg, rgba(99,102,241,0.07), transparent 60%); }
        .card:hover { transform: translateY(-3px); }
        .card-orange:hover { border-color: rgba(249,115,22,0.35); box-shadow: 0 16px 48px rgba(249,115,22,0.1); }
        .card-indigo:hover { border-color: rgba(99,102,241,0.35); box-shadow: 0 16px 48px rgba(99,102,241,0.1); }
        .card:hover::after { opacity: 1; }
        .card:hover .arrow-icon { opacity: 1; transform: translate(3px,-3px); }
        .arrow-icon { position: absolute; top: 22px; right: 22px; color: #f97316; font-size: 16px; opacity: 0; transition: all 0.3s ease; }
        .card-indigo .arrow-icon { color: #818cf8; }
        .card-top { display: flex; align-items: center; gap: 16px; margin-bottom: 14px; }
        .icon-box { width: 44px; height: 44px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0; }
        .icon-box-orange { background: rgba(249,115,22,0.1); }
        .icon-box-indigo { background: rgba(99,102,241,0.1); }
        .chip { font-size: 9px; letter-spacing: 2px; text-transform: uppercase; font-weight: 700; padding: 4px 11px; border-radius: 4px; }
        .chip-orange { background: rgba(249,115,22,0.1); color: #fb923c; }
        .chip-indigo { background: rgba(99,102,241,0.1); color: #a5b4fc; }
        .card-title { font-size: 17px; font-weight: 700; color: white; margin-bottom: 6px; letter-spacing: -0.3px; }
        .card-desc { font-size: 13px; line-height: 1.6; color: rgba(255,255,255,0.3); }
        .close-btn { position: absolute; top: 22px; right: 22px; width: 34px; height: 34px; border-radius: 8px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); color: rgba(255,255,255,0.35); font-size: 16px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s; z-index: 10; }
        .close-btn:hover { background: rgba(255,255,255,0.08); color: white; }
        .footer-note { margin-top: 24px; text-align: center; font-size: 11px; color: rgba(255,255,255,0.1); letter-spacing: 0.5px; }
        .fade-up { opacity: 0; transform: translateY(24px); transition: opacity 0.65s cubic-bezier(0.23,1,0.32,1), transform 0.65s cubic-bezier(0.23,1,0.32,1); }
        .fade-up.show { opacity: 1; transform: translateY(0); }
        .d1 { transition-delay: 0.08s; } .d2 { transition-delay: 0.18s; } .d3 { transition-delay: 0.3s; }
        .d4 { transition-delay: 0.42s; } .d5 { transition-delay: 0.54s; } .d6 { transition-delay: 0.66s; }
      `}</style>

      <div className="course-root">
        <div className="noise" />

        <div className="left">
          <div className="left-blob-1" /><div className="left-blob-2" />
          <div className="dot-grid" /><div className="accent-line" />
          <button className="close-btn" onClick={() => navigate("/")}>×</button>

          <div className={`fade-up d1 ${visible ? "show" : ""}`}>
            <div className="badge"><span className="badge-dot" />Pro Academy</div>
          </div>

          <div className={`fade-up d2 ${visible ? "show" : ""} heading-wrap`}>
            <span className="heading-welcome">Welcome,</span>
            <span className="heading-name">{userName.toUpperCase()}</span>
          </div>

          <div className={`fade-up d3 ${visible ? "show" : ""} rule`}>
            <div className="rule-line" /><span className="rule-text">Your journey begins</span>
          </div>

          <div className={`fade-up d3 ${visible ? "show" : ""}`}>
            <p className="body-copy">
              You're officially part of a community of over <strong>1 million students</strong> worldwide.
              Master new skills at your own pace — the world is ready to learn from you.
            </p>
          </div>

          <div className={`fade-up d4 ${visible ? "show" : ""} stats`}>
            {[{ val: "10K", suffix: "+", label: "Courses" }, { val: "500", suffix: "+", label: "Instructors" }, { val: "1M", suffix: "+", label: "Students" }].map((s) => (
              <div key={s.label} className="stat">
                <div className="stat-val">{s.val}<span>{s.suffix}</span></div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="right">
          <div className={`fade-up d2 ${visible ? "show" : ""} right-eyebrow`}>Get Started</div>
          <div className={`fade-up d3 ${visible ? "show" : ""} right-heading`}>
            What do you want<br />to <em>do today?</em>
          </div>

          <div className={`fade-up d4 ${visible ? "show" : ""} card card-orange`} onClick={() => navigate("/coursesd")}>
            <span className="arrow-icon">↗</span>
            <div className="card-top"><div className="icon-box icon-box-orange">✏️</div><span className="chip chip-orange">Instructor</span></div>
            <div className="card-title">Create a Course</div>
            <p className="card-desc">Share your expertise. Build structured lessons, quizzes, and projects to teach the world.</p>
          </div>

          <div className={`fade-up d5 ${visible ? "show" : ""} card card-indigo`} style={{ marginBottom: 0 }} onClick={() => navigate("/coursesd")}>
            <span className="arrow-icon">↗</span>
            <div className="card-top"><div className="icon-box icon-box-indigo">🔍</div><span className="chip chip-indigo">Student</span></div>
            <div className="card-title">Explore Courses</div>
            <p className="card-desc">Dive into thousands of curated courses across tech, design, business, and more.</p>
          </div>

          <div className={`fade-up d6 ${visible ? "show" : ""} footer-note`}>
            You can always switch roles from your dashboard.
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;