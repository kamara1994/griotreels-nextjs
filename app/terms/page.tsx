export default function TermsPage() {
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
          Griot Reels Terms of Service
        </h1>

        <p style={{ lineHeight: 1.8, color: "#cbd5e1" }}>
          Griot Reels is a digital storytelling platform that creates and
          publishes serialized short-form video episodes to our official social
          media channels.
        </p>

        <h2 style={{ color: "#f5e6c8", marginTop: 30 }}>Use of Service</h2>
        <p style={{ lineHeight: 1.8, color: "#cbd5e1" }}>
          This website is used to demonstrate the Griot Reels content posting
          workflow and TikTok Developer integration. The platform is for
          internal brand use only.
        </p>

        <h2 style={{ color: "#f5e6c8", marginTop: 30 }}>Content</h2>
        <p style={{ lineHeight: 1.8, color: "#cbd5e1" }}>
          All videos, stories, scripts, captions, and brand materials created
          for Griot Reels are original brand content or content prepared for the
          Griot Reels platform.
        </p>

        <h2 style={{ color: "#f5e6c8", marginTop: 30 }}>TikTok Integration</h2>
        <p style={{ lineHeight: 1.8, color: "#cbd5e1" }}>
          Griot Reels uses TikTok Login Kit to authorize the official TikTok
          account and TikTok Content Posting API to upload original video
          content to TikTok drafts.
        </p>

        <h2 style={{ color: "#f5e6c8", marginTop: 30 }}>Contact</h2>
        <p style={{ lineHeight: 1.8, color: "#cbd5e1" }}>
          For questions about Griot Reels, contact the site owner through the
          official Griot Reels website.
        </p>
      </section>
    </main>
  );
}