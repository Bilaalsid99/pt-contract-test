import { idTrace } from "@/lib/idtrace";
import StatusPoller from "./StatusPoller";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ draftId?: string }>;
}) {
  const { draftId } = await searchParams;

  idTrace("success:searchParams.draftId", draftId);

  if (!draftId) return <div>Missing draft ID.</div>;

  return (
    <main style={{ padding: "2rem", maxWidth: 700, margin: "0 auto" }}>
      <h1>Payment Successful 🎉</h1>
      <p>Draft ID: {draftId}</p>
      <StatusPoller draftId={draftId} />
    </main>
  );
}