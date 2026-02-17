import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/footer-bg.jpg";
import Navbar from "../components/Navbar";
import HomePage4 from "./HomePage4";


export default function AboutUsExact() {
  const navigate = useNavigate();
  const [hoverBtn, setHoverBtn] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const styles = {
    section: {
      minHeight: "100vh",
      backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.55)), url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      fontFamily: "Montserrat, sans-serif",
      color: "#e7dcc6",
    },

    heroNav: {
      width: "90%",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "30px 0",
    },

    navGroup: {
      display: "flex",
      alignItems: "center",
    },

    navGroupLink: {
      color: "#e7dcc6",
      textDecoration: "none",
      fontSize: "13px",
      letterSpacing: "3px",
      margin: "0 25px",
      transition: "all 0.4s ease",
      cursor: "pointer",
    },

    heroLogo: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    logoText: {
      fontSize: "34px",
      letterSpacing: "7px",
      fontWeight: 800,
      background: "linear-gradient(180deg, #85c1e9, #3498db, #8b6b32)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textShadow: "0 0 20px rgba(52,152,219,0.25)",
    },

    pageContent: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "100px 20px 80px",
      textAlign: "center",
    },

    title: {
      fontSize: "44px",
      letterSpacing: "8px",
      fontWeight: 700,
      color: "#aed6f1",
      textShadow: "0 6px 25px rgba(0,0,0,0.7)",
    },

    subtitle: {
      marginTop: "20px",
      fontSize: "15px",
      letterSpacing: "4px",
      color: "#85c1e9",
    },

    description: {
      margin: "40px auto",
      maxWidth: "750px",
      fontSize: "15px",
      lineHeight: 1.9,
      color: "rgba(231,220,198,0.9)",
    },

    highlight: {
      fontWeight: 700,
      color: "#85c1e9",
    },

    divider: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "50px",
    },

    line: {
      width: "120px",
      height: "1px",
      background: "rgba(216,194,154,0.6)",
    },

    star: {
      margin: "0 20px",
      color: "#3498db",
      fontSize: "14px",
    },

    ctaButton: {
      marginTop: "50px",
      display: "inline-block",
      padding: "14px 40px",
      border: "1px solid rgba(216,194,154,0.7)",
      letterSpacing: "4px",
      fontSize: "13px",
      cursor: "pointer",
      color: hoverBtn ? "#000" : "#e7dcc6",
      backgroundColor: hoverBtn ? "#3498db" : "transparent",
      transition: "all 0.4s ease",
      boxShadow: hoverBtn ? "0 0 25px rgba(52,152,219,0.6)" : "none",
    },

    bottomDivider: {
      margin: "70px auto 50px",
      height: "1px",
      maxWidth: "800px",
      background: "rgba(216,194,154,0.25)",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "50px",
      marginTop: "60px",
    },

    card: {
      padding: "35px 30px",
      background: "rgba(0,0,0,0.4)",
      border: "1px solid rgba(216,194,154,0.3)",
      backdropFilter: "blur(6px)",
      transition: "transform 0.4s ease, box-shadow 0.4s ease",
    },

    cardTitle: {
      fontSize: "18px",
      letterSpacing: "4px",
      color: "#aed6f1",
    },

    cardSubtitle: {
      marginTop: "10px",
      fontSize: "12px",
      letterSpacing: "3px",
      color: "#85c1e9",
    },

    cardDesc: {
      marginTop: "20px",
      fontSize: "14px",
      lineHeight: 1.7,
      color: "rgba(231,220,198,0.85)",
    },
  };

  return (
    <>
    <section style={styles.section}>
      {/* NAV */}
      <nav style={styles.heroNav}>
        <Navbar/>
      </nav>

      {/* CONTENT */}
      <div style={styles.pageContent}>
        <h1 style={styles.title}>ABOUT US</h1>
        <h2 style={styles.subtitle}>FOR THE ADVENTUROUS SOULS</h2>

        <p style={styles.description}>
          Welcome to <span style={styles.highlight}>JOIN THE GODS</span>, your
          destination for premium travel and expedition equipment. We empower
          explorers to conquer every terrain with confidence and style.
        </p>

        <div style={styles.divider}>
          <span style={styles.line}></span>
          <span style={styles.star}>✦</span>
          <span style={styles.line}></span>
        </div>

        <div
          style={styles.ctaButton}
          onMouseEnter={() => setHoverBtn(true)}
          onMouseLeave={() => setHoverBtn(false)}
          onClick={() => navigate("/story")}
        >
          EXPLORE OUR STORY
        </div>

        <div style={styles.bottomDivider}></div>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>OUR MISSION</h3>
            <p style={styles.cardSubtitle}>EMPOWERING EXPLORATION</p>
            <p style={styles.cardDesc}>
              Helping adventurers reach new heights by providing reliable,
              premium equipment.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>OUR GEAR</h3>
            <p style={styles.cardSubtitle}>PREMIUM & RENTAL</p>
            <p style={styles.cardDesc}>
              Carefully curated expedition gear available for purchase or
              flexible rental.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>OUR COMMUNITY</h3>
            <p style={styles.cardSubtitle}>JOIN THE GODS</p>
            <p style={styles.cardDesc}>
              A global network of explorers sharing experiences and inspiring
              adventure.
            </p>
          </div>
        </div>
      </div>
    </section>
    <HomePage4 />
    </>
  );
}
