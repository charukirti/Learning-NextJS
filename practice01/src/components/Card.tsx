import Image from "next/image";

export default function Card({ user }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    return `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`;
  };
  return (
    <article className="border flex items-center gap-9 w-full p-3">
      <div className="h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
        {user.avatar && user.avatar.includes("github") ? (
          <Image
            src={user.avatar}
            alt={`${user.name}'s avatar`}
            width={64}
            height={64}
            className="object-cover"
          />
        ) : (
          <Image
            src={user.avatar || "/placeholder-avatar.png"}
            alt={`${user.name}'s avatar`}
            className="w-full h-full object-cover"
            width={64}
            height={64}
          />
        )}
      </div>

      <div>
        <h2 className="text-xl font-bold">{user.name}</h2>
        <span className="text-sm">@j{user.username}</span>

        <p>Birthdate: {formatDate(user.dateOfBirth)}</p>
      </div>
    </article>
  );
}
