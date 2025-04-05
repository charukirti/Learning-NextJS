import UserForm from "@/components/UserForm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function addUser() {
  async function addUser(formData: FormData) {
    "use server";

    const name = formData.get("name");
    const username = formData.get("username");
    const email = formData.get("email");
    const avatar = formData.get("avatar");
    const dateOfBirth = formData.get("dateOfBirth");

    console.log(name, username, email, avatar, dateOfBirth);

    const response = await fetch(
      "https://67efdb7a2a80b06b889609cd.mockapi.io/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, username, email, avatar, dateOfBirth }),
      }
    );
      
      const newUser = await response.json();

      revalidatePath('/')
      redirect('/')
      console.log(newUser)
  }
  return (
    <section>
      <h2 className="text-center text-xl font-bold">Add Users</h2>

      <div className="flex items-center justify-center">
        <UserForm action={addUser} />
      </div>
    </section>
  );
}
