"use client";

export default function GlobalError({ error }: { error: Error }) {
  return (
    <html>
      <body style={{ padding: 24 }}>
        <h1>Application error</h1>
        <p>{error.message}</p>
      </body>
    </html>
  );
}