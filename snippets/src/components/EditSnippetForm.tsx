"use client";

import { Editor } from "@monaco-editor/react";
import type { Snippets } from "@/generated/prisma";
import { useState } from "react";
import { saveSnippet } from "@/actions";
import { Button } from "./ui/button";

export default function EditSnippetForm({ snippets }: { snippets: Snippets }) {
  const [code, setCode] = useState(snippets.code);

  const handleCodeChange = (value: string = "") => {
    setCode(value);
  };

  const saveSnippetAction = saveSnippet.bind(null, snippets.id, code);
  return (
    <section className="flex flex-col gap-4">
      <form action={saveSnippetAction}>
        <Button type="submit">Save Changes</Button>
      </form>

      <Editor
        height="50vh"
        defaultLanguage="javascript"
        defaultValue={code}
        theme="vs-dark"
        onChange={handleCodeChange}
      />
    </section>
  );
}
