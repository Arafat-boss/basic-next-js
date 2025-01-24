import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import profile from "../Profile/profile.png";

const Profile = async () => {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();
  const { email, family_name, given_name, picture } = user || {};

  return (await isAuthenticated()) ? (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-pink-300 via-pink-400 to-pink-500">
      {/* Profile Card */}
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-xs text-center">
        {/* Profile Image */}
        <div className="relative w-24 h-24 mx-auto mb-4">
          <Image
            src={profile || "/default-profile.png"} // Default image if picture is unavailable
            alt={`${given_name} ${family_name}`}
            width={96}
            height={96}
            className="rounded-full border-4 border-pink-500"
          />
        </div>
        {/* Name */}
        <h2 className="text-lg font-bold text-pink-600">{`${
          given_name || "First Name"
        } ${family_name || "Last Name"}`}</h2>
        {/* Designation */}
        <p className="text-sm text-gray-600">{email}</p>
        {/* Bio */}
        <p className="text-gray-500 text-sm mt-2">
          Passionate Business Consultant with expertise in strategic planning,
          leadership development, and driving innovative solutions for
          organizational growth.
        </p>
        {/* View Profile Button */}

        <Link href="/">
          {" "}
          <button className="mt-4 px-6 py-2 bg-pink-600 text-white font-semibold rounded-full hover:bg-pink-700">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  ) : (
    redirect("/api/auth/login")
  );
};

export default Profile;
