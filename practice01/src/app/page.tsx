import Card from "@/components/Card";
import Link from "next/link";

export default async function Home() {
  const response = await fetch(
    "https://67efdb7a2a80b06b889609cd.mockapi.io/users"
  );
  const users = await response.json();

  console.log(users)
  return (
    <section className="p-5 container mx-auto mt-5">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl">All Users</h2>
        <Link href="/add-user" className="bg-blue-500 p-2 rounded text-xl">
          Add user
        </Link>
      </div>

      <section className="grid grid-cols-4 gap-5 mt-5">
        {users.map(user => <Card user={user} key={user.id}/>)}
      </section>
    </section>
  );
}
