// app/Profile/page.js (Server Component)
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function ProfilePage() {
//   const session = await getKindeServerSession();
const {getUser} = getKindeServerSession();
const session = await getUser()


  if (!session?.user) {
    // Redirect to login if there's no user
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold">Redirecting...</h1>
      </div>
    );
  }

  const { firstName } = session.user;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold">Welcome to your profile!</h1>
      <p className="mt-4">Hello, {firstName}!</p>
    </div>
  );
}
