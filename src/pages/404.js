import Head from "next/head";
import Link from "next/link";

export default function Error404() {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      color: "#000",
      backgroundColor: "#fff",
    },
    wrap: {
      display: "flex",
      alignItems: "center",
    },
    title: {
      fontSize: "24px",
      fontWeight: "700",
      display: "inline-block",
      paddingRight: "23px",
      margin: "0 20px 0 0",
      borderRight: "1px solid rgba(0, 0, 0, 0.3)",
    },
    span: {
      fontSize: "14px",
      fontWeight: "400",
      display: "inline-block",
    },
    a: {
      marginTop: "30px",
      background: "var(--primary_color)",
      fontSize: "14.5px",
    },
  };

  return (
    <>
      <Head>
        <title>404: This page could not be found.</title>
      </Head>
      <div style={styles.container}>
        <div style={styles.wrap}>
          <h1 style={styles.title}>404</h1>
          <span style={styles.span}>This page could not be found.</span>
        </div>
        <div>
          <Link href="/" className="theme-btn" style={styles.a}>
            Return to Home
          </Link>
        </div>
      </div>
    </>
  );
}
