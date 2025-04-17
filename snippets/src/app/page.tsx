import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {
  const snippets = await prisma.snippets.findMany();
  return (
    <main>
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Snippets</h1>
        <Link href={"/snippets/new"}>
          <Button
            size={"lg"}
            variant={"default"}
            className="text-lg rounded-sm"
          >
            Add New Snippet
          </Button>
        </Link>
      </header>

      <section className="mt-10">
        {snippets.map((snippet) => (
          <div className="flex items-center justify-between" key={snippet.id}>
            <h1 className="text-2xl capitalize">{snippet.title}</h1>
            <Link href={`/snippets/${snippet.id}`}>
              <Button variant={"outline"}>View snippet</Button>
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}
