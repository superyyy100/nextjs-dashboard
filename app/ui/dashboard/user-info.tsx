import { auth } from "@/auth";
export default async function UserInfo() {
    const session = await auth();
    return (
      <div className="w-full flex flex-col items-start justify-center p-2">
        <p>{session?.user?.name}</p>
        <p>{session?.user?.email}</p>
      </div>
    );
  }