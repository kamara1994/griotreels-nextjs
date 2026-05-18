export default function PrivacyPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050407",
        color: "#f5e6c8",
        padding: "80px 8%",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: 900,
          margin: "0 auto",
          border: "1px solid rgba(212,168,83,0.25)",
          borderRadius: 24,
          padding: 42,
          background: "rgba(255,255,255,0.04)",
        }}
      >
        <h1 style={{ color: "#d4a853", marginBottom: 20 }}>
          Griot Reels Privacy Policy
        </h1>

        <p style={{ lineHeight: 1.8, color: "#cbd5e1" }}>
          Griot Reels respects user privacy. This website is used to demonstrate
          our TikTok Developer integration and content posting workflow.
        </p>

        <h2 style={{ color: "#f5e6c8", marginTop: 30 }}>
          Information We Collect
        </h2>
        <p style={{ lineHeight: 1.8, color: "#cbd5e1" }}>
          Griot Reels does not collect, store, sell, or share TikTok user data.
          We do not collect followers, comments, messages, private profile data,
          or audience analytics.
        </p>

        <h2 style={{ color: "#f5e6c8", marginTop: 30 }}>
          TikTok API Use
        </h2>
        <p style={{ lineHeight: 1.8, color: "#cbd5e1" }}>
          Griot Reels uses TikTok Login Kit only to authorize the official
          @GriotReels TikTok account. We use TikTok Content Posting API only to
          upload original Griot Reels video content to TikTok drafts.
        </p>

        <h2 style={{ color: "#f5e6c8", marginTop: 30 }}>
          Data Sharing
        </h2>
        <p style={{ lineHeight: 1.8, color: "#cbd5e1" }}>
          Griot Reels does not sell, rent, trade, or share user data with third
          parties.
        </p>

        <h2 style={{ color: "#f5e6c8", marginTop: 30 }}>
          Contact
        </h2>
        <p style={{ lineHeight: 1.8, color: "#cbd5e1" }}>
          For privacy questions, contact the site owner through the official
          Griot Reels website.
        </p>
      </section>
    </main>
  );
}