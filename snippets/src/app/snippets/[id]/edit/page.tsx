import EditSnippetForm from "@/components/EditSnippetForm";
import { prisma } from "@/lib/prisma";

export default async function EditSnippet({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = parseInt((await params).id);

  const snippets = await prisma.snippets.findUnique({
    where: {
      id,
    },
  });

  if (!snippets) return <h1>No snippet found!</h1>;

  return (
    <section>
      <header>
        <h1>Edit Snippet</h1>
      </header>
      <main className="mt-10">
        <EditSnippetForm snippets={snippets} />
      </main>
    </section>
  );
}
