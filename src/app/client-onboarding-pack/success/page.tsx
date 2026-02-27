import { getDraft } from "@/lib/storage/drafts";
import { idTrace } from "@/lib/idtrace";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ draftId?: string }>;
}) {
  const { draftId } = await searchParams;

  idTrace("success:searchParams.draftId", draftId);

  if (!draftId) return <div>Missing draft ID.</div>;

  const draft = await getDraft(draftId);
  if (!draft) return <div>Draft not found.</div>;

  idTrace("success:loaded_draft.id", draft.id);

  return (
    <main style={{ padding: "2rem", maxWidth: 700, margin: "0 auto" }}>
      <h1>Payment Successful 🎉</h1>
      <p>Status: {draft.status}</p>
      <p>Draft ID: {draft.id}</p>

      {draft.status === "fulfilled" ? (
        <p>Your agreement is confirmed. (PDF/email next step)</p>
      ) : (
        <p>Processing payment… refresh in a moment.</p>
      )}
    </main>
  );
}
