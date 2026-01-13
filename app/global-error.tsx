"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error("[global-error]", error);

  return (
    <html>
      <body style={{ padding: 24 }}>
        <h2>Hiba történt</h2>
        <p>{error.message}</p>
        <button onClick={() => reset()}>Újrapróbálom</button>
      </body>
    </html>
  );
}
