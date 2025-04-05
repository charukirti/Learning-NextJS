import Input from "./ui/Input";
import Label from "./ui/Label";

export default function UserForm({
  action,
}: {
  action: (formData: FormData) => void;
}) {
  return (
    <form className="bg-white w-96 text-black p-4 mt-4" action={action}>
      <div className="flex flex-col gap-1 mb-3">
        <Label htmlFor="name">Name</Label>
        <Input type="text" placeholder="Enter your name" name="name" />
      </div>
      <div className="flex flex-col gap-1 mb-3">
        <Label htmlFor="username">Username</Label>
        <Input type="text" placeholder="Enter your username" name="username" />
      </div>
      <div className="flex flex-col gap-1 mb-3">
        <Label htmlFor="Email">Email</Label>
        <Input type="email" placeholder="Enter your email" name="email" />
      </div>
      <div className="flex flex-col gap-1 mb-3">
        <Label htmlFor="avatar">Avatar</Label>
        <Input type="url" placeholder="Enter your avatar" name="avatar" />
      </div>
      <div className="flex flex-col gap-1 mb-3">
        <Label htmlFor="dateOfBirth">Date of birth</Label>
        <Input
          type="date"
          placeholder="Enter your Date of birth"
          name="dateOfBirth"
        />
      </div>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          className="bg-blue-500 p-2 rounded text-xl cursor-pointer"
        >
          Submit
        </button>
        <button
          type="reset"
          className="bg-blue-500 p-2 rounded text-xl cursor-pointer"
        >
          Reset
        </button>
      </div>
    </form>
  );
}
