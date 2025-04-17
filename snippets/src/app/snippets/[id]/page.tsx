import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { deleteSnippet } from "@/actions";
import Link from "next/link";

export default async function SnippetDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // const { id } = (await params);

  const id = parseInt((await params).id);

  const snippet = await prisma.snippets.findUnique({
    where: {
      id,
    },
  });

  const deleteSnippetAction = deleteSnippet.bind(null, id);

  console.log(id);
  return (
    <section>
      <header className="flex items-center justify-between">
        <h1 className="font-bold text-xl capitalize">{snippet?.title}</h1>
        <div className="flex items-center gap-2">
          <Link href={`/snippets/${id}/edit`}>
            <Button variant={"outline"}>Edit</Button>
          </Link>
          <Button variant={"destructive"} onClick={deleteSnippetAction}>
            Delete
          </Button>
        </div>
      </header>

      <main className="mt-8">
        <pre className="bg-gray-300 p-3">
          <code>{snippet?.code}</code>
        </pre>
      </main>
    </section>
  );
}
