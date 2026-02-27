import { getDraft } from "@/lib/storage/drafts";
import { notFound } from "next/navigation";
import PreviewActions from "@/components/agreement/PreviewActions";
import { idTrace } from "@/lib/idtrace";

type Props = {
  searchParams: Promise<{ draftId?: string }>;
};

export default async function PreviewPage({ searchParams }: Props) {
  const { draftId } = await searchParams;

  idTrace("preview:searchParams.draftId", draftId);

  if (!draftId) return notFound();

  const draft = await getDraft(draftId);
  if (!draft) return notFound();

  idTrace("preview:loaded_draft.id", draft.id);

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Agreement Preview</h1>
          <p className="text-sm text-slate-600 mt-1">
            Status: <strong>{draft.status}</strong>
          </p>
        </div>

        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <div dangerouslySetInnerHTML={{ __html: draft.html }} />
        </div>

        <PreviewActions draftId={draft.id} />
      </div>
    </main>
  );
}
