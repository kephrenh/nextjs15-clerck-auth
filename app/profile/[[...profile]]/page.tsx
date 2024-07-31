import { UserProfile } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const { userId } = auth();
  const isAuth = !!userId;
  const user = await currentUser();

  if (!isAuth) {
    redirect("/");
  }

  return (
    <section className="h-full flex flex-col mt-8 justify-center items-center">
      <h1 className="text-2xl">Welcome, {user?.firstName}</h1>
      <UserProfile />
    </section>
  );
};

export default ProfilePage;
