'use client'

import { createSnippet } from "@/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { useActionState } from "react";

export default function CreateNewSnippet() {
  //server action

  // async function createSnippet(formData: FormData) {
  //   "use server";
  //   const title = formData.get("title") as string;
  //   const description = formData.get("description") as string;
  //   const code = formData.get("code") as string;

  //   const snippets = await prisma.snippets.create({
  //     data: {
  //       title,
  //       description,
  //       code,
  //     },
  //   });

  //   console.log('snippet generated', snippets);
    
  //   redirect('/')
  // }

  const [formStateData, actions] = useActionState(createSnippet, {message: ''})

  return (
    <section className="flex items-center justify-center flex-col">
      <h1 className="text-2xl mb-5">Add New Snippet</h1>
      <form className="w-80" action={actions}>
        <div className="mb-4">
          <Label htmlFor="title" className="text-xl">
            Title
          </Label>
          <Input
            name="title"
            placeholder="Title of the snippet"
            type="text"
            id="title"
          />
      
        </div>

        <div className="mb-4">
          <Label htmlFor="description" className="text-xl">
            Description
          </Label>
          <Textarea
            placeholder="Your snippet description here."
            id="description"
            name="description"
          />
         
        </div>

        <div className="mb-4">
          <Label htmlFor="snippet" className="text-xl">
            Snippet
          </Label>
          <Textarea
            placeholder="Your snippet here."
            id="snippet"
            name="code"
          />
        </div>

          {formStateData.message && <p className="text-red-700">{formStateData.message}</p>}
        <Button
          className="text-lg"
          variant={"default"}
          size={"lg"}
          type="submit"
        >
          Add Snippet
        </Button>
      </form>
    </section>
  );
}
