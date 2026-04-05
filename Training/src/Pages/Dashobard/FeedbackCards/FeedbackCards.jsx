const feedbacks = [
  {
    name: "Aarav Sharma",
    role: "Full Stack Developer @ Infosys",
    avatar: "https://i.pravatar.cc/60?img=3",
    text: "Pro Academy completely transformed my career. The React & Next.js course was incredibly hands-on. Within 3 months of completing the bootcamp, I landed my dream job at Infosys!",
    course: "React & Next.js",
    rating: 5,
    bg: "#1a1a1a",
  },
  {
    name: "Priya Verma",
    role: "Data Scientist @ TCS",
    avatar: "https://i.pravatar.cc/60?img=5",
    text: "The Data Science course with Gen AI integration was mind-blowing. The instructors are top-notch and the placement support team helped me crack interviews at top MNCs.",
    course: "Data Science & Gen AI",
    rating: 5,
    bg: "#1c1410",
  },
  {
    name: "Rohan Patel",
    role: "Backend Engineer @ Wipro",
    avatar: "https://i.pravatar.cc/60?img=7",
    text: "I had zero coding experience before joining. The structured curriculum and live doubt sessions made all the difference. Got placed with a 6 LPA package!",
    course: "Python & Django",
    rating: 5,
    bg: "#111a14",
  },
  {
    name: "Sneha Kulkarni",
    role: "DevOps Engineer @ HCL",
    avatar: "https://i.pravatar.cc/60?img=9",
    text: "The AWS & DevOps course was exactly what the industry demands. Real-world projects gave me the confidence to ace technical interviews. Highly recommend!",
    course: "AWS & DevOps",
    rating: 5,
    bg: "#0f1520",
  },
  {
    name: "Karan Mehta",
    role: "Frontend Developer @ Accenture",
    avatar: "https://i.pravatar.cc/60?img=15",
    text: "From a non-CS background to a frontend developer role — Pro Academy made it possible. The JavaScript Mastery course is pure gold. Every rupee was worth it.",
    course: "JavaScript Mastery",
    rating: 5,
    bg: "#1a1018",
  },
];

const FeedbackCards = () => {
  return (
    <section
      style={{
        width: "100%",
        maxWidth: "820px",
        margin: "0 auto",
        padding: "0 0 120px",
      }}
    >
      {/* Section heading */}
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <p
          style={{
            fontSize: "13px",
            color: "#f97316",
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          Student Stories
        </p>
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "900",
            color: "#fff",
            lineHeight: "1.2",
            margin: 0,
          }}
        >
          Real Results From{" "}
          <span style={{ color: "#f97316" }}>Real Students</span>
        </h2>
      </div>

      {/* Sticky stacking cards */}
      <div style={{ position: "relative" }}>
        {feedbacks.map((item, i) => (
          <div
            key={i}
            style={{
              position: "sticky",
              top: `${60 + i * 24}px`,
              zIndex: i + 1,
              marginBottom: "0",
            }}
          >
            <div
              style={{
                background: item.bg,
                border: "1px solid rgba(249,115,22,0.15)",
                borderRadius: "24px",
                padding: "36px 40px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                boxShadow: `0 ${8 + i * 4}px ${32 + i * 8}px rgba(0,0,0,0.5)`,
                transform: `scale(${1 - (feedbacks.length - 1 - i) * 0.015})`,
                transformOrigin: "top center",
                transition: "box-shadow 0.3s",
              }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: "4px" }}>
                {[...Array(item.rating)].map((_, s) => (
                  <span
                    key={s}
                    style={{ color: "#f97316", fontSize: "16px" }}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p
                style={{
                  fontSize: "17px",
                  color: "#d1d5db",
                  lineHeight: "1.75",
                  margin: 0,
                  fontStyle: "italic",
                }}
              >
                "{item.text}"
              </p>

              {/* Footer */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "16px",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <img
                    src={item.avatar}
                    alt={item.name}
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "2px solid rgba(249,115,22,0.4)",
                    }}
                  />
                  <div>
                    <p
                      style={{
                        margin: 0,
                        fontWeight: "700",
                        fontSize: "15px",
                        color: "#fff",
                      }}
                    >
                      {item.name}
                    </p>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "13px",
                        color: "#6b7280",
                      }}
                    >
                      {item.role}
                    </p>
                  </div>
                </div>

                <span
                  style={{
                    fontSize: "12px",
                    padding: "5px 14px",
                    borderRadius: "999px",
                    background: "rgba(249,115,22,0.1)",
                    color: "#f97316",
                    border: "1px solid rgba(249,115,22,0.3)",
                  }}
                >
                  {item.course}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeedbackCards;