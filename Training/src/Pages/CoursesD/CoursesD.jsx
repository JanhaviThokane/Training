import { useState } from "react";
import { useNavigate } from "react-router-dom";

const allCourses = [
  { icon: "⚛️", title: "React & Next.js", level: "Beginner → Pro", duration: "48 hrs", lessons: 120, students: "85K+", rating: 4.9, color: "#f97316", tag: "Frontend", instructor: "Rahul Sharma", price: "₹4,999", badge: "Bestseller" },
  { icon: "🟨", title: "JavaScript Mastery", level: "Beginner → Pro", duration: "36 hrs", lessons: 95, students: "120K+", rating: 4.8, color: "#fb923c", tag: "Frontend", instructor: "Priya Mehta", price: "₹3,999", badge: "Trending" },
  { icon: "🐍", title: "Python & Django", level: "Beginner → Pro", duration: "52 hrs", lessons: 140, students: "95K+", rating: 4.9, color: "#fdba74", tag: "Backend", instructor: "Amit Verma", price: "₹5,499", badge: "Bestseller" },
  { icon: "☁️", title: "AWS & DevOps", level: "Intermediate", duration: "40 hrs", lessons: 110, students: "60K+", rating: 4.7, color: "#f97316", tag: "Cloud", instructor: "Neha Gupta", price: "₹6,999", badge: "Hot" },
  { icon: "🗄️", title: "Node.js & MongoDB", level: "Beginner → Pro", duration: "44 hrs", lessons: 115, students: "72K+", rating: 4.8, color: "#34d399", tag: "Backend", instructor: "Vikram Joshi", price: "₹4,499", badge: "New" },
  { icon: "📱", title: "React Native", level: "Intermediate", duration: "38 hrs", lessons: 100, students: "48K+", rating: 4.7, color: "#60a5fa", tag: "Mobile", instructor: "Sneha Patel", price: "₹5,999", badge: "" },
  { icon: "🔐", title: "Cyber Security", level: "Intermediate → Pro", duration: "56 hrs", lessons: 150, students: "35K+", rating: 4.9, color: "#a78bfa", tag: "Security", instructor: "Arjun Singh", price: "₹7,499", badge: "Hot" },
  { icon: "🤖", title: "AI & Machine Learning", level: "Intermediate → Pro", duration: "60 hrs", lessons: 160, students: "110K+", rating: 4.9, color: "#f472b6", tag: "AI/ML", instructor: "Dr. Kavita Rao", price: "₹8,999", badge: "Trending" },
  { icon: "🗃️", title: "SQL & Database Design", level: "Beginner → Pro", duration: "32 hrs", lessons: 85, students: "55K+", rating: 4.7, color: "#fbbf24", tag: "Backend", instructor: "Rohit Kapoor", price: "₹3,499", badge: "" },
];

const tags = ["All", "Frontend", "Backend", "Cloud", "Mobile", "Security", "AI/ML"];

const badgeColors = {
  Bestseller: { bg: "rgba(249,115,22,0.15)", color: "#f97316", border: "rgba(249,115,22,0.4)" },
  Trending:   { bg: "rgba(244,114,182,0.15)", color: "#f472b6", border: "rgba(244,114,182,0.4)" },
  Hot:        { bg: "rgba(239,68,68,0.15)",   color: "#f87171", border: "rgba(239,68,68,0.4)" },
  New:        { bg: "rgba(52,211,153,0.15)",  color: "#34d399", border: "rgba(52,211,153,0.4)" },
};

const Stars = ({ rating }) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <span className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: i < full ? "#f97316" : i === full && half ? "#f97316" : "#374151", fontSize: 12 }}>
          {i < full ? "★" : i === full && half ? "½" : "☆"}
        </span>
      ))}
    </span>
  );
};

const CoursesD = () => {
  const navigate = useNavigate();
  const [activeTag, setActiveTag] = useState("All");
  const [search, setSearch] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const filtered = allCourses.filter((c) => {
    const matchTag = activeTag === "All" || c.tag === activeTag;
    const matchSearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.instructor.toLowerCase().includes(search.toLowerCase());
    return matchTag && matchSearch;
  });

  return (
    <div className="relative w-full min-h-screen bg-[#000000] text-white overflow-x-hidden"
      style={{ fontFamily: "'Segoe UI', sans-serif" }}>

      {/* Glows */}
      <div className="fixed -top-40 -right-20 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 65%)", filter: "blur(60px)" }} />
      <div className="fixed -bottom-40 -left-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(234,88,12,0.12) 0%, transparent 65%)", filter: "blur(60px)" }} />

      {/* Grid */}
      <div className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(249,115,22,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

      {/* ── Top Bar ── */}
      <div className="relative z-10 flex items-center justify-between px-10 py-5"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
          <span className="text-2xl">⚡</span>
          <div>
            <div className="text-[14px] font-bold text-white leading-tight">Pro</div>
            <div className="text-[8px] tracking-[3px] uppercase text-orange-400">Academy</div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-[11px] text-orange-400 tracking-[3px] uppercase mb-0.5">Explore</p>
          <h2 className="text-[22px] font-black text-white">All Courses</h2>
        </div>

        <div className="flex items-center gap-3">
          <button
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-bold text-white cursor-pointer transition-all"
            style={{ background: "linear-gradient(135deg, #ea580c, #c2410c)", border: "none", boxShadow: "0 4px 20px rgba(234,88,12,0.4)" }}>
            <span style={{ fontSize: 16, fontWeight: 300 }}>＋</span>
            Add New Course
          </button>

          <button onClick={() => navigate("/")}
            className="w-10 h-10 flex items-center justify-center rounded-xl text-[#9ca3af] text-lg transition-all cursor-pointer"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(249,115,22,0.5)"; e.currentTarget.style.color = "#f97316"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#9ca3af"; }}>
            ✕
          </button>
        </div>
      </div>

      {/* ── Search + Filter ── */}
      <div className="relative z-10 flex flex-col items-center gap-5 px-10 pt-8 pb-6">
        <div className="relative w-full max-w-[520px]">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b7280] text-[15px]">🔍</span>
          <input type="text" placeholder="Search courses or instructors..."
            value={search} onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-5 py-3 rounded-xl text-[14px] text-white outline-none"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(12px)" }} />
        </div>

        <div className="flex gap-2 flex-wrap justify-center">
          {tags.map((tag) => (
            <button key={tag} onClick={() => setActiveTag(tag)}
              className="px-5 py-2 rounded-full text-[13px] font-medium cursor-pointer transition-all"
              style={{
                background: activeTag === tag ? "rgba(249,115,22,0.15)" : "rgba(255,255,255,0.03)",
                border: activeTag === tag ? "1px solid rgba(249,115,22,0.5)" : "1px solid rgba(255,255,255,0.08)",
                color: activeTag === tag ? "#fff" : "#6b7280",
              }}>
              {tag}
            </button>
          ))}
        </div>

        <p className="text-[13px] text-[#4b5563]">
          Showing <span className="text-orange-400 font-semibold">{filtered.length}</span> courses
        </p>
      </div>

      {/* ── Course Grid ── */}
      <div className="relative z-10 px-10 pb-16">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-[18px] text-[#6b7280]">No courses found for <span className="text-orange-400">"{search}"</span></p>
            <p className="text-[13px] text-[#4b5563] mt-2">Try a different keyword or category</p>
          </div>
        ) : (
          <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
            {filtered.map((c, i) => {
              const isHovered = hoveredIndex === i;
              return (
                <div key={i}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="rounded-2xl p-6 flex flex-col gap-3 cursor-pointer"
                  style={{
                    background: isHovered ? "linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))" : "rgba(255,255,255,0.03)",
                    border: `1px solid ${isHovered ? c.color + "66" : "rgba(255,255,255,0.07)"}`,
                    transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                    boxShadow: isHovered ? `0 12px 40px ${c.color}22` : "none",
                    transition: "all 0.25s ease",
                  }}>
                  <div className="flex items-start justify-between">
                    <div className="text-[38px] leading-none">{c.icon}</div>
                    {c.badge && badgeColors[c.badge] && (
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                        style={{ background: badgeColors[c.badge].bg, color: badgeColors[c.badge].color, border: `1px solid ${badgeColors[c.badge].border}` }}>
                        {c.badge}
                      </span>
                    )}
                  </div>

                  <span className="text-[11px] font-semibold w-fit px-2.5 py-0.5 rounded-full"
                    style={{ background: `${c.color}18`, color: c.color, border: `1px solid ${c.color}40` }}>
                    {c.tag}
                  </span>

                  <h3 className="text-[17px] font-bold text-white leading-snug">{c.title}</h3>
                  <p className="text-[12px] text-[#6b7280]">{c.level}</p>

                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                      style={{ background: `linear-gradient(135deg, ${c.color}, #c2410c)` }}>
                      {c.instructor.charAt(0)}
                    </div>
                    <p className="text-[12px] text-[#9ca3af]">{c.instructor}</p>
                  </div>

                  <div style={{ height: 1, background: "rgba(255,255,255,0.06)" }} />

                  <div className="flex gap-4 text-[12px] text-[#6b7280]">
                    <span>⏱ {c.duration}</span>
                    <span>📚 {c.lessons} lessons</span>
                    <span>👥 {c.students}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Stars rating={c.rating} />
                    <span className="text-[12px] text-orange-400 font-semibold">{c.rating}</span>
                  </div>

                  <div className="flex items-center justify-between mt-1">
                    <span className="text-[20px] font-extrabold text-white">{c.price}</span>
                    <button className="px-5 py-2 rounded-xl text-[13px] font-bold text-white cursor-pointer transition-all"
                      style={{
                        background: isHovered ? `linear-gradient(135deg, ${c.color}, #c2410c)` : "rgba(255,255,255,0.07)",
                        border: isHovered ? "none" : "1px solid rgba(255,255,255,0.12)",
                        boxShadow: isHovered ? `0 4px 16px ${c.color}44` : "none",
                        transition: "all 0.25s ease",
                      }}>
                      Enroll Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="relative z-10 text-center py-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <p className="text-[13px] text-[#4b5563]">© 2025 Pro Academy · Made with ❤️ in India</p>
      </div>
    </div>
  );
};

export default CoursesD;