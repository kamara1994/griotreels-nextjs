export default function TikTokAuthCallback() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050407",
        color: "#f5e6c8",
        padding: "80px 8%",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <section
        style={{
          maxWidth: 820,
          border: "1px solid rgba(212,168,83,0.25)",
          borderRadius: 24,
          padding: 42,
          background: "rgba(255,255,255,0.04)",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#d4a853", marginBottom: 20 }}>
          TikTok Authorization Callback
        </h1>

        <p style={{ lineHeight: 1.8, color: "#cbd5e1", fontSize: 18 }}>
          This page is used as the OAuth redirect URI for the Griot Reels TikTok
          Developer integration.
        </p>

        <p style={{ lineHeight: 1.8, color: "#94a3b8", fontSize: 16 }}>
          After authorization, TikTok redirects the authorized user back to this
          page. Griot Reels uses Login Kit only to authorize the official
          @GriotReels TikTok account and Content Posting API only to upload
          original videos to TikTok drafts.
        </p>

        <p style={{ lineHeight: 1.8, color: "#94a3b8", fontSize: 16 }}>
          Griot Reels does not collect, store, sell, or share TikTok user data.
        </p>
      </section>
    </main>
  );
}