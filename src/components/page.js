import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Next Js</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="space-x-5 menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/Profile">Profile</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <Link href="/dashboard" className="btn btn-primary">
              Dashboard
            </Link>
            <Link href="/api/auth/logout" className="btn">
              Log out
            </Link>
          </>
        ) : (
          <Link href="/api/auth/login" className="btn btn-secondary">
            Log in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
