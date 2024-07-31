import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

const Navbar = () => {
  const { userId } = auth();
  return (
    <nav className="bg-cyan-950 rounded-b-xl">
      <ul className="flex justify-between py-4 px-6">
        <div>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
        </div>
        <div className="flex items-center">
          <li>
            <Link href={"/client"}>Client Page</Link>
          </li>
        </div>
        <div className="flex items-center gap-6">
          {!userId ? (
            <>
              <li>
                <Link href={"/sign-in"}>Sign In</Link>
              </li>
              <li>
                <Link href={"/sign-up"}>Sign Up</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href={"/profile"}>Profile</Link>
              </li>
              <li className="flex items-center">
                <UserButton />
              </li>
            </>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
