import { useNavigate } from "react-router-dom";
import FeedbackCards from "./FeedbackCards/FeedbackCards";
const Dashboard = () => {
  const navigate = useNavigate();

  const navLinks = ["Home", "Courses", "Bootcamp", "Request Callback"];

  const avatars = [
    "https://i.pravatar.cc/40?img=11",
    "https://i.pravatar.cc/40?img=12",
    "https://i.pravatar.cc/40?img=13",
    "https://i.pravatar.cc/40?img=14",
  ];

  const stats = [
    { value: "50+", label: "Expert Instructors" },
    { value: "200+", label: "Video Courses" },
    { value: "1M+", label: "Students Enrolled" },
    { value: "95%", label: "Placement Rate" },
  ];

  const courses = [
    { icon: "⚛️", title: "React & Next.js", level: "Beginner → Pro", duration: "48 hrs", color: "#f97316" },
    { icon: "🟨", title: "JavaScript Mastery", level: "Beginner → Pro", duration: "36 hrs", color: "#fb923c" },
    { icon: "🐍", title: "Python & Django", level: "Beginner → Pro", duration: "52 hrs", color: "#fdba74" },
    { icon: "☁️", title: "AWS & DevOps", level: "Intermediate", duration: "40 hrs", color: "#f97316" },
  ];

  const socials = [
    { label: "Instagram", icon: "📸" },
    { label: "LinkedIn", icon: "💼" },
    { label: "Discord", icon: "🎮" },
    { label: "YouTube", icon: "▶️" },
    { label: "X", icon: "𝕏" },
  ];

  const handleNavClick = (link) => {
    if (link === "Courses") navigate("/coursesd");
  };

  return (
    <div className="relative w-full min-h-screen bg-[#000000] text-white overflow-hidden"
      style={{ fontFamily: "'Segoe UI', sans-serif" }}>

      {/* Glows */}
      <div className="absolute -top-44 -right-20 w-[650px] h-[650px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.22) 0%, transparent 65%)", filter: "blur(60px)" }} />
      <div className="absolute -bottom-44 -left-20 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(234,88,12,0.15) 0%, transparent 65%)", filter: "blur(60px)" }} />
      <div className="absolute left-1/2 top-[30%] w-[800px] h-[400px] rounded-full pointer-events-none -translate-x-1/2"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)", filter: "blur(40px)" }} />

      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(249,115,22,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

      {/* ── NAVBAR ── */}
      <nav className="relative z-10 flex items-center justify-between px-16 py-5">
        <div className="flex items-center gap-2">
          <span className="text-3xl">⚡</span>
          <div>
            <div className="text-[15px] font-bold text-white leading-tight">Pro</div>
            <div className="text-[9px] tracking-[3px] uppercase text-orange-400">Academy</div>
          </div>
        </div>

        <div className="flex gap-1 rounded-full px-2 py-1.5"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(12px)" }}>
          {navLinks.map((link) => (
            <button key={link} onClick={() => handleNavClick(link)}
              className="px-5 py-2 rounded-full text-sm font-medium cursor-pointer transition-all"
              style={{
                background: link === "Home" ? "rgba(249,115,22,0.15)" : "transparent",
                border: link === "Home" ? "1px solid rgba(249,115,22,0.5)" : "1px solid transparent",
                color: link === "Home" ? "#fff" : "#6b7280",
              }}>
              {link}
            </button>
          ))}
        </div>

        <div className="flex gap-3">
          <button onClick={() => navigate("/signin")}
            className="px-7 py-2.5 rounded-lg text-sm font-medium text-[#d1d5db] cursor-pointer transition-all hover:bg-white/5"
            style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.15)" }}>
            Sign In
          </button>
          <button onClick={() => navigate("/signup")}
            className="px-7 py-2.5 rounded-lg text-sm font-bold text-white cursor-pointer transition-all"
            style={{ background: "linear-gradient(135deg, #ea580c, #c2410c)", border: "none", boxShadow: "0 4px 20px rgba(234,88,12,0.4)" }}>
            Sign Up
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <main className="relative z-10 flex flex-col items-center text-center px-5 pt-16 pb-10">

        <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[13px] text-orange-200 mb-6"
          style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.3)" }}>
          🎓 &nbsp; India's #1 Online Coding Platform
        </div>

        <p className="text-orange-400 text-[13px] font-semibold tracking-[4px] uppercase mb-5">
          LEARN. &nbsp;&nbsp; BUILD. &nbsp;&nbsp; GET PLACED.
        </p>

        <h1 className="text-[52px] font-black leading-tight max-w-[820px] mb-5">
          Master In-Demand Skills &amp;
          <br />
          Land Your{" "}
          <span className="relative inline-block mx-1">
            Dream Job
            <span className="absolute inset-0 -mx-2 rounded-md pointer-events-none"
              style={{ border: "2px solid #f97316" }} />
          </span>
          {" "}in Tech!
        </h1>

        <p className="text-[#6b7280] text-[17px] max-w-[540px] leading-relaxed mb-8">
          Industry-led courses, real-world projects, and dedicated placement
          support — everything you need to become job-ready.
        </p>

        <div className="flex items-center gap-4 mb-9">
          <div className="relative" style={{ width: `${avatars.length * 28 + 12}px`, height: "44px" }}>
            {avatars.map((src, i) => (
              <img key={i} src={src} alt="student"
                className="absolute w-11 h-11 rounded-full object-cover"
                style={{ left: `${i * 28}px`, zIndex: i, border: "2.5px solid #0a0a0a" }} />
            ))}
          </div>
          <p className="text-[#9ca3af] text-sm m-0">
            <strong className="text-orange-400 text-[15px]">1 Million+</strong>{" "}
            Students already learning with us
          </p>
        </div>

        <div className="flex gap-4 mb-16">
          <button onClick={() => navigate("/coursesd")}
            className="px-10 py-4 rounded-xl text-[15px] font-bold text-white cursor-pointer transition-all"
            style={{ background: "linear-gradient(135deg, #ea580c, #c2410c)", border: "none", boxShadow: "0 6px 28px rgba(132,86,61,0.45)" }}>
            Explore Courses →
          </button>
          <button className="px-9 py-4 rounded-xl text-[15px] font-semibold text-[#d1d5db] cursor-pointer transition-all hover:bg-white/5"
            style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.12)" }}>
            ▶ &nbsp; Watch Demo
          </button>
        </div>

        <div className="flex w-full max-w-[700px] rounded-2xl overflow-hidden mb-16"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", backdropFilter: "blur(12px)" }}>
          {stats.map((s, i) => (
            <div key={i} className="flex-1 py-6 text-center"
              style={{ borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
              <div className="text-[26px] font-extrabold text-orange-400">{s.value}</div>
              <div className="text-[12px] text-[#4b5563] mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="w-full max-w-[900px]">
          <p className="text-[13px] text-orange-400 tracking-[3px] uppercase mb-5">Popular Courses</p>
          <div className="grid grid-cols-4 gap-4">
            {courses.map((c, i) => (
              <div key={i} onClick={() => navigate("/coursesd")}
                className="rounded-2xl p-5 text-left cursor-pointer transition-all"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = c.color + "88"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"}>
                <div className="text-[32px] mb-3">{c.icon}</div>
                <div className="text-[15px] font-bold mb-1">{c.title}</div>
                <div className="text-[12px] text-[#4b5563] mb-3">{c.level}</div>
                <div className="inline-block text-[11px] rounded-full px-2.5 py-0.5"
                  style={{ background: `${c.color}18`, color: c.color, border: `1px solid ${c.color}40` }}>
                  ⏱ {c.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
         <div className="w-full max-w-[900px] mt-20">
          <FeedbackCards />
        </div>
      </main>

      {/* Dot decoration */}
      <div className="absolute right-12 top-[25%] w-40 h-40 pointer-events-none opacity-20"
        style={{ backgroundImage: "radial-gradient(circle, rgba(249,115,22,0.6) 1.5px, transparent 1.5px)", backgroundSize: "14px 14px" }} />

      {/* ── FOOTER ── */}
      <footer className="relative z-10 px-20 pt-16 pb-10 mt-10"
        style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-7">
            <span className="text-3xl">⚡</span>
            <div>
              <div className="text-[16px] font-bold text-white leading-tight">Pro</div>
              <div className="text-[9px] tracking-[3px] uppercase text-orange-400">Academy</div>
            </div>
          </div>
          <div className="flex gap-5">
            {socials.map((s) => (
              <div key={s.label} title={s.label}
                className="w-10 h-10 flex items-center justify-center rounded-lg text-lg cursor-pointer transition-all"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(249,115,22,0.5)"; e.currentTarget.style.background = "rgba(249,115,22,0.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}>
                {s.icon}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-10 mb-12">
          <div>
            <p className="text-[12px] font-bold tracking-[3px] uppercase text-orange-400 mb-5">About</p>
            {["About Us", "Support", "Terms and Condition", "Privacy Policy", "Submit Projects"].map(link => (
              <p key={link} className="text-[14px] text-[#6b7280] mb-3.5 cursor-pointer transition-colors hover:text-white">{link}</p>
            ))}
          </div>
          <div>
            <p className="text-[12px] font-bold tracking-[3px] uppercase text-orange-400 mb-5">Company</p>
            {["Hire From Us", "Discord", "Pricing and Refund", "Jobs", "Feedback"].map(link => (
              <p key={link} className="text-[14px] text-[#6b7280] mb-3.5 cursor-pointer transition-colors hover:text-white">{link}</p>
            ))}
          </div>
          <div>
            <p className="text-[12px] font-bold tracking-[3px] uppercase text-orange-400 mb-5">Contact</p>
            {[
              { label: "Online: 11am - 8pm", value: "+91 9993478545" },
              { label: "Offline: 11am - 8pm", value: "+91 9691778470" },
              { label: "", value: "hello@pro.com" },
              { label: "", value: "23-B, Sector C Indrapuri, Bhopal (MP), 462023" },
            ].map((item, i) => (
              <p key={i} className="text-[14px] text-[#6b7280] mb-3.5 leading-relaxed">
                {item.label && <span className="text-[#9ca3af]">{item.label}<br /></span>}
                <span className="text-[#d1d5db]">{item.value}</span>
              </p>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-[13px] text-[#4b5563]">© 2025 Pro Academy. All rights reserved.</p>
          <p className="text-[13px] text-[#4b5563]">Made with ❤️ in India</p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;