function Footer() {
  return (
    <footer className="section" style={{ paddingTop: "2rem", paddingBottom: "2.5rem" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          fontSize: "0.85rem",
          color: "#9ca3af",
        }}
      >
        <span>© {new Date().getFullYear()} S. &amp; J. Associates. All rights reserved.</span>
        <span>
          Disclaimer: This website is for informational purposes only and does not constitute legal
          advice.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
